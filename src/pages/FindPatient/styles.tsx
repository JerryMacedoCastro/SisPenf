import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    top: 0,
    width: "100%",
    height: "100%",
    minHeight: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  searchContainer: {
    width: "100%",
    alignItems: "center",
  },
  label: {
    color: colors.darkGreen,
    alignSelf: "flex-start",
    marginLeft: 24,
    marginBottom: 4,
    fontSize: 18,
    fontFamily: "JosefinSans_700Bold",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    backgroundColor: colors.white,
    paddingHorizontal: 1,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.darkGreen,
    marginBottom: 4,
  },
  input: {
    width: "80%",
    height: 40,
    color: colors.darkGreen,
  },
  listContainer: {
    position: "relative",
    height: "80%",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: colors.white,
  },
  pickerButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonsContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    bottom: 10,
  },
});
