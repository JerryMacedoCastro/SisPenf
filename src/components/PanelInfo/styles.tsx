import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    alignItems: "center",
  },

  value: {
    color: colors.darkGreen,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "JosefinSans_700Bold",
  },
  label: {
    color: colors.darkGreen,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
  },
});
