import React from "react";
import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryItem({ itemData, navigation }) {
  const pressHandler = () => {
    navigation.navigate("itemMeal", {
      categoryId: itemData.item.id,
    });
  };
  return (
    <CategoryGridTile
      onPress={pressHandler}
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function Categories({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item) =>
        CategoryItem({
          itemData: item,
          navigation,
        })
      }
      numColumns={"2"}
    />
  );
}

export default Categories;
