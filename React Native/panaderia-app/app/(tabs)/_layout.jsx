import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function TabLayout() {
  const { totalItems } = useCart();
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    setBadgeCount(totalItems);
  }, [totalItems]);

  return (
    <Tabs>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} />,
        }}
      />

      <Tabs.Screen
        name="(cart)"
        options={{
          title: "Carrito",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={20} color={color} />,
          tabBarBadge: badgeCount > 0 ? badgeCount : null,
        }}
      />
    </Tabs>
  );
}
