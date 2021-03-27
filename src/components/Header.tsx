import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  destinyBack?: string;
  goBackOption?: boolean;
  textColor?: string;
}

const Header = (props: HeaderProps) => {
  const { title, destinyBack, goBackOption, textColor } = props;
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (!!!destinyBack) {
      navigation.goBack();
    } else {
      navigation.navigate(destinyBack);
    }
  };

  return (
    <>
      <View style={styles.container}></View>
      {goBackOption && (
        <BorderlessButton style={styles.goBack}>
          <Feather
            name="arrow-left"
            size={18}
            color={textColor ? textColor : "#51615F"}
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

      <Text
        style={textColor ? [styles.title, { color: textColor }] : styles.title}
      >
        {title}
      </Text>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
  },
  goBack: {
    height: 20,
    flexDirection: "row",
    position: "absolute",
    top: 50,
    marginLeft: 8,
    alignSelf: "flex-start",
  },

  goBacktext: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 14,
    marginLeft: 4,
    color: "#51615F",
  },

  title: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 14,
    color: "#51615F",
    position: "absolute",
    top: 50,
  },
});
