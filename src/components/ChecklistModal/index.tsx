import React, { useState } from "react";
import { Button, Checkbox, Text, Modal, Divider } from "native-base";
import { globalStyles } from "../../Assets/GlobalStyles";
import { View } from "react-native";

interface IOptionsCheck {
  textButton: string;
  titleChecklist: string;
  dataCheckedInitial: string[];
  saveDataCheckedFinal: React.Dispatch<React.SetStateAction<string[]>>;
  options: {
    label: string;
    value: string;
  }[]
}

const ModalWithChecklist = ({
  options,
  textButton,
  titleChecklist,
  dataCheckedInitial,
  saveDataCheckedFinal
}: IOptionsCheck) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalChecked, setModalChecked] = useState<string[]>(dataCheckedInitial);

  return (
    <>
      <Button
        bgColor={"green.900"}
        style={{ ...globalStyles.button, marginTop: 0 }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ ...globalStyles.primaryButtonText, marginLeft: 0 }}>
          {textButton}
        </Text>
      </Button>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content width="90%">
          <Modal.CloseButton />
          <Modal.Header>{titleChecklist}</Modal.Header>
          <Modal.Body>
            {options.map((item) => {
              return (
                <View key={item.value}>
                  <View style={{ width: "95%" }}>
                    <Checkbox
                      defaultIsChecked={modalChecked.includes(item.value)}
                      onChange={(checked) => {
                        setModalChecked((aux) => {
                          if (checked) aux.push(item.value);
                          else
                            aux = aux.filter(
                              (itemAux) => itemAux !== item.value
                            );

                          return aux;
                        });
                      }}
                      key={item.value}
                      value={item.value}
                    >
                      <Text textAlign="justify">{item.label}</Text>
                    </Checkbox>
                  </View>
                  <Divider marginBottom={5} marginTop={5} />
                </View>
              )
            })}
          </Modal.Body>
          <Modal.Footer>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={[globalStyles.button, globalStyles.secondaryButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={{ ...globalStyles.secondaryButtonText, marginLeft: 0 }}
                  onPress={() => {
                    saveDataCheckedFinal(modalChecked);
                    setModalVisible(false);
                  }}
                >
                  Fechar
                </Text>
              </Button>
            </View>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default ModalWithChecklist;
