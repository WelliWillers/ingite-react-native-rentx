import React from 'react';
import {Calendar as CustomCalendar, LocaleConfig} from 'react-native-calendars'
import { Container } from './styles';
import { Feather } from '@expo/vector-icons'
import theme from '../../styles/theme';

LocaleConfig.locales['pt'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt'

export function Calendar() {
  return (
    <CustomCalendar
        renderArrow={(direction) => 
            <Feather 
                size={24} 
                color={theme.colors.text} 
                name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
            /> 
        }



        headerStyle={{
            backgroundColor: theme.colors.background_secondary,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.text_detail,
            paddingBottom: 10,
            marginBottom: 10,
            width: '100%'
        }}

        theme={{
            textDayFontFamily: theme.fonts.primary_400,
            textDayHeaderFontFamily: theme.fonts.primary_500,
            textDayHeaderFontSize: 10,
            textMonthFontSize: 20,
            monthTextColor: theme.colors.title,
            arrowStyle: {
                marginHorizontal: -15
            }
        }}

        firstDay={1}
        
        minDate={String(new Date())}

    />
  );
}