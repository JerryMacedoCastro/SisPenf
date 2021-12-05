import { StyleSheet } from "react-native";
import { colors } from "../../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(196, 196, 196, 0.7)",
    borderTopWidth: 0,
    elevation: 0,
    padding: 8,
    margin: 10,
    backgroundColor: colors.white,
  },

  inputText: {
    padding: 8,
    color: colors.darkGreen,
  },
});
