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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,

  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

import SpeedSvg from '../../assets/speed.svg' 
import AccelerateSvg from '../../assets/acceleration.svg' 
import ForceSvg from '../../assets/force.svg' 
import GasolineSvg from '../../assets/gasoline.svg' 
import ExchangeSvg from '../../assets/exchange.svg' 
import PeopleSvg from '../../assets/people.svg' 
import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


export function SchedulingDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {Alert.alert('teste')}}/>
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>29/21/2022</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>29/21/2022</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1600</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button title="Confirmar" color={theme.colors.main} />
      </Footer>
    </Container>
  );
}