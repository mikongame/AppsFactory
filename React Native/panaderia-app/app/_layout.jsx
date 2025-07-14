import { Stack } from "expo-router";
import { CartProvider } from "../app/context/CartContext";

export default function Layout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(stack)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
}


