import { Stack } from "expo-router";

export default function CartStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tu carrito" }} />
      <Stack.Screen name="Checkout" options={{ title: "Finalizar compra" }} />
    </Stack>
  );
}

