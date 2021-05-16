import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    justifyContent: "center",
  },

  subTitle: {
    fontFamily: "JosefinSans_700Bold",
    color: colors.ashenGreen,
    fontSize: 26,
    padding: 20,
  },
  input: {
    backgroundColor: colors.white,
    width: "80%",
    marginBottom: 10,
    height: 50,
    borderRadius: 4,
    fontFamily: "JosefinSans_700Bold",
    padding: 4,
  },
  button: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginBottom: 40,
    width: "80%",
    fontFamily: "JosefinSans_700Bold",
  },
  primaryButton: {
    backgroundColor: colors.darkGreen,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "700",
    fontFamily: "JosefinSans_700Bold",
  },
});
