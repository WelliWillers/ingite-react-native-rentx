import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import * as yup from "yup";

export function SignUpFirstStep() {
  const { goBack } = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnh, setCnh] = useState("");

  const { navigate } = useNavigation();

  async function handleNextStep() {
    try {
      const schema = yup.object().shape({
        cnh: yup.string().required("CNH obrigatória"),
        email: yup
          .string()
          .required("E-mail obrigatório")
          .email("Deve ser um email válido"),
        name: yup.string().required("Nome obrigatório"),
      });

      const data = { name, email, cnh };

      await schema.validate(data);
      navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      } else {
        return Alert.alert("Opa", "Algo deu errado, tente novamente.");
      }
    }
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
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua {"\n"}conta</Title>
          <SubTitle>Crie seu cadastro de {"\n"}forma rápida</SubTitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              keyboardType="default"
              autoCorrect={false}
              onChangeText={setName}
              value={name}
              autoCapitalize="none"
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Input
              iconName="credit-card"
              onChangeText={setCnh}
              value={cnh}
              placeholder="CNH"
              keyboardType="numeric"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Form>

          <Footer>
            <Button title="Próximo" onPress={handleNextStep} loading={false} />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
