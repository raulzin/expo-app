import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('./C:\Users\User\OneDrive\Documentos\expo-app\UBC-ESPORTS\.gitignore')}
      style={styles.Image}/>
      <Text>Bem Vindo ao UBC ESPORTS!</Text>
      <StatusBar styles="auto" />
    </View>
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
