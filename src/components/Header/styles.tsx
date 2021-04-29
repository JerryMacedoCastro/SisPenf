import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
  },
  goBack: {
    height: 20,
    flexDirection: "row",
    position: "absolute",
    top: 50,
    marginLeft: 8,
    alignSelf: "flex-start",
  },

  goBacktext: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 14,
    marginLeft: 4,
    color: "#51615F",
  },

  title: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 14,
    color: "#51615F",
    position: "absolute",
    top: 50,
  },
});
