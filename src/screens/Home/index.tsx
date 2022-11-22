import React from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Header, TotalCars,HeaderContent, CarList } from './styles';
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const { navigate } = useNavigation()

  const carData = {
    brand: 'audi',
    name: "RS 5 Coupé",
    rent: {
      period: 'Ao dia',
      price: 120
    },
    thambnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
  }
  

  function handleShowCarDetails(){
    navigate('CarDetails')
  }

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
        data={[1,2,3,4,5,6,7,8,9]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => (
          <Car 
            data={carData}
            onPress={handleShowCarDetails}
          />
        )}
      />
    </Container>
  );
}