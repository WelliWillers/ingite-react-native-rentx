import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import theme from '../../styles/theme';
import { 
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer
} from './styles';

import ArrowLeftSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button';

export function Scheduling() {
  return (
    <Container>
        <StatusBar 
            backgroundColor="transparent"
            translucent
            barStyle='light-content'
        />
        <Header>
            <BackButton color={theme.colors.shape} onPress={() => {Alert.alert('teste')}}/>
            <Title>
                Escolha uma {'\n'}
                data de inicio e{'\n'}
                fim do aluguel
            </Title>

            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue dateSelected>
                        18/06/2022
                    </DateValue>
                </DateInfo>

                <ArrowLeftSvg />
                
                <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue dateSelected>
                        20/06/2022
                    </DateValue>
                </DateInfo>
            </RentalPeriod>
        </Header>

        <Content></Content>

        <Footer>
            <Button title="Confirmar" color={theme.colors.main} />
        </Footer>
    </Container>
  );
}