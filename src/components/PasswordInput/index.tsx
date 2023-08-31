import React, { useState } from "react";
import theme from "../../styles/theme";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Container, IconContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value: string;
}

export function PasswordInput({ value, iconName, ...rest }: InputProps) {
  const [show, setShow] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  function handleIsFocused() {
    setIsFocus(true);
  }

  function handleIsBlured() {
    setIsFocus(false);
  }
  return (
    <Container>
      <IconContainer isFocus={isFocus}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocus || !!value ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>

      <InputText
        isFocus={isFocus}
        onFocus={handleIsFocused}
        onBlur={handleIsBlured}
        secureTextEntry={!show}
        {...rest}
      />

      <BorderlessButton onPress={() => setShow(!show)}>
        <IconContainer isFocus={isFocus}>
          <Feather
            name={!show ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}
