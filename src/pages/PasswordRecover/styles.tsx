import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: colors.white,
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
