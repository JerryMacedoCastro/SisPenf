import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { keyValue } from "../@types";

interface PickerInfirmaryProps {
  items: { label: string; value: number }[];
}

const PickerInfirmary = (props: PickerInfirmaryProps) => {
  const items = { props };

  return (
    <View>
      <DropDownPicker
        items={items}
        multiple={false}
        containerStyle={styles.containerStyle}
        style={{ backgroundColor: "#34615C", borderRadius: 100 }}
        placeholder="Selecionar enfermaria"
        itemStyle={{
          justifyContent: "flex-start",
          backgroundColor: "#34615C",
        }}
        labelStyle={{
          fontSize: 16,
          textAlign: "left",
          color: "#fff",
        }}
        dropDownStyle={{ backgroundColor: "#34615C" }}
      />
    </View>
  );
};

export default PickerInfirmary;

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    width: 150,
    borderRadius: 25,
  },
});
