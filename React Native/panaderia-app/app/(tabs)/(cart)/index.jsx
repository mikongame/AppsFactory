import { View, Text, FlatList, Button } from "react-native";
import { useCart } from "../../context/CartContext";
router.push("/app/(tabs)/cart/Checkout.jsx");
import { useRouter } from "expo-router";

export default function CartScreen() {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Carrito</Text>

      {cart.length === 0 ? (
        <Text>El carrito está vacío</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{ padding: 10, borderBottomWidth: 1 }}>
                <Text>{item.name}</Text>
                <Text>€{item.price}</Text>
                <Button title="Eliminar" onPress={() => removeFromCart(index)} />
              </View>
            )}
          />
          <View style={{ marginTop: 16 }}>
            <Button title="Vaciar carrito" onPress={clearCart} />
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              title="Ir al Checkout"
              onPress={() => router.push("/(tabs)/(cart)/Checkout")}
            />
          </View>
        </>
      )}
    </View>
  );
}



