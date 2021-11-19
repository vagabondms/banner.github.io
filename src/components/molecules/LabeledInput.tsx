import React, { ReactElement, ReactEventHandler } from 'react';

import Input from '@atoms/Input';
import Label from '@atoms/Label';
import Wrapper from '@atoms/Wrapper';

interface ILabeledInputProps {
  name: string;
  placeholder: string;
  type: 'text' | 'number';
  value: string;
  onChange: ReactEventHandler;
}

const LabeledInput = ({ name, ...rest }: ILabeledInputProps): ReactElement => {
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <Input id={name} {...rest}></Input>
    </Wrapper>
  );
};

export default LabeledInput;
