import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0DC",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    top: 0,
    width: "100%",
    height: "100%",
    minHeight: "100%",
  },
  searchContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  label: {
    color: "#34615C",
    alignSelf: "flex-start",
    marginLeft: 24,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    backgroundColor: "#fff",
    paddingHorizontal: 1,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#34615C",
  },
  input: {
    width: "80%",
    color: "#34615C",
  },
  listContainer: {
    position: "relative",
    height: "80%",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
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
