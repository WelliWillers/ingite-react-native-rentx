import React, { useState } from 'react';
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
import { Calendar, DayProps, MarkedDateProps } from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { generateIntervalDate } from '../../components/Calendar/generateInterval';
import { format } from 'date-fns';
import { getPlatformDate } from '../../components/Calendar/getPlatformDate';
import { CarDTO } from '../dtos/CarDTO';

interface RentalPeriod {
    startFormated: string;
    endFormated: string;
}

interface Params {
    car: CarDTO
}

export function Scheduling() {
    const {goBack, navigate} = useNavigation()
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    
    const route = useRoute()
    const { car } = route.params as Params

    function handleConfirmRental(){
        if(!rentalPeriod.startFormated || !rentalPeriod.endFormated){
            Alert.alert('É preciso selecionar uma data.')
        } else {
            navigate('SchedulingDetails', {
                car,
                dates: Object.keys(markedDate)
            })
        }
    }

    function handleChangeDate (date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate 
        let end = date

        if(start.timestamp > end.timestamp){
            start = end
            end = start
        }

        setLastSelectedDate(end)

        const interval = generateIntervalDate(start, end)
        setMarkedDate(interval)

        const firstDate = Object.keys(interval)[0]
        const endDate = Object.keys(interval)[Object.keys(interval).length -1]

        setRentalPeriod({
            startFormated: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormated: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
        })
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
                        <DateValue dateSelected={!!rentalPeriod.startFormated}>
                            {rentalPeriod.startFormated}
                        </DateValue>
                    </DateInfo>

                    <ArrowLeftSvg />
                    
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue dateSelected={!!rentalPeriod.endFormated}>
                            {rentalPeriod.endFormated}
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar
                    markedDates={markedDate}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button title="Confirmar" color={theme.colors.main} onPress={handleConfirmRental} />
            </Footer>
        </Container>
    );
}