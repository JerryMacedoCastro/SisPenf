import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
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
        {filteredList.map((patient) => {
          return (
            <Fieldset key={patient.id} value={patient.name} patient={patient} />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default PatientList;
