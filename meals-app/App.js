import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meal from "./screens/Meal";
import { CATEGORIES, MEALS } from "./dummy-data";

const Stack = createNativeStackNavigator();

function DynamicTitle({ route, navigation }) {
  const catId = route.params.categoryId;
  const catTitle = CATEGORIES.filter((cat) => catId === cat.id);
  return {
    title: catTitle[0].title,
  };
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer
        options={{
          headerStyle: {
            backgroundColor: "#351401",
            marginTop: 16,
            paddingTop: 16,
          },
          headerTintColor: "#fff",
          paddingTop: 36,
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="mealsCategories"
            component={Categories}
            options={{
              title: "Meals Categories",
            }}
          />
          <Stack.Screen
            name="itemMeal"
            component={Meal}
            options={DynamicTitle}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
});
