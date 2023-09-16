import React, { useRef, useState } from "react";
import { StatusBar, ViewToken } from "react-native";
import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImagesWrapper,
  CarImage,
} from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { Bullet } from "../Bullet";

interface Props {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
}

interface ChangedImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const IndexChanged = useRef((info: ChangedImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <ImageIndexes>
        {imagesUrl.map((item, index) => (
          <Bullet key={item.id} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarImagesWrapper>
            <CarImage source={{ uri: `${item.photo}` }} resizeMode="contain" />
          </CarImagesWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={IndexChanged.current}
      />
    </Container>
  );
}
