import React from 'react';
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
    CarImage
} from './styles';
import GasolinaSVG from '../../assets/gasoline.svg'
import { RectButtonProps } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';

export interface CarProps extends TouchableOpacityProps{
    data: CarData
}

export interface CarData {
    brand: string
    name: string
    rent: {
        period: string
        price: number
    }
    thambnail: string
}

export function Car({data, ...rest}: CarProps) {
  return (
    <Container {...rest}>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>
            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{`R$ ${data.rent.price}`}</Price>
                </Rent>

                <Type>
                    <GasolinaSVG/>
                </Type>
            </About>
        </Details>

        <CarImage source={{uri: data.thambnail}} resizeMode="contain" />
    </Container>
  );
}