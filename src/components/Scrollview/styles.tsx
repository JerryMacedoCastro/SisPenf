import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGreen,

    padding: 2,
  },
  listContainer: {
    height: 80,
  },
  subtitleContainer: {
    width: "100%",
    backgroundColor: colors.darkGreen,
    alignItems: "center",
    height: "12%",
    justifyContent: "flex-end",
  },
  subtitleText: {
    color: colors.white,
    fontFamily: "JosefinSans_700Bold",
    fontSize: 18,
    padding: 6,
    marginBottom: 4,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.darkGreen,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  footerText: {
    color: colors.white,
    fontFamily: "JosefinSans_700Bold",
    fontSize: 10,
    marginBottom: 10,
  },
});
