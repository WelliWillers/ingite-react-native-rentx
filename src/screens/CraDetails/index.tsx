import React from 'react';
import { Alert } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Container, Header } from './styles';

export function CraDetails() {
  return (
    <Container>
        <Header>
            <BackButton onPress={() => {Alert.alert('teste')}}/>

        </Header>

        <ImageSlider  imagesUrl={['https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png']} /> 
    </Container>
  );
}