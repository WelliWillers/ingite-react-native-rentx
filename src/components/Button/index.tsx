import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import theme from "../../styles/theme";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  loading = false,
  light = false,
  enabled = true,
  color,
  ...rest
}: Props) {
  return (
    <Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
