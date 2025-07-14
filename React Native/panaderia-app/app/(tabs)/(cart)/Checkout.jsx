import { View, Text, Button } from "react-native";
import { useCart } from "../../context/CartContext";
import { useRouter } from "expo-router";

export default function CheckoutScreen() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const handleConfirm = () => {
    clearCart();
    alert("Compra realizada con éxito");
    router.replace("/(tabs)/cart");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Resumen de compra</Text>
      {cart.map((item, i) => (
        <Text key={i}>
          - {item.name}: €{item.price}
        </Text>
      ))}
      <Button title="Confirmar pedido" onPress={handleConfirm} />
    </View>
  );
}
