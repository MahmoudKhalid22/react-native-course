import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import Title from "../components/Title.ios";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/Colors";

function StartGame({ onPickNumber }: { onPickNumber: (t: string) => void }) {
  const [targetNumber, setTargetNumber] = useState("");
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText: string) {
    setTargetNumber(enteredText);
  }

  const resetHandler = () => {
    setTargetNumber("");
  };

  const onConfirmNumber = () => {
    if (isNaN(+targetNumber) || +targetNumber <= 0 || +targetNumber > 99) {
      Alert.alert(
        "invalid number",
        "Please enter a valid number between 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
    }
    onPickNumber(targetNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={targetNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onConfirmNumber}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    // height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
