import React from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido',
  },

  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha deve conter um dígito, pelo menos um caractere minúsculo e um maiúsculo e no mínimo oito carcteres',
  },
};

interface useFormProps {
  type: 'email' | 'password' | null;
}

const useForm = (props: useFormProps) => {
  const { type } = props;
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const validate = (value: string) => {
    if (type === null) return true;
    if (value.length === 0) {
      setError('Preencha algum valor!');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = (text: string) => {
    if (error) validate(text);
    setValue(text);
  };
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
