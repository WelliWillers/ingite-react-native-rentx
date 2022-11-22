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
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

export function Scheduling() {
    const {goBack, navigate} = useNavigation()
  
    function handleConfirm(){
      navigate('SchedulingDetails')
    }

    return (
        <Container>
            <StatusBar 
                backgroundColor="transparent"
                translucent
                barStyle='light-content'
            />
            <Header>
                <BackButton color={theme.colors.shape} onPress={goBack}/>
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

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title="Confirmar" color={theme.colors.main} onPress={handleConfirm} />
            </Footer>
        </Container>
    );
}