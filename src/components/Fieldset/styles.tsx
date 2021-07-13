import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fieldSet: {
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.darkGreen,
    paddingVertical: 10,
    marginBottom: 10,
    width: "100%",
  },
  legend: {
    position: "absolute",
    top: -18,
    left: 10,
    fontWeight: "bold",
    backgroundColor: colors.white,
    color: colors.darkGreen,
    fontFamily: "JosefinSans_700Bold",
    fontSize: 12,
    padding: 2,
  },
  value: {
    color: colors.darkGreen,
    fontFamily: "JosefinSans_700Bold",
    fontSize: 14,
    width: "90%",
  },
});
