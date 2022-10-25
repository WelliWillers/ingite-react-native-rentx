import React from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Header, TotalCars,HeaderContent } from './styles';
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car';

export function Home() {

  const carData = {
    brand: 'audi',
    name: "RS 5 Coupé",
    rent: {
        period: 'Ao dia',
        price: 120
    },
    thambnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
  }

  return (
    <Container>
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

      <Car 
        props={carData}
      />
    </Container>
  );
}