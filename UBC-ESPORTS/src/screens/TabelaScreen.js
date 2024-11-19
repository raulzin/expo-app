import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function TabelaScreen() {
  const [classificacao, setClassificacao] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.futebol.com.br/brasileirao/2024/tabela')
      .then(response => setClassificacao(response.data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classificação</Text>
      {error ? (
        <Text>Erro ao carregar a classificação: {error}</Text>
      ) : (
        classificacao.map((time, index) => (
          <Text key={index}>{index + 1}. {time.nome} - {time.pontos} pontos</Text>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
