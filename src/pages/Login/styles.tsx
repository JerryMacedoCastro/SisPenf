import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    justifyContent: "center",
  },

  subTitle: {
    fontFamily: "JosefinSans_700Bold",
    color: colors.darkGreen,
    fontSize: 26,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    width: "80%",
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 20,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    color: colors.darkGreen,
    fontFamily: "JosefinSans_700Bold",
  },
  error: {
    color: colors.darkRed,
    fontSize: 14,
    borderWidth: 1,
    borderColor: colors.darkRed,
    padding: 2,
    width: "80%",
    backgroundColor: colors.lightRed,
  },
});
