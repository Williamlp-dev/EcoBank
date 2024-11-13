import './gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './src/routes/index.routes';
import { NavigationContainer } from '@react-navigation/native'


export default function App() {

  const [loaded] = useFonts({
    Poppins: require('@/assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('@/assets/fonts/Poppins-SemiBold.ttf'),
    Montserrat: require('@/assets/fonts/Montserrat-VariableFont_wght.ttf'),
    MontserratSemiBold: require('@/assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
