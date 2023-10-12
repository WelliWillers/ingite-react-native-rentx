import React, { useState } from "react";
import {
  Container,
  Content,
  Header,
  HeaderTitle,
  HeaderTop,
  LogoutButton,
  Option,
  OptionTitle,
  Options,
  Photo,
  PhotoButton,
  PhotoContainer,
  Section,
} from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as yup from "yup";

import { Feather } from "@expo/vector-icons";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { PasswordInput } from "../../components/PasswordInput";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { useNetInfo } from "@react-native-community/netinfo";

export function Profile() {
  const { user, signOut, updateUser } = useAuth();
  const theme = useTheme();
  const netInfo = useNetInfo();
  const { goBack } = useNavigation();

  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [drive, setDrive] = useState(user.driver_license);

  function handleBack() {
    goBack();
  }

  async function handleChangeAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    const { uri } = result as any;

    if (uri) {
      setAvatar(uri);
    }
  }

  async function handleProfileUpdate() {
    try {
      const schema = yup.object().shape({
        drivarLicence: yup.string().required("CNH é obrigatória"),
        name: yup.string().required("Nome é obrigatório"),
      });

      const data = {
        name,
        drive,
      };

      await schema.validate(data);

      await updateUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        name,
        driver_license: drive,
        avatar,
        token: user.token,
      });

      Alert.alert("Uhulll", "Perfil atualizado");
    } catch (Error) {
      if (Error instanceof yup.ValidationError) {
        Alert.alert("Opa", Error.message);
      } else {
        Alert.alert("Não foi possível atualizar o perfil");
      }
    }
  }

  function handleSingOut() {
    Alert.alert(
      "Tem certeza?",
      "Caso confirmar, irá precisar de internet para se conectar novamente.",
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: signOut,
          style: "default",
        },
      ]
    );
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton
                color={theme.colors.shape}
                onPress={handleBack}
              ></BackButton>
              <HeaderTitle>Editar perfil</HeaderTitle>
              <LogoutButton onPress={handleSingOut}>
                <Feather name={"power"} size={24} color={theme.colors.shape} />
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              {!!avatar && (
                <Photo
                  source={{
                    uri: avatar,
                  }}
                />
              )}
              <PhotoButton onPress={handleChangeAvatar}>
                <Feather name={"camera"} size={24} color={theme.colors.shape} />
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Options>
              <Option
                onPress={() => setOption("dataEdit")}
                active={option === "dataEdit"}
              >
                <OptionTitle active={option === "dataEdit"}>Dados</OptionTitle>
              </Option>

              {netInfo.isConnected === true && (
                <Option
                  onPress={() => setOption("passwordEdit")}
                  active={option === "passwordEdit"}
                >
                  <OptionTitle active={option === "passwordEdit"}>
                    Trocar senha
                  </OptionTitle>
                </Option>
              )}
            </Options>

            {option === "dataEdit" ? (
              <Section>
                <Input
                  iconName="user"
                  defaultValue={user.name}
                  placeholder="Nome"
                  autoCorrect={false}
                  onChangeText={setName}
                />
                <Input
                  iconName="mail"
                  defaultValue={user.email}
                  editable={false}
                />
                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                  onChangeText={setDrive}
                />
              </Section>
            ) : (
              <Section>
                <PasswordInput iconName="lock" placeholder="Senha atual" />
                <PasswordInput iconName="lock" placeholder="Nova senha" />
                <PasswordInput
                  iconName="lock"
                  placeholder="Repetir nova senha"
                />
              </Section>
            )}

            <Button title="Salvar alterações" onPress={handleProfileUpdate} />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
