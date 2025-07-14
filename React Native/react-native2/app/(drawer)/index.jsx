import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Page1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Pantalla 1</Text>

      <Link href="/(stack)/Page2" asChild>
        <Button title="Ir a Page2" />
      </Link>

      <Link
        href={{
          pathname: "/(stack)/details",
          params: { id: 86, other: "soy un parámetro" },
        }}
        asChild
      >
        <Button title="Ir a Detalle con parámetros" />
      </Link>
    </View>
  );
}
