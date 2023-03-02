import React from "react";
import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

const CommonInput = ({ ...rest }: IInputProps): JSX.Element => {
  return (
    <FormControl>
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
