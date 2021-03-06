import React from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { colors } from "../../Assets/GlobalStyles";
import { keyValue } from "../../interfaces";
import { styles } from "./styles";

interface PickerProps {
  items: keyValue[];
  placeholder: string;
  handleChange: (item: keyValue) => void;
  disabled?: boolean;
}

const index = ({
  placeholder,
  items,
  handleChange,
  disabled,
}: PickerProps): JSX.Element => {
  return (
    <View>
      <DropDownPicker
        items={items}
        multiple={false}
        containerStyle={styles.containerStyle}
        style={{ backgroundColor: colors.darkGreen, borderRadius: 100 }}
        placeholder={placeholder}
        itemStyle={{
          justifyContent: "flex-start",
          backgroundColor: colors.darkGreen,
        }}
        labelStyle={{
          fontSize: 16,
          textAlign: "left",
          color: colors.white,
        }}
        dropDownStyle={{ backgroundColor: colors.darkGreen }}
        onChangeItem={(item: keyValue) => handleChange(item)}
        disabled={disabled}
      />
    </View>
  );
};

export default index;
