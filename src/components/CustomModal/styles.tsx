import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
    backgroundColor: "rgba(2555,255,255,0.6)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 20,
    padding: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
