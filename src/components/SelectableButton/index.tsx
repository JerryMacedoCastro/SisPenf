import React from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";
import { colors, globalStyles } from "../../Assets/GlobalStyles";
import { IExam } from "../../interfaces";

interface ButtonProps {
  exam: IExam;
  handlePress: (exam: IExam) => void;
}

const index = (props: ButtonProps): JSX.Element => {
  const { exam, handlePress } = props;
  const { value, isSelected } = exam;

  return (
    <View
      style={[
        styles.buttonContainer,
        isSelected
          ? { backgroundColor: colors.darkGreen }
          : { backgroundColor: colors.white },
      ]}
    >
      <Pressable style={[styles.button]} onPress={() => handlePress(exam)}>
        <Text
          style={[
            globalStyles.primaryButtonText,
            isSelected ? { color: colors.white } : { color: colors.gray },
          ]}
        >
          {value}
        </Text>
        {isSelected ? (
          <Feather name={"check-square"} color={colors.white} size={24} />
        ) : (
          <Feather name={"square"} color={colors.gray} size={24} />
        )}
      </Pressable>
    </View>
  );
};

export default index;
