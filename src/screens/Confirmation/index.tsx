import React from "react";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { StatusBar, useWindowDimensions } from "react-native";
import { Container, Content, Title, Message, Footer } from "./styles";
import { Button } from "../../components/Button";
import theme from "../../styles/theme";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
  title: string;
  message: string;
  buttomTitle: string;
  nextScreenRouter: keyof ReactNavigation.RootParamList;
}

export function Confirmation() {
  const router = useRoute();
  const params = router.params as Params;

  const { width } = useWindowDimensions();

  const { navigate } = useNavigation();

  function handleConfirm() {
    navigate(params.nextScreenRouter);
  }

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{params.title}</Title>

        <Message>{params.message}</Message>
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          color={theme.colors.main}
          onPress={handleConfirm}
        />
      </Footer>
    </Container>
  );
}
