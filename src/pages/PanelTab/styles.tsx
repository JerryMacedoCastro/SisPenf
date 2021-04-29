import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0DC",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 8,
    position: "relative",
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
  },
  panelContent: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 8,
    position: "relative",
    borderRadius: 25,
  },

  info: {
    height: 112,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: "#27615A",
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    position: "absolute",
    backgroundColor: "#fff",
    top: -6,
    left: -20,
    borderWidth: 2,
    borderColor: "#27615A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  percentage: {
    color: "#27615A",
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "JosefinSans_700Bold",
  },

  blockContainer: {
    width: 250,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    right: -110,
    top: -12,
  },
});
