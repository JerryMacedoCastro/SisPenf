import * as React from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "native-base";
// import { convertedDates } from "../../util/formatDate";

export interface IAccordion {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: IAccordion) => {
  const [numberExpanded, setNumberExpanded] = React.useState<number>(-1);

  function onClick() {
    // navigation.navigate("EditSheep", sheep);
  }

  return (
    <ScrollView>
      <List.Accordion
        title={title}
        left={(props: any) => <List.Icon {...props} icon="calendar" />}
        expanded={numberExpanded === 1}
        onPress={() => {
          if (numberExpanded === 1) setNumberExpanded(-1);
          else setNumberExpanded(1);
        }}
      >
        {children}
      </List.Accordion>
    </ScrollView>
  );
};

export default Accordion;
