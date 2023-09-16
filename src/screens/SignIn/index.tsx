import React, { useState } from "react";
import { Container, Footer, Header, SubTitle, Title, Form } from "./styles";
import {
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Button } from "../../components/Button";
import theme from "../../styles/theme";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigation();

  const { singIn } = useAuth();

  async function handleSingIn() {
    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .required("E-mail obrigatório")
          .email("Deve ser um email válido"),
        password: yup.string().required("Senha obrigatória"),
      });

      await schema.validate({ email, password });
      await singIn({ email, password });
      // .then(() => {
      //   // navigate.navigate("Home");
      // });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      } else {
        return Alert.alert("Opa", "Algo deu errado, tente novamente.");
      }
    }
  }

  function handleNewAccount() {
    navigate.navigate("SignUpFirstStep");
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
            <Title>Estamos {"\n"}quase lá</Title>
            <SubTitle>
              Faça seu login para começar {"\n"}uma experiência incrível
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <PasswordInput
              value={password}
              onChangeText={setPassword}
              iconName="lock"
              placeholder="Senha"
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={handleSingIn}
              enabled={!!email || !!password}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              onPress={handleNewAccount}
              light
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
