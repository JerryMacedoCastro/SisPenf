import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../Assets/GlobalStyles";
import { styles } from "./styles";

interface customModalProps {
  modalVisible: boolean;
  firstButtonText: string;
  secondButtonText: string;
  onClose: () => void;
}

const index = (props: customModalProps): JSX.Element => {
  const { modalVisible, onClose, firstButtonText, secondButtonText } = props;
  const navigation = useNavigation();
  const handleNavigation = () => {
    onClose();
    navigation.navigate("NewPuerperal");
  };
  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[globalStyles.button, globalStyles.secondaryButton]}
            onPress={handleNavigation}
          >
            <Text style={globalStyles.secondaryButtonText}>
              {firstButtonText}
            </Text>
          </Pressable>
          <Pressable
            style={[globalStyles.button, globalStyles.secondaryButton]}
            onPress={onClose}
          >
            <Text style={globalStyles.secondaryButtonText}>
              {secondButtonText}
            </Text>
          </Pressable>

          <Pressable
            onPress={onClose}
            style={[globalStyles.button, globalStyles.primaryButton]}
          >
            <Text style={globalStyles.primaryButtonText}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default index;
