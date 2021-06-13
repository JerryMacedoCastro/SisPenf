import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    top: 0,
    backgroundColor: colors.darkGreen,
    alignItems: "center",
    justifyContent: "center",
    height: "16%",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  dateText: {
    position: "absolute",
    bottom: 0,
    padding: 6,
    color: colors.white,
    fontFamily: "JosefinSans_700Bold",
  },
});
