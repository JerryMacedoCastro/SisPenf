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
  titleMain: {
    width: "100%",
    padding: 10,
  },
  labelTitleMainForm: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 10,
    textAlign: "center",
  },
  labelTitleContentForm: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 10,
  },
  labelContentForm: {
    fontSize: 15,
  },
});
