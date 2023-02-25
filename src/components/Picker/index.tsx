import React from "react";

import { keyValue } from "../../interfaces";

import { CheckIcon, FormControl, Select, ISelectProps } from "native-base";
type PickerProps = ISelectProps & {
  items: keyValue[];
  placeholder: string;
};

const index = ({ placeholder, items, ...rest }: PickerProps): JSX.Element => {
  return (
    <FormControl width={"2/4"} padding={"0.5"} marginTop={4} marginBottom={4}>
      <Select
        placeholder={placeholder}
        placeholderTextColor="green.900"
        _selectedItem={{
          bg: "white",
          bgColor: "white",
          colorScheme: "white",
          endIcon: <CheckIcon size={5} />,
        }}
        variant={"rounded"}
        size={"md"}
        {...rest}
      >
        {items.map((item) => {
          return (
            <Select.Item
              key={item.label}
              label={item.label}
              value={item.value.toString()}
            />
          );
        })}
      </Select>
    </FormControl>
  );
};

export default index;
