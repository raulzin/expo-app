import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  //navegação em apps reactNative
import { createStackNavigator } from '@react-navigation/stack';  //função stacknavigator
import HomeScreen from './src/screens/HomeScreen';  //
import TabelaScreen from './src/screens/TabelaScreen';
import NoticiasScreen from './src/screens/NoticiasScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'UBC ESPORTS' }} />
        <Stack.Screen name="Tabela" component={TabelaScreen} options={{ title: 'Classificação da Libertadores' }} />
        <Stack.Screen name="Noticias" component={NoticiasScreen} options={{ title: 'Notícias de Futebol' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
