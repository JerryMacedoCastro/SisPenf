import React from "react";
import {
  CheckIcon,
  FormControl,
  Select,
  ISelectProps,
  HStack,
  Button,
  Modal,
  Input,
  Center,
  IconButton,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { IOption } from "../../interfaces";

type Props = ISelectProps & {
  options: IOption[];
  addInfo?: boolean;
  modalTitle?: string;
  onClickSave?: (value: string) => void;
  infoValue?: string;
  setValue?: (value: string) => void;
};

export default function CustomSelect({
  addInfo,
  modalTitle,
  onClickSave,
  options,
  infoValue,
  setValue,
  placeholder,
  ...rest
}: Props): JSX.Element {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <FormControl width={"full"}>
      <FormControl.Label paddingLeft={2}>{placeholder}</FormControl.Label>
      <HStack space={2}>
        <Select
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          variant={"rounded"}
          height={12}
          width={addInfo ? 64 : 72}
          fontSize="sm"
          mb={6}
          placeholder={placeholder}
          {...rest}
        >
          {options.map((op) => {
            return (
              <Select.Item
                key={op.description}
                label={op.description}
                value={op.description}
              />
            );
          })}
        </Select>
        {addInfo && (
          <IconButton
            variant={"ghost"}
            _icon={{ as: MaterialIcons, name: "add", color: "green.900" }}
            size="md"
            width={6}
            height={12}
            mr={2}
            onPress={() => setShowModal(true)}
          />
        )}
      </HStack>

      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>{modalTitle}</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Adicionar informação</FormControl.Label>
                <Input
                  value={infoValue}
                  onChange={(event) => {
                    if (setValue) setValue(event.nativeEvent.text);
                  }}
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="black"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onPress={() => {
                    if (onClickSave && infoValue) onClickSave(infoValue);
                    setShowModal(false);
                  }}
                  backgroundColor={"green.900"}
                >
                  Salvar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </FormControl>
  );
}
