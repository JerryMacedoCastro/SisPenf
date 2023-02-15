import {
  CheckIcon,
  FormControl,
  Select,
  WarningOutlineIcon,
  ISelectProps,
} from "native-base";
import { IOption } from "../../interfaces";

type Props = ISelectProps & {
  options: IOption[];
};

export default function CustomSelect({ options, ...rest }: Props): JSX.Element {
  return (
    <FormControl>
      <Select
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />,
        }}
        variant={"rounded"}
        size={"lg"}
        mb={6}
        width="full"
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
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        Valor inválido
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
