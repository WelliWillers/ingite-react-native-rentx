import React from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Header, TotalCars,HeaderContent, CarList } from './styles';
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car';
import { StatusBar } from 'react-native';

export function Home() {

  const carData = [
    {
      id: '1',
      brand: 'audi',
      name: "RS 5 Coupé",
      rent: {
          period: 'Ao dia',
          price: 120
      },
      thambnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    },
    {
      id: '2',
      brand: 'audi',
      name: "RS 5 Coupé",
      rent: {
          period: 'Ao dia',
          price: 120
      },
      thambnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    },
    {
      id: '3',
      brand: 'audi',
      name: "RS 5 Coupé",
      rent: {
          period: 'Ao dia',
          price: 120
      },
      thambnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    },
    {
      id: '4',
      brand: 'audi',
      name: "RS 5 Coupé",
      rent: {
          period: 'Ao dia',
          price: 120
      },
      thambnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    },
    {
      id: '5',
      brand: 'audi',
      name: "RS 5 Coupé",
      rent: {
          period: 'Ao dia',
          price: 120
      },
      thambnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    },
    {
      id: '6',
      brand: 'audi',
      name: "RS 5 Coupé",
      rent: {
          period: 'Ao dia',
          price: 120
      },
      thambnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    }
  ]

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

      <CarList
        keyExtractor={item => String(item.id)}
        data={carData}
        renderItem={({item}) => (
          <Car 
            props={item}
          />
        )}
      />
    </Container>
  );
}