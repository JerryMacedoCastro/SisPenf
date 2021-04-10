import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../Assets/GlobalStyles';

interface customModalProps {
  modalVisible: boolean;
  firstButtonText: string;
  secondButtonText: string;
  onClose: () => void;
}

const CustomModal = (props: customModalProps) => {
  const { modalVisible, onClose, firstButtonText, secondButtonText } = props;
  const navigation = useNavigation();
  const handleNavigation = () => {
    onClose();
    navigation.navigate('NewPuerperal');
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

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(2555,255,255,0.6)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20,
    padding: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
