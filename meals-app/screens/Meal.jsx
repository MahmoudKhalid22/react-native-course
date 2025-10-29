import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../dummy-data";
import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import MealsOverview from "../components/MealsOverview";

function Meal({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsOverview displayedMeals={displayedMeals} />;
}

export default Meal;
