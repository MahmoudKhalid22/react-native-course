import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meal from "./screens/Meal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Text>Test Test</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="mealsCategories" component={Categories} />
          <Stack.Screen name="itemMeal" component={Meal} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
