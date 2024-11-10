import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function NoticiasScreen() {
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('URL_DA_API_DE_NOTICIAS')
      .then(response => setNoticias(response.data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notícias de Futebol</Text>
      {error ? (
        <Text>Erro ao carregar notícias: {error}</Text>
      ) : (
        noticias.map((noticia, index) => (
          <Text key={index}>{noticia.titulo}</Text>
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
