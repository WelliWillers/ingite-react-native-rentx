import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface PropsIconContainer {
  isFocus: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<PropsIconContainer>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  ${({ theme, isFocus }) =>
    isFocus &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `};
`;

export const InputText = styled.TextInput<PropsIconContainer>`
  flex: 1;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;

  ${({ theme, isFocus }) =>
    isFocus &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `};
`;
