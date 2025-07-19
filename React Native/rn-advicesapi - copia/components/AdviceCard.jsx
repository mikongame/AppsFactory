import { View, Text, StyleSheet } from 'react-native';
import { adviceCardStyles as styles } from '../styles/adviceCardstyles.js';

export default function AdviceCard({ advice }) {
  if (!advice) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.id}>ID: {advice.id}</Text>
      <Text style={styles.text}>{advice.text}</Text>
    </View>
  );
}
