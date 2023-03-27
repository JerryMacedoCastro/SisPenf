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
  Checkbox,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { IOption } from "../../interfaces";
import { globalStyles } from "../../Assets/GlobalStyles";
import { Text } from "react-native";
import { ISelectComponentType } from "native-base/lib/typescript/components/primitives/Select";

type Props = ISelectProps & {
  options: IOption[];
  textButton: string;
  modalTitle?: string;
  onClickSave?: (value: string) => void;
  infoValue?: string;
};

export default function CustomSelectChecked({
  modalTitle,
  textButton,
  onClickSave,
  options,
  ...rest
}: Props): JSX.Element {
  const [value, setValue] = React.useState([""]);
  return (
    <>
      <FormControl width={"full"} alignItems="center">
        <HStack space={2}>
          <Select
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            variant={"rounded"}
            height={12}
            width={72}
            fontSize="sm"
            mb={6}
            {...rest}
          >
            {options.map((op) => {
              return (
                <Select.Item
                  key={op.description}
                  label={op.description}
                  value={op.description}
                  maxWidth={"90%"}
                  startIcon={
                    <Checkbox
                      value=""
                      accessibilityLabel={`Selecione ${op.description}`}
                      // isChecked={false}
                    />
                  }
                />
              );
            })}
          </Select>
        </HStack>
      </FormControl>
    </>
  );
}
