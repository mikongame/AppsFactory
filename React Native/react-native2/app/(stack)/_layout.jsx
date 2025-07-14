import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="Page2" options={{ title: "Pantalla 2" }} />
      <Stack.Screen name="details" options={{ title: "Detalle con parámetros" }} />
    </Stack>
  );
}
