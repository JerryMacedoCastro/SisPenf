import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    top: 0,
    backgroundColor: colors.darkGreen,
    alignItems: "center",
    justifyContent: "center",
    height: "14%",
    width: "100%",
  },
  dateText: {
    position: "absolute",
    bottom: 0,
    padding: 6,
    color: colors.white,
    fontFamily: "JosefinSans_700Bold",
  },
});
