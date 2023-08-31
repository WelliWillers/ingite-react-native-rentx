import React, { useState } from "react";
import theme from "../../styles/theme";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import { Container, IconContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function Input({ iconName, value, ...rest }: InputProps) {
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
        {...rest}
      />
    </Container>
  );
}
