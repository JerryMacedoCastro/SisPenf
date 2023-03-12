import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    alignItems: "center",
  },
  button: {
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 42,
    marginTop: 10,
    width: "45%",
    fontFamily: "JosefinSans_700Bold",
    padding: 16,
  },
  content: {
    flex: 1,
    width: "90%",
    height: "80%",
    paddingVertical: 10,
  },
  formContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
  },
  confirmButtonsContainer: {
    flex: 0,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    bottom: 0,
  },
});
