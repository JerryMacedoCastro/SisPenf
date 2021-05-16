import { StyleSheet } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 30,
    alignItems: "center",
    marginHorizontal: 20,
  },

  seletedItem: {
    borderBottomWidth: 4,
    borderColor: colors.lightGreen,
  },
  itemText: {
    color: colors.white,
    fontFamily: "JosefinSans_700Bold",
    fontSize: 18,
  },
});
