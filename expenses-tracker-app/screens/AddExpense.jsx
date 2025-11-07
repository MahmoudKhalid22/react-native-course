import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../utils/colors";
import { useLayoutEffect } from "react";
import Button from "../features/UI/Button";
import IconButton from "../features/UI/IconButton";

function AddExpense({ route, navigation }) {
  //   const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    // expensesCtx.deleteExpense(editedExpenseId) ;
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  //   function confirmHandler() {
  //     if (isEditing) {
  //       expensesCtx.updateExpense(editedExpenseId, {
  //         description: "Test!!!!",
  //         amount: 29.99,
  //         date: new Date("2022-05-20"),
  //       });
  //     } else {
  //       expensesCtx.addExpense({
  //         description: "Test",
  //         amount: 19.99,
  //         date: new Date("2022-05-19"),
  //       });
  //     }
  //     navigation.goBack();
  //   }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button}>{isEditing ? "Update" : "Add"}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
