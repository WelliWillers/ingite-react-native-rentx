import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface colorProps {
  color: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled.TouchableOpacity<colorProps>`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.main};
  margin-bottom: 8px;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme, light }) =>
    light ? theme.colors.header : theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
