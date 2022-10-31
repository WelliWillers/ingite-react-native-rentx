import React from 'react';
import { StatusBar } from 'react-native';
import { 
    Container,
    ImageIndexes,
    ImageIndex,
    CarImagesWrapper,
    CarImage
} from './styles';

interface Props {
    imagesUrl: string[];
}

export function ImageSlider({imagesUrl}: Props) {

    console.log(imagesUrl[0])
  return (
    <Container>
        <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle='dark-content'
        />
        <ImageIndexes>
            <ImageIndex active={true}></ImageIndex>
            <ImageIndex active={false}></ImageIndex>
            <ImageIndex active={false}></ImageIndex>
        </ImageIndexes>

        <CarImagesWrapper>
            <CarImage source={{uri: `${imagesUrl[0]}`}} resizeMode="contain" />
        </CarImagesWrapper>
    </Container>
  );
}