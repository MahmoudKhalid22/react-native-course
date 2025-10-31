import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../dummy-data";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { useContext, useLayoutEffect } from "react";
import FavouriteMeals from "../store/context";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../store/redux/favorites";

function MealDetail({ route, navigation }) {
  //   const { favoriteMeals, addToFavorites, removeFromFavorite } =
  //     useContext(FavouriteMeals);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFromFavorite({ id: mealId }));
    } else {
      dispatch(addToFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [mealId, changeFavoriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
