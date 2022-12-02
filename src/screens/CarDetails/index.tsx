import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles';

import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoriIcon';

interface Params {
  car: CarDTO
}

export function CarDetails() {
  const {goBack, navigate} = useNavigation()

  const route = useRoute()
  const { car } = route.params as Params

  function handleConfirm(){
    navigate('Scheduling')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} /> 
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
        </Details>

        <Acessories>
          {
            car.accessories.map(acc => <Acessory key={acc.type} name={acc.name} icon={getAccessoryIcon(acc.type)}/>)
          }
        </Acessories>

        <About>
          {car.about}
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" color={theme.colors.main} onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}