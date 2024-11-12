import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Texto centralizado */}
      <Text style={styles.title}>⭐ UBC SPORTS ⭐</Text>

      {/* Botões roxos */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Tabela')}
        >
          <Text style={styles.buttonText}>Classificação</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Noticias')}
        >
          <Text style={styles.buttonText}>Notícias</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500', // Fundo laranja
    justifyContent: 'center',  // Centraliza o conteúdo
    alignItems: 'center',      // o conteúdo horizontalmente
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto
    textAlign: 'center',  // Centraliza o texto
    marginBottom: 50, // Espaço entre o título e os botões
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,  // Ajusta a posição dos botões para mais embaixo
    width: '80%', // Largura dos botões
  },
  button: {
    backgroundColor: '#8A2BE2', // Cor roxa
    padding: 15,
    marginBottom: 15,
    borderRadius: 8, // Borda arredondada
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
