import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Categorías" }} />
      <Stack.Screen name="Products" options={{ title: "Productos" }} />
      <Stack.Screen name="ProductDetail" options={{ title: "Detalle del Producto" }} />
    </Stack>
  );
}
