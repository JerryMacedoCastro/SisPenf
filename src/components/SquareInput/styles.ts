import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
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
});
