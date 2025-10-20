import "react-native-reanimated";

import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Game from "./screens/Game";
import StartGame from "./screens/StartGame";

export default function RootLayout() {
  const [userNumber, setUserNumber] = useState("");

  function pickedNumberHandler(pickedNumber: string) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} />;
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          resizeMode="contain"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
