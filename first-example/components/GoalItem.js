import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ id, text, completed, onSetComplete, onDelete }) {
  return (
    <Pressable
      onPress={onSetComplete.bind(this, id)}
      android_ripple={{ color: "#431313ff" }}
    >
      <View style={[styles.textItem, completed && styles.completedGoal]}>
        <Text style={styles.textGoal}>{text}</Text>
        <Text style={styles.delete} onPress={() => onDelete(id)}>
          Delete
        </Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  textItem: {
    borderRadius: 12,
    backgroundColor: "blue",
    margin: 8,
    width: "95%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  textGoal: {
    color: "white",
    padding: 12,
  },
  delete: {
    color: "red",
  },
  completedGoal: {
    backgroundColor: "#00ff00",
  },
});
