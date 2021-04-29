import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import InfirmaryItem from "../InfirmaryItem";
import { styles } from "./styles";

const index = (): JSX.Element => {
  const infirmaries = [
    { infirmary: "01" },
    { infirmary: "02" },
    { infirmary: "03" },
    { infirmary: "04" },
    { infirmary: "05" },
    { infirmary: "06" },
  ];

  const [selectedInfirmary, setSelectedInfirmary] = useState(
    infirmaries[0].infirmary
  );

  return (
    <>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>Acompanhamento de enfermarias</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.container}
          horizontal
          data={infirmaries}
          renderItem={({ item }) => (
            <InfirmaryItem
              infirmary={`${item.infirmary}`}
              isSelected={item.infirmary === selectedInfirmary}
              handlePress={() => setSelectedInfirmary(item.infirmary)}
            />
          )}
          keyExtractor={(item) => item.infirmary}
        ></FlatList>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Segunda - feira, 21 de dezembro de 2020 - 15:05
        </Text>
      </View>
    </>
  );
};

export default index;
