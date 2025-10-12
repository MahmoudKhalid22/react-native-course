import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ onChangeHandler, onSubmitHandler, value }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onChangeHandler}
        style={styles.inputStyle}
        placeholder="your course goal!"
        value={value}
      />
      <Button title="Add Goal" onPress={onSubmitHandler}></Button>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
    zIndex: 20,
  },
});
