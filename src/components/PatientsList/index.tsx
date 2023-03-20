import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Fieldset from "../Fieldset";
import { styles } from "./styles";
import { IPatientResponse } from "../../interfaces";
import { getAllPatients } from "../../services/patient.service";

interface IPatientListProps {
  search?: string;
  infirmary?: number;
}

const PatientList = ({ search }: IPatientListProps): JSX.Element => {
  const [filteredList, setFilteredList] = useState<IPatientResponse[]>([]);
  const [hasNotFound, setHasNotFound] = useState(false);

  const handleSearch = async () => {
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
    } else {
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
        {filteredList.map((patient) => {
          return (
            <Fieldset
              key={patient.id}
              value={patient.name}
              label={`${patient.hospitalBed.infirmary.description} - ${patient.hospitalBed.description}`}
              hospitalBed={patient.hospitalBed.id}
              patientId={patient.id}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default PatientList;
