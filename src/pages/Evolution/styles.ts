import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightGreen,
  },
  content: {
    width: "90%",
    height: "75%",
  },
  formContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  inputContainer: {
    height: "56%",
    marginBottom: 4,
  },
  confirmButtonsContainer: {
    flex: 0,
    width: "100%",
    alignItems: "center",
    bottom: 6,
    position: "absolute",
  },
});
