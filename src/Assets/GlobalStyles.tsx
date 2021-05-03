import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  button: {
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginTop: 10,
    width: "80%",
    fontFamily: "JosefinSans_700Bold",
  },

  primaryButton: {
    backgroundColor: "#34615C",
  },

  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#34615C",
  },

  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "700",
  },

  secondaryButtonText: {
    color: "#34615C",
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "700",
  },
});
