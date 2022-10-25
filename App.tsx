import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import AppLoading from 'expo-app-loading';


export default function App() {
  const fontsLoaded = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <>
      <StatusBar translucent/> 
      <Home />
    </>
  );
}
