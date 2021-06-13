import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 25,
    height: 50,
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    fontFamily: "JosefinSans_700Bold",
    padding: 16,
  },
});
