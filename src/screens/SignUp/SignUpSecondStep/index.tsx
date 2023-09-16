import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
  Footer,
} from "./styles";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";
import theme from "../../../styles/theme";
import { api } from "../../../services/api";

interface Params {
  user: {
    name: string;
    email: string;
    cnh: string;
  };
}

export function SignUpSecondStep() {
  const { goBack } = useNavigation();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const route = useRoute();
  const navigation = useNavigation();

  const { user } = route.params as Params;

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      Alert.alert("Informe a senha e a confirmação");
    }

    if (password != passwordConfirm) {
      Alert.alert("As senhas não são iguais");
    }

    await api
      .post("/users", {
        name: user.name,
        email: user.email,
        driver_license: user.cnh,
        password,
      })
      .then(() => {
        navigation.navigate("Confirmation", {
          title: "Conta Criada",
          buttomTitle: "OK",
          message: `Agora é só fazer login \ne aproveitar!`,
          nextScreenRouter: "SignIn",
        });
      })
      .catch((e) => {
        Alert.alert("Opaaa", "Não foi possível cadastrar");
      });
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="dark-content"
          />
          <Header>
            <BackButton onPress={goBack} />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>Crie sua {"\n"}conta</Title>
          <SubTitle>Crie seu cadastro de {"\n"}forma rápida</SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              onChangeText={setPassword}
              value={password}
              iconName="lock"
              placeholder="Senha"
            />
            <PasswordInput
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
              iconName="lock"
              placeholder="Repetir Senha"
            />
          </Form>

          <Footer>
            <Button
              title="Cadastrar"
              color={theme.colors.success}
              onPress={handleRegister}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
