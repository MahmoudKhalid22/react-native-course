import React, { useContext } from "react";
import FavouriteMeals from "../store/context";
import { MEALS } from "../dummy-data";
import MealsOverview from "../components/MealsOverview";
import { Button, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

function FavoriteMeals({ navigation }) {
  const { favoriteMeals } = useContext(FavouriteMeals);
  console.log(favoriteMeals);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No meals added to your favorite.</Text>
        <MaterialCommunityIcons name="cancel" size={86} color="black" />
        <Button
          title="Add Meal To Favorite"
          onPress={() => navigation.navigate("Categories")}
        />
      </View>
    );
  }

  const displayedMeals = MEALS.filter((meal) =>
    favoriteMeals.includes(meal.id)
  );

  return <MealsOverview displayedMeals={displayedMeals} />;
}

export default FavoriteMeals;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 36,
    backgroundColor: "#3f2f25",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    lineHeight: 56,
  },
});
