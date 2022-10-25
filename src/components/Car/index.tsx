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

interface CarProps {
    props: CarData
}

interface CarData {
    brand: string
    name: string
    rent: {
        period: string
        price: number
    }
    thambnail: string
}

export function Car({props}: CarProps) {
  return (
    <Container>
        <Details>
            <Brand>{props.brand}</Brand>
            <Name>{props.name}</Name>
            <About>
                <Rent>
                    <Period>{props.rent.period}</Period>
                    <Price>{`R$ ${props.rent.price}`}</Price>
                </Rent>

                <Type>
                    <GasolinaSVG/>
                </Type>
            </About>
        </Details>

        <CarImage source={{uri: props.thambnail}} resizeMode="contain" />
    </Container>
  );
}