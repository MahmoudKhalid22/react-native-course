import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meal from "./screens/Meal";
import { MEALS } from "./dummy-data";
import MealDetail from "./screens/MealDetail";
import { MealContextProvider } from "./store/context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteMeals from "./screens/FavoriteMeals";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {store} from './store/redux/store'

const Stack = createNativeStackNavigator();
const myDrawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <myDrawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
        // Add these lines:
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerStyle: { backgroundColor: "#351401" },
      }}
    >
      <myDrawer.Screen
        name="Categories"
        component={Categories}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          // Remove the sceneContainerStyle from here
        }}
      />
      <myDrawer.Screen
        name="Favorite Meals"
        component={FavoriteMeals}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
          // Remove the sceneContainerStyle from here
        }}
      />
    </myDrawer.Navigator>
  );
}

export default function App() {

const state = useSelector()
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
//      <MealContextProvider>
<Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#3f2f25" },
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="itemMeal" component={Meal} />
              <Stack.Screen
                name="mealDetail"
                component={MealDetail}
                options={({ route }) => {
                  const mealId = route.params.mealId;
                  const mealTitle = MEALS.find(
                    (meal) => meal.id === mealId
                  ).title;
                  return {
                    title: mealTitle,
                  };
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
        </Provider>
//      </MealContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },
});
