import React from 'react';
import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import { StatusBar, useWindowDimensions } from 'react-native'
import { 
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';

export function ShedulingComplete() {

    const { width } = useWindowDimensions()

    const {navigate} = useNavigation()
  
    function handleConfirm(){
      navigate('Home')
    }

    return (
        <Container>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle='light-content'
            />
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>

                <Message>Agora você só precisa ir {'\n'} até uma concessionária da RENTX{'\n'} pegar o seu carro.</Message>
            </Content>

            <Footer>
                <Button title="Confirmar" color={theme.colors.main} onPress={handleConfirm} />
            </Footer>

        </Container>
    );
}