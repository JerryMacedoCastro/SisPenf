import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Fieldset from "../Fieldset";
// import { patients } from "../../data";
import { styles } from "./styles";
import Animated from "react-native-reanimated";
import api from "../../services/api";
import { IPatientResponse } from "../../interfaces";

interface IPatientListProps {
  search?: string;
  infirmary?: number;
}

const index = ({ search }: IPatientListProps): JSX.Element => {
  const [filteredList, setFilteredList] = useState<IPatientResponse[]>([]);
  const [hasNotFound, setHasNotFound] = useState(false);

  const handleSearch = async () => {
    if (search) {
      const { data } = await api.get("patient");
      const patients: IPatientResponse[] = data;
      const list = patients.filter((patient) => {
        return patient.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      list.length > 0 ? setHasNotFound(false) : setHasNotFound(true);
      setFilteredList(list);
    } else {
      setFilteredList([]);
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
              label={`${patient.hospitalBed.infirmary.description} - ${patient.hospitalBed.description}`}
            />
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};
export default index;
