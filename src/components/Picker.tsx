import React from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

interface keyValue {
  label: string;
  value: number;
}

interface PickerProps {
  items: keyValue[];
  placeholder: string;
}

const PickerInfirmary = ({ placeholder, items }: PickerProps) => {

  return (
    <View>
      <DropDownPicker
        items={items}
        multiple={false}
        containerStyle={styles.containerStyle}
        style={{ backgroundColor: "#34615C", borderRadius: 100 }}
        placeholder={placeholder}
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
