import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../Assets/GlobalStyles";

export const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(196, 196, 196, 0.7)",
    borderTopWidth: 0,
    elevation: 0,
    padding: 8,
    margin: 10,
    backgroundColor: colors.white,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    color: colors.darkGreen,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderRadius: 8,
    color: colors.darkGreen,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
