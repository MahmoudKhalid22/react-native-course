import Colors from "@/app/constants/Colors";
import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

function InstructionText({
  children,
  style,
}: {
  children: ReactNode | string;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
