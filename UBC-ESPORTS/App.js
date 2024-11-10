import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>  
      <Image
        source={require('./src/components/football.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}></Text>
      </TouchableOpacity>
      <Text>Bem Vindo ao UBC ESPORTS!</Text>
      <StatusBar style="auto" />
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
  image: {
    width: 300,    // Ajuste a largura da imagem
    height: 200,   // Ajuste a altura da imagem
    marginBottom: 20, // Espaçamento abaixo da imagem
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 50,        // Ajuste a largura do botão conforme necessário
    height: 45,        // Ajuste a altura do botão conforme necessário
    justifyContent: 'center', // Centraliza o texto verticalmente
    alignItems: 'center',     // Centraliza o texto horizontalmente
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

