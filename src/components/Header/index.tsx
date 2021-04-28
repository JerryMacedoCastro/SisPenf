// eslint-disable-next-line no-use-before-define
import React from "react";
import { Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

interface HeaderProps {
  title?: string;
  destinyBack?: string;
  goBackOption?: boolean;
  textColor?: string;
}

const index = (props: HeaderProps): JSX.Element => {
  const { title, destinyBack, goBackOption, textColor } = props;
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (!destinyBack) {
      navigation.goBack();
    } else {
      navigation.navigate(destinyBack);
    }
  };

  return (
    <>
      {goBackOption && (
        <BorderlessButton style={styles.goBack}>
          <Feather
            name="arrow-left"
            size={18}
            color={textColor || "#51615F"}
            onPress={navigation.goBack}
          />
          <Text
            style={
              textColor
                ? [styles.goBacktext, { color: textColor }]
                : styles.goBacktext
            }
            onPress={handleGoBack}
          >
            Voltar
          </Text>
        </BorderlessButton>
      )}
      {title && (
        <Text
          style={
            textColor ? [styles.title, { color: textColor }] : styles.title
          }
        >
          {title}
        </Text>
      )}
    </>
  );
};

export default index;
