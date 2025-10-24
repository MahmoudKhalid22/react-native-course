import { View, Text, StyleSheet } from "react-native";

function Meal() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
