import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('./src/components/football.png')}
      style={styles.Image}/>
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,  // Ajuste do padding vertical (reduz a altura)
    paddingHorizontal: 20, // Ajuste do padding horizontal (reduz a largura)
    borderRadius: 5,       // Borda arredondada do botão
    width: 150,            // Ajuste da largura do botão
    height: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,          // Tamanho do texto dentro do botão
    textAlign: 'center',
  },
});
