import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { AntDesign } from '@expo/vector-icons';
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import theme from '../../styles/theme';
import { CarDTO } from '../dtos/CarDTO';
import { 
  Container, 
  Header, 
  Title, 
  SubTitle, 
  Content, 
  Appointement, 
  AppointementTitle, 
  AppointementQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate
} from './styles';
import { Load } from '../../components/Load';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  start: string;
  end: string;
}
export function MyCars() {

  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars(){
      try {
        const res = await api.get('/schedules_byuser?user_id=1')
        setCars(res.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  const {goBack} = useNavigation()

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
          <SubTitle>
            Conforto, segurança e praticidade
          </SubTitle>

      </Header>

      <Content>
        <Appointement>
          <AppointementTitle>Agendamentos feitos</AppointementTitle>
          <AppointementQuantity>{cars.length}</AppointementQuantity>
        </Appointement>
        {
          loading ? <Load /> : (
            <FlatList
              data={cars}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <CarWrapper>
                  <Car data={item.car}/>
                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>
                    <CarFooterPeriod>
                      <CarFooterDate>{item.start}</CarFooterDate>
                      <AntDesign name="arrowright" size={20} color={theme.colors.title} style={{marginHorizontal: 10}} />
                      <CarFooterDate>{item.end}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
            />
          ) 
        }
      </Content>
    </Container>
  );
}