import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput({
  onChangeHandler,
  onSubmitHandler,
  value,
  isModal,
  onCancel,
}) {
  return (
    <Modal visible={isModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={onChangeHandler}
          style={styles.inputStyle}
          placeholder="your course goal!"
          value={value}
          placeholderTextColor="#ff6347"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={onSubmitHandler}
              color={"#5e0acc"}
            />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={onCancel} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: "100%",
    padding: 16,
    marginVertical: 24,
    borderWidth: 2,
    borderColor: "#d6d6d6",
    borderRadius: 8,
    color: "#fff",
  },
  inputContainer: {
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginBottom: 24,
    backgroundColor: "#1e085a",
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    width: 100,
  },
});
