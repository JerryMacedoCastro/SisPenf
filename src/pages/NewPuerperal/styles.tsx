import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BCE0DC",
    width: "100%",
    height: "100%",
    flex: 1,
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
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    opacity: 1,
    width: "100%",
    padding: 16,
    marginTop: 100,
  },
  confirmButtonsContainer: {
    flex: 0,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    bottom: 0,
  },
});
