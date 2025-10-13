import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const onChangeHandler = (value) => {
    console.log("val: ", value);
    setEnteredText(value);
  };
  const onSubmitHandler = () => {
    if (enteredText.trim() === "") return;
    setGoals((prevValues) => [
      ...prevValues,
      { key: Date.now(), goal: enteredText, completed: false },
    ]);
    setEnteredText("");
    setIsModal(false);
  };

  const onSetComplete = (id) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.key === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const onDelete = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.key !== id));
  };

  const onCloseModal = () => {
    setIsModal(false);
  };
  return (
    // <Text>test text</Text>
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View>
          <Button title="Add A new Goal" onPress={() => setIsModal(true)} />
          {isModal && (
            <GoalInput
              onChangeHandler={onChangeHandler}
              onSubmitHandler={onSubmitHandler}
              value={enteredText}
              onCancel={onCloseModal}
              isModal={isModal}
            />
          )}

          <View style={styles.listGoals}>
            <FlatList
              alwaysBounceVertical={false}
              keyExtractor={(item, index) => {
                return item.key;
              }}
              data={goals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.goal}
                    completed={itemData.item.completed}
                    id={itemData.item.key}
                    onSetComplete={onSetComplete}
                    onDelete={onDelete}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 30,
    height: "100%",
  },

  listGoals: {
    // flex: 5,
    borderTopWidth: 1,
    borderTopColor: "#6d6d6d",
    marginVertical: 8,
    zIndex: 0,
  },
});
