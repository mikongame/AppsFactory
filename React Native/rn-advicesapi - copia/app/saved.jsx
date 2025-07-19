import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAdvice } from '../context/AdviceContext';
import AdviceCard from '../components/AdviceCard';

export default function SavedScreen() {
  const { savedAdvices } = useAdvice();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Consejos guardados</Text>
      <FlatList
        data={savedAdvices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AdviceCard advice={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No hay consejos guardados aún.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 15 },
  empty: { textAlign: 'center', marginTop: 20, fontStyle: 'italic' }
});
