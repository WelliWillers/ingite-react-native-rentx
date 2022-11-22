import React from 'react';
import { Alert } from 'react-native';
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

import SpeedSvg from '../../assets/speed.svg' 
import AccelerateSvg from '../../assets/acceleration.svg' 
import ForceSvg from '../../assets/force.svg' 
import GasolineSvg from '../../assets/gasoline.svg' 
import ExchangeSvg from '../../assets/exchange.svg' 
import PeopleSvg from '../../assets/people.svg' 
import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';

export function CarDetails() {
  const {goBack, navigate} = useNavigation()

  function handleConfirm(){
    navigate('Scheduling')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}/>
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png', 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png']} /> 
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>AUDI</Brand>
            <Name>Name</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380km/h" icon={SpeedSvg}/>
          <Acessory name="3.2s" icon={AccelerateSvg}/>
          <Acessory name="800 HP" icon={ForceSvg}/>
          <Acessory name="Gasoline" icon={GasolineSvg}/>
          <Acessory name="Auto" icon={ExchangeSvg}/>
          <Acessory name="2 pessoas" icon={PeopleSvg}/>
        </Acessories>

        <About>
          mdhjkash dkhjgashd gkhjasgd hjagd gasjg dhjasd hjasg jdhgsahd gjahsgd jhgfygdywu gsda yusdguyawgd uysgd uygawyud gauwgd usayg duywgduysgdyuwdguysgdahjwdgusyadghjwdgyu
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" color={theme.colors.main} onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}