// eslint-disable-next-line no-use-before-define
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const index = (): JSX.Element => {
  return (
    <LinearGradient
      colors={["#fff", "transparent"]}
      style={styles.background}
    />
  );
};

export default index;
