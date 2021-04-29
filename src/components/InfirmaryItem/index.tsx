import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { styles } from "./styles";

interface infirmaryItemProps {
  isSelected?: boolean;
  infirmary: string;
  handlePress: () => void;
}

const index = (props: infirmaryItemProps): JSX.Element => {
  const { isSelected, infirmary, handlePress } = props;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={isSelected ? [styles.item, styles.seletedItem] : styles.item}
      >
        <Text style={styles.itemText}>{`Enfermaria ${infirmary}`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default index;
