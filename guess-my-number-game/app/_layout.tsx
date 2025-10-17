import "react-native-reanimated";

import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import OpponentGuess from "./components/Opponent/OpponentGuess";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [num, setNum] = useState(0);
  const [err, setErr] = useState("");
  const [guessMode, setGuessMode] = useState(false);
  const onChangeHandler = (value: string) => {
    const numValue = parseInt(value, 10) || 0;
    setErr("");
    if (+value > 10 || +value === 0) {
      setErr("please enter allowed value between 1 and 10");
      return;
    }
    setNum(numValue);
  };
  return guessMode ? (
    <OpponentGuess onSetGuessMode={setGuessMode} targetNumber={num} />
  ) : (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>
        Enter Your Number! so opponent can guess between 1 - 10
      </Text>
      <TextInput
        style={[styles.input, !err && styles.marginBottom]}
        keyboardType="numeric"
        onChangeText={onChangeHandler}
        placeholder="Enter the number Here"
        placeholderTextColor={"#888"}
      />
      {err && <Text style={styles.error}>{err}</Text>}
      <Button title="Go To Guess" onPress={() => setGuessMode(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 36,
  },
  marginBottom: {
    marginBottom: 48,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "#6C5CE7",
    borderRadius: 12,
    padding: 8,
    width: "100%",
    marginTop: 48,
    fontSize: 24,
    textAlign: "center",
  },
  error: {
    color: "#ff0000",
    marginBottom: 36,
    marginTop: 12,
  },
});
