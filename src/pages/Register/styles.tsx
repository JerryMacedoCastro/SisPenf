import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0DC",
    alignItems: "center",
    justifyContent: "center",
  },

  subTitle: {
    fontFamily: "JosefinSans_700Bold",
    color: "#51615F",
    fontSize: 26,
    padding: 20,
  },
  input: {
    backgroundColor: "#ffF",
    width: "80%",
    marginBottom: 10,
    height: 50,
    borderRadius: 4,
    fontFamily: "JosefinSans_700Bold",
    padding: 4,
  },
  button: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginBottom: 40,
    width: "80%",
    fontFamily: "JosefinSans_700Bold",
  },
  primaryButton: {
    backgroundColor: "#34615C",
  },
  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "700",
    fontFamily: "JosefinSans_700Bold",
  },
});
