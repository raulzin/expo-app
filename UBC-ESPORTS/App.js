import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  //navegação em apps reactNative
import { createStackNavigator } from '@react-navigation/stack';  //função stacknavigator
import HomeScreen from './src/screens/HomeScreen';  //tela inicial
import TabelaScreen from './src/screens/TabelaScreen'; //telaTabela
import NoticiasScreen from './src/screens/NoticiasScreen'; //telaNoticias

const Stack = createStackNavigator(); //variavel que cria objeto stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'UBC ESPORTS' }} />
        <Stack.Screen name="Tabela" component={TabelaScreen} options={{ title: 'Classificação' }} />
        <Stack.Screen name="Noticias" component={NoticiasScreen} options={{ title: 'Notícias' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
