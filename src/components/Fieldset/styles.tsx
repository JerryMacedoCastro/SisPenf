import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fieldSet: {
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#27615A",
    paddingVertical: 10,
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  legend: {
    position: "absolute",
    top: -10,
    left: 10,
    fontWeight: "bold",
    backgroundColor: "#fff",
    color: "#27615A",
    fontFamily: "JosefinSans_700Bold",
    fontSize: 12,
    padding: 2,
  },
  value: {
    color: "#27615A",
    fontFamily: "JosefinSans_700Bold",
    fontSize: 12,
    width: "50%",
  },
});
