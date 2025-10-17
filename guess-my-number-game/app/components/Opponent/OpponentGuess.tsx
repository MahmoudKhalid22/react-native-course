import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function OpponentGuess({
  onSetGuessMode,
  targetNumber,
}: {
  onSetGuessMode: Dispatch<SetStateAction<boolean>>;
  targetNumber: number;
}) {
  const [randomNumber, setRandomNumber] = useState(0);
  const [minBound, setMinBound] = useState(1);
  const [maxBound, setMaxBound] = useState(10);
  const [win, setWin] = useState(false);
  const [lie, setLie] = useState(false);
  const [tries, setTries] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const firstGuess = generateRandomNumber(1, 10);
    setRandomNumber(firstGuess);
    if (firstGuess === targetNumber) setWin(true);
  }, [targetNumber]);

  const generateRandomNumber = (min: number, max: number) => {
    if (min >= max) return min;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("clicked");
    return num;
  };

  const handleHigher = () => {
    if (randomNumber > targetNumber) {
      setLie(true);
      return;
    }
    if (tries > 2) {
      setGameOver(true);
      return;
    }
    setTries(() => tries + 1);
    setLie(false);
    const newMin = randomNumber + 1;
    const newGuess = generateRandomNumber(newMin, maxBound);
    setMinBound(newMin);
    setRandomNumber(newGuess);
    if (newGuess === targetNumber) setWin(true);
  };

  const handleLower = () => {
    if (randomNumber < targetNumber) {
      setLie(true);
      return;
    }
    if (tries > 2) {
      setGameOver(true);
      return;
    }
    setTries(() => tries + 1);
    setLie(false);
    const newMax = randomNumber - 1;
    const newGuess = generateRandomNumber(minBound, newMax);
    setMaxBound(newMax);
    setRandomNumber(newGuess);

    if (newGuess === targetNumber) setWin(true);
  };

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
      <Text>Tries : {tries}</Text>
      <Text style={styles.textInput}>guessed: {randomNumber}</Text>
      {win && <Text>Congrats! the number is correct</Text>}
      {lie && <Text>Don't lie</Text>}
      {gameOver && <Text>Game Over</Text>}
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="less"
            onPress={handleLower}
            disabled={win || gameOver}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="higher"
            onPress={handleHigher}
            disabled={win || gameOver}
          />
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
