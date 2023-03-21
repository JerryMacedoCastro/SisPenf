import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Fieldset from "../Fieldset";
// import { patients } from "../../data";
import { styles } from "./styles";
import api from "../../services/api";
import { IPatientResponse } from "../../interfaces";
import { getAllPatients } from "../../services/patient.service";

interface IPatientListProps {
  search?: string;
  infirmary?: number;
}

const index = ({ search }: IPatientListProps): JSX.Element => {
  const [filteredList, setFilteredList] = useState<IPatientResponse[]>([]);
  const [hasNotFound, setHasNotFound] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    setLoading(true);
    if (search) {
      const patients = await getAllPatients();
      const list = patients.filter((patient) => {
        if (!patient.isActive) return false;
        return patient.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      list.length > 0 ? setHasNotFound(false) : setHasNotFound(true);
      setFilteredList(list);
      setLoading(false);
    } else {
      setLoading(false);
      setFilteredList([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <View style={[styles.content]}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          position: "relative",
        }}
      >
        {hasNotFound && <Text>Nenhum resultado encontrado</Text>}
        {loading && <ActivityIndicator size="large" />}
        {filteredList.map((patient, index) => {
          return (
            <Fieldset
              key={index}
              value={patient.name}
              label={`${patient.hospitalBed.infirmary.description} - ${patient.hospitalBed.description}`}
              hospitalBed={patient.hospitalBed.id}
              patient={patient}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default index;
