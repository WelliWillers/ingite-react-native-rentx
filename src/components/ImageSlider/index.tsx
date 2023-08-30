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

interface Props {
  imagesUrl: string[];
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
        {imagesUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImagesWrapper>
            <CarImage source={{ uri: `${item}` }} resizeMode="contain" />
          </CarImagesWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={IndexChanged.current}
      />
    </Container>
  );
}
