import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    backgroundColor: colors.white,
    width: "90%",
    padding: 8,
    position: "relative",
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
  },
  panelContent: {
    backgroundColor: colors.white,
    width: "80%",
    padding: 6,
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  info: {
    height: 112,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: colors.darkGreen,
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    position: "absolute",
    backgroundColor: colors.white,
    top: -6,
    left: -20,
    borderWidth: 2,
    borderColor: colors.darkGreen,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  percentage: {
    color: colors.darkGreen,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "JosefinSans_700Bold",
  },

  blockContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative",

    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginStart: 40,
    marginTop: 65,
  },
});
