import React from "react";
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Car as CarModel } from "../../database/model/Car";
import { getAccessoryIcon } from "../../utils/getAccessoriIcon";
import { useNetInfo } from "@react-native-community/netinfo";

export interface CarProps extends TouchableOpacityProps {
  data: CarModel;
}

export function Car({ data, ...rest }: CarProps) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  const netInfo = useNetInfo();
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${
              netInfo.isConnected === true ? data.price : "..."
            }`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
