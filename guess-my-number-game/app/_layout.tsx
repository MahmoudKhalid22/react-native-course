import "react-native-reanimated";

import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";

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
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
