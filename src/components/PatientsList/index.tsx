import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Fieldset from "../Fieldset";
import { patients } from "../../data";
import { styles } from "./styles";
import Animated from "react-native-reanimated";

interface IPatientListProps {
  search?: string;
}

const index = ({ search }: IPatientListProps): JSX.Element => {
  const [filteredList, setFilteredList] = useState(patients);
  const [hasNotFound, setHasNotFound] = useState(false);

  const handleSearch = () => {
    if (search) {
      const list = patients.filter((patient) => {
        return patient.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      list.length > 0 ? setHasNotFound(false) : setHasNotFound(true);
      setFilteredList(list);
    } else {
      setFilteredList(patients);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <Animated.View style={[styles.content]}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          position: "relative",
        }}
      >
        {hasNotFound && <Text>Nenhum resultado encontrado</Text>}
        {filteredList.map((patient, index) => {
          return (
            <Fieldset
              key={index}
              value={patient.name}
              label={`Leito ${(index + 1).toString()}`}
            />
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};
export default index;
