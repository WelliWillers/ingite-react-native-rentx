import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Header, TotalCars,HeaderContent, CarList, MyCarButtons } from './styles';
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car';
import { SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { AxiosError } from 'axios';
import { CarDTO } from '../dtos/CarDTO';
import { Load } from '../../components/Load';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../styles/theme';

export function Home() {
  const { navigate } = useNavigation()
  const [ cars, setCars ] = useState<CarDTO[]>()
  const [ loading, setLoading ] = useState(true)

  function handleShowCarDetails(car: CarDTO){
    navigate('CarDetails', {car})
  }
  
  function handleOpenMyCars(){
    navigate('MyCars')
  }

  useEffect(() => {
    async function fetchCars(){
      await api.get('/cars')
        .then((res) => {
          setCars(res.data)
        })
        .catch((Error: AxiosError) => {
          console.error(Error)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    fetchCars()
  }, [])

  return (
    <Container>
      <StatusBar 
        backgroundColor="transparent"
        translucent
        barStyle='light-content'
      />
      <Header> 
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      {
        loading ? <Load /> : (
          <CarList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Car 
                data={item}
                onPress={() => handleShowCarDetails(item)}
              />
            )}
          />
        )
      }

      <MyCarButtons onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </MyCarButtons>

    </Container>
  );
}