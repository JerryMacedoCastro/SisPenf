import React from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./styles";
interface keyValue {
  label: string;
  value: number;
}

interface PickerProps {
  items: keyValue[];
  placeholder: string;
}

const index = ({ placeholder, items }: PickerProps): JSX.Element => {
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

export default index;
