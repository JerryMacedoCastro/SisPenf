import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: colors.ashenGreen,
  },

  title: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 14,
    color: colors.ashenGreen,
    position: "absolute",
    top: 50,
  },
});
