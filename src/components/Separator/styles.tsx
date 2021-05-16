import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  lines: {
    flex: 1,
    height: 1,
    backgroundColor: colors.darkGreen,
  },
  text: {
    textAlign: "center",
    paddingHorizontal: 10,
    color: colors.darkGreen,
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
  },
});
