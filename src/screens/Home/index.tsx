import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { CarDTO } from "../dtos/CarDTO";
import { Load } from "../../components/Load";
import { useNetInfo } from "@react-native-community/netinfo";

import { synchronize } from "@nozbe/watermelondb/sync";
import { database } from "../../database";
import { Car as ModelCar } from "../../database/model/Car";

export function Home() {
  const { navigate } = useNavigation();
  const [cars, setCars] = useState<ModelCar[]>([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();

  function handleShowCarDetails(car: ModelCar) {
    navigate("CarDetails", { car });
  }

  async function offlineSinchronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api.get(
          `/cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`
        );

        const { changes, latestVersion } = response.data;

        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users;

        await api.post("/users/sync", user);
      },
    });
  }

  useEffect(() => {
    let isMouted = true;

    async function fetchCars() {
      try {
        const carCollection = database.get<ModelCar>("cars");
        const cars = await carCollection.query().fetch();

        if (isMouted) {
          setCars(cars);
        }
      } catch (error) {
      } finally {
        if (isMouted) {
          setLoading(false);
        }
      }
    }

    fetchCars();
  }, []);

  useEffect(() => {
    if (netInfo.isConnected === true) {
      offlineSinchronize();
    }
  }, [netInfo.isConnected]);

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {cars && <TotalCars>Total {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleShowCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
