import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const { id, other } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Detalle recibido:</Text>
      <Text style={{ marginTop: 10 }}>ID: {id}</Text>
      <Text>Other: {other}</Text>
    </View>
  );
}
