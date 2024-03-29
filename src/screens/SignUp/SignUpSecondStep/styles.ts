import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 31}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-self: flex-end;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(40)}px;
  margin-top: 60px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
`;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  margin-bottom: 24px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 64px;
`;

export const Footer = styled.View``;
