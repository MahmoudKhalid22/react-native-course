import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function OpponentGuess({
  onSetGuessMode,
}: {
  onSetGuessMode: (b: boolean) => {};
}) {
  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = () => {
    const num = Math.ceil(Math.random() * 10);
    setRandomNumber(num);
    console.log("clicked");
  };
  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <View style={styles.opponentContainer}>
      {" "}
      <Button title="go back" onPress={() => onSetGuessMode(false)} />
      <Text style={styles.text}>Guess The Entered Number</Text>
      {/* <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="Guess the number"
        placeholderTextColor={"#888"}
      /> */}
      <Text style={styles.textInput}>guessed: {randomNumber}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="less" onPress={generateRandomNumber} />
        </View>
        <View style={styles.button}>
          <Button title="higher" onPress={generateRandomNumber} />
        </View>
      </View>
    </View>
  );
}

export default OpponentGuess;

const styles = StyleSheet.create({
  opponentContainer: {
    padding: 24,
  },
  text: {
    marginVertical: 48,
    fontSize: 36,
    textAlign: "center",
    lineHeight: 76,
    color: "rgba(17, 89, 166, 1)",
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: "#6C5CE7",
    paddingHorizontal: 12,
    fontSize: 24,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    gap: 12,
    marginVertical: 24,
    justifyContent: "center",
  },
  button: {
    width: 150,
  },
});
