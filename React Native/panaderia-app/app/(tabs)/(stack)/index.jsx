import { FlatList, Text, View, Pressable, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/categories";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const renderCategory = ({ item }) => (
    <Pressable
      style={[styles.card, { backgroundColor: item.color }]}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/(stack)/Products",
          params: { categoryId: item.id, categoryName: item.name },
        })
      }
    >
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategory}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  list: {
    alignItems: "center",
  },
  card: {
    width: 140,
    height: 100,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

