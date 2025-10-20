import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (+max - +min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function Game(this: any, { userNumber }: { userNumber: string }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    +userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction: "lower" | "greater") {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && +currentGuess < +userNumber) ||
      (direction === "greater" && +currentGuess > +userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (+userNumber === +currentGuess) {
      Alert.alert("Win🎉🎉", "computer guess is correct", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    padding: 24,
  },
});
