import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    top: 0,
    backgroundColor: "#27615A",
    alignItems: "center",
    justifyContent: "center",
    height: "14%",
    width: "100%",
  },
  dateText: {
    position: "absolute",
    bottom: 0,
    padding: 6,
    color: "#fff",
    fontFamily: "JosefinSans_700Bold",
  },
});
