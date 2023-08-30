import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateValueProps {
  dateSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 25px;
  justify-content: center;
  padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(34)}px;
  margin-top: 34px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 4,
    alignItems: "center",
    width: "100%",
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const Footer = styled.View`
  padding: 24px;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;

  ${({ dateSelected = false, theme }) =>
    !dateSelected
      ? css`
          border-bottom-width: 1px;
          border-bottom-color: ${theme.colors.text};
          padding-bottom: 5px;
        `
      : css``}
`;
