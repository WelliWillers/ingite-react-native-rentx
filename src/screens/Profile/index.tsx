import React from "react";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderTop,
  LogoutButton,
  Photo,
  PhotoButton,
  PhotoContainer,
} from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { BackButton } from "../../components/BackButton";

export function Profile() {
  const theme = useTheme();
  const { goBack } = useNavigation();

  function handleBack() {
    goBack();
  }

  function handleSinOut() {
    goBack();
  }

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton
            color={theme.colors.shape}
            onPress={handleBack}
          ></BackButton>
          <HeaderTitle>Editar perfil</HeaderTitle>
          <LogoutButton onPress={handleSinOut}>
            <Feather name={"power"} size={24} color={theme.colors.shape} />
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo
            source={{
              uri: "https://avatars.githubusercontent.com/u/40187751?v=4",
            }}
          />
          <PhotoButton onPress={() => {}}>
            <Feather name={"camera"} size={24} color={theme.colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </Header>
    </Container>
  );
}
