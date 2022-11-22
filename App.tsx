import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import theme from './src/styles/theme';

import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Archivo_400Regular,
          Archivo_500Medium,
          Archivo_600SemiBold
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [])

  if (!appIsReady) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
