import React, { useState } from "react";
import { Container, Footer, Header, SubTitle, Title, Form } from "./styles";
import {
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "../../components/Button";
import theme from "../../styles/theme";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              onPress={() => {}}
              enabled={!!email || !!password}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              onPress={() => {}}
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
