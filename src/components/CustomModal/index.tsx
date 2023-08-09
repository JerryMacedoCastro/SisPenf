import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { globalStyles } from "../../Assets/GlobalStyles";
import { styles } from "./styles";

interface customModalProps {
  modalVisible: boolean;
  firstButtonText: string;
  secondButtonText: string;
  thirdButtonText: string;
  fourthButtonText: string;
  actionFirstButton?: () => void;
  actionSecondButton?: () => void;
  actionThirdButton?: () => void;
  actionFourthButton?: () => void;
  onClose: () => void;
}

const CustomModal = (props: customModalProps): JSX.Element => {
  const {
    modalVisible,
    firstButtonText,
    secondButtonText,
    thirdButtonText,
    fourthButtonText,
    actionFirstButton,
    actionSecondButton,
    actionThirdButton,
    actionFourthButton,
    onClose,
  } = props;
  const navigation = useNavigation();
  const handleNavigation = () => {
    onClose();
    navigation.navigate("NewPuerperal", { patientId: null });
  };
  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[globalStyles.button, globalStyles.secondaryButton]}
            onPress={actionFirstButton || handleNavigation}
          >
            <Text style={globalStyles.secondaryButtonText}>
              {firstButtonText}
            </Text>
          </Pressable>
          <Pressable
            style={[globalStyles.button, globalStyles.secondaryButton]}
            onPress={actionSecondButton || onClose}
          >
            <Text style={globalStyles.secondaryButtonText}>
              {secondButtonText}
            </Text>
          </Pressable>
          <Pressable
            style={[globalStyles.button, globalStyles.secondaryButton]}
            onPress={actionThirdButton || onClose}
          >
            <Text style={globalStyles.secondaryButtonText}>
              {thirdButtonText}
            </Text>
          </Pressable>
          <Pressable
            style={[globalStyles.button, globalStyles.secondaryButton]}
            onPress={actionFourthButton || onClose}
          >
            <Text style={globalStyles.secondaryButtonText}>
              {fourthButtonText}
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

export default CustomModal;
