import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "expo-router";

export default function Products() {
  const { categoryId, categoryName } = useLocalSearchParams();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, "products"),
          where("categoryId", "==", Number(categoryId))
        );
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const renderItem = ({ item }) => (
    <Pressable
      style={{
        padding: 16,
        margin: 10,
        backgroundColor: "#eaeaea",
        borderRadius: 8,
      }}
      onPress={() =>
        router.push({
          pathname: "/(stack)/ProductDetail",
          params: { productId: item.id },
        })
      }
    >
      <Text style={{ fontSize: 18 }}>{item.name}</Text>
      <Text>Precio: €{item.price}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>
        {categoryName}
      </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
