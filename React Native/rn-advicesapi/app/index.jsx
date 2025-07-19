import { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AdviceCard from '../components/AdviceCard';
import { useAdvice } from '../context/AdviceContext';

export default function HomeScreen() {
  const [advice, setAdvice] = useState(null);
  const [adviceId, setAdviceId] = useState('');
  const { saveAdvice } = useAdvice();

  useEffect(() => {
    fetchRandomAdvice();
  }, []);

  const fetchRandomAdvice = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setAdvice({
        id: data.slip.id,
        text: data.slip.advice
      });
    } catch (error) {
      setAdvice({ id: null, text: '⚠️ Error al obtener consejo aleatorio.' });
    }
  };

  const fetchAdviceById = async () => {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice/${adviceId}`);
      const data = await res.json();
      if (data.slip) {
        setAdvice({
          id: data.slip.id,
          text: data.slip.advice
        });
      } else {
        setAdvice({ id: null, text: '❌ No se encontró un consejo con ese ID.' });
      }
    } catch (error) {
      setAdvice({ id: null, text: '⚠️ Error al buscar consejo por ID.' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💡 Consejo del día</Text>

      <AdviceCard advice={advice} />

      <Button title="Obtener consejo aleatorio" onPress={fetchRandomAdvice} />

      <TextInput
        style={styles.input}
        placeholder="Introduce ID del consejo"
        keyboardType="numeric"
        value={adviceId}
        onChangeText={setAdviceId}
      />
      <Button title="Obtener consejo por ID" onPress={fetchAdviceById} />

      <Button title="Guardar consejo" onPress={() => saveAdvice(advice)} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 }
});
