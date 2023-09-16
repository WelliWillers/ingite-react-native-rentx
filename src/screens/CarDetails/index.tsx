import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";
import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from "./styles";

import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoriIcon";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { StatusBar, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useTheme } from "styled-components";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const { goBack, navigate } = useNavigation();

  const route = useRoute();
  const theme = useTheme();
  const { car } = route.params as Params;

  const scrollInY = useSharedValue(0);

  const scrollHandle = useAnimatedScrollHandler((event) => {
    scrollInY.value = event.contentOffset.y;
  });

  const headerAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollInY.value,
        [0, 200],
        [200, 90],
        Extrapolate.CLAMP
      ),
    };
  });

  const carOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollInY.value, [0, 200], [1, 0]),
      transform: [
        {
          translateY: interpolate(
            scrollInY.value,
            [0, 150],
            [0, -25],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  function handleConfirm() {
    navigate("Scheduling", { car });
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={"transparent"}
      />
      <Animated.View
        style={[
          headerAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary },
        ]}
      >
        <Header>
          <BackButton style={styles.back} onPress={goBack} />
        </Header>
        <Animated.View style={carOpacity}>
          <CarImages>
            <ImageSlider imagesUrl={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandle}
        contentContainerStyle={{
          paddingTop: getStatusBarHeight() + 160,
          paddingHorizontal: 24,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.period}</Period>
            <Price>{`R$ ${car.price}`}</Price>
          </Rent>
        </Details>

        <Acessories>
          {car.accessories.map((acc) => (
            <Acessory
              key={acc.type}
              name={acc.name}
              icon={getAccessoryIcon(acc.type)}
            />
          ))}
        </Acessories>

        <About>{car.about}</About>
      </Animated.ScrollView>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          color={theme.colors.main}
          onPress={handleConfirm}
        />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
  back: {
    marginTop: -5,
    zIndex: 2,
  },
});
