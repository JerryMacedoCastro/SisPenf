import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import TabHeader from "../../components/TabHeader";
import PsychologicalNeeds from "../PsychologicalNeeds";
import SpiritualNeeds from "../SpiritualNeeds";

const index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <TabHeader
        title="Histórico Materno"
        firstTab={PsychologicalNeeds}
        secondTab={SpiritualNeeds}
      />
    </View>
  );
};

export default index;
