import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#34615C",

    padding: 2,
  },
  listContainer: {
    height: 80,
  },
  subtitleContainer: {
    width: "100%",
    backgroundColor: "#34615C",
    alignItems: "center",
    height: "12%",
    justifyContent: "flex-end",
  },
  subtitleText: {
    color: "#fff",
    fontFamily: "JosefinSans_700Bold",
    fontSize: 18,
    padding: 6,
    marginBottom: 4,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#34615C",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  footerText: {
    color: "#fff",
    fontFamily: "JosefinSans_700Bold",
    fontSize: 10,
    marginBottom: 10,
  },
});
