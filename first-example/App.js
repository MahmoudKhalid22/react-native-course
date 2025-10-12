import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const onChangeHandler = (value) => {
    setEnteredText(value);
  };
  const onSubmitHandler = () => {
    setGoals((prevValues) => [
      ...prevValues,
      { id: Date.now(), goal: enteredText },
    ]);
  };

  return (
    // <Text>test text</Text>
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder="your course goal!"
            onChangeText={onChangeHandler}
          />
          <Button title="Add Goal" onPress={onSubmitHandler}></Button>
        </View>
        <View style={styles.listGoals}>
          {goals.map((goal) => (
            <Text key={goal.id}>{goal.goal}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 30,
    marginTop: 30,
    height: "100%",
  },

  inputStyle: {
    backgroundColor: "white",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    // flex: 1,
    marginBottom: 24,
  },

  listGoals: {
    // flex: 5,
    borderTopWidth: 1,
    borderTopColor: "#6d6d6d",
  },
});
