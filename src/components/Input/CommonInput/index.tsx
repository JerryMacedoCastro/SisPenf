import React from "react";
import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

interface IProps extends IInputProps {
  label: string;
}
const CommonInput = ({ label, ...rest }: IProps): JSX.Element => {
  return (
    <FormControl>
      <FormControl.Label paddingLeft={2}>{label}</FormControl.Label>
      <NativeBaseInput
        variant={"rounded"}
        size={"full"}
        height={12}
        width={"full"}
        mb={6}
        {...rest}
      />

      <FormControl.ErrorMessage>Valor inválido</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default CommonInput;
