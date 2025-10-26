import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Platform,
  Pressable,
} from "react-native";
import { MEALS } from "../dummy-data";

function MealItem({ title, affordability, complexity, imageUrl, duration }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

function Meal({ route }) {
  const catId = route.params.categoryId;
  const MealsContent = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen {catId}</Text> */}
      <FlatList
        data={MealsContent}
        renderItem={(itemData) =>
          MealItem({
            title: itemData.item.title,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            imageUrl: itemData.item.imageUrl,
          })
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Meal;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
