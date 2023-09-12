import React from "react";
import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../styles/theme";
import { TouchableOpacityProps } from "react-native";
// import { BorderlessButtonProps } from 'react-native-gesture-handler'

interface Props extends TouchableOpacityProps {
  color?: string;
}

export function BackButton({ color = theme.colors.text, ...rest }: Props) {
  return (
    <Container {...rest}>
      <MaterialIcons name="chevron-left" size={24} color={color} />
    </Container>
  );
}
