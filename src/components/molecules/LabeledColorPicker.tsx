import React, { ReactElement } from 'react';
import { ColorChangeHandler } from 'react-color';

import ColorPicker from '@atoms/ColorPicker';
import Label from '@atoms/Label';
import Wrapper from '@atoms/Wrapper';

interface ILabeledInputProps {
  name: string;
  onChange: ColorChangeHandler;
  color: string;
}

const LabeledInput = ({ name, color, onChange }: ILabeledInputProps): ReactElement => {
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <ColorPicker color={color} name={name} onChange={onChange}></ColorPicker>
    </Wrapper>
  );
};

export default LabeledInput;
