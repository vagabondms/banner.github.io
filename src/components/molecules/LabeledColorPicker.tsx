import React, { ReactElement } from 'react';
import { ColorChangeHandler } from 'react-color';

import ColorPicker from '@atoms/ColorPicker';
import Label from '@atoms/Label';
import LabelWrapper from '@atoms/LabelWrapper';

interface ILabeledInputProps {
  name: string;
  onChange: ColorChangeHandler;
  color: string;
}

const LabeledInput = ({ name, color, onChange }: ILabeledInputProps): ReactElement => {
  return (
    <LabelWrapper>
      <Label htmlFor={name}>{name}</Label>
      <ColorPicker color={color} name={name} onChange={onChange}></ColorPicker>
    </LabelWrapper>
  );
};

export default LabeledInput;
