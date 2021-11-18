import React, { ReactElement } from 'react';

import ColorPicker, { IColorPickerProps } from '@atoms/ColorPicker';
import Label from '@atoms/Label';
import Wrapper from '@atoms/Wrapper';

type ILabeledInputProps = IColorPickerProps;

const LabeledColorPicker = ({ name, color, onChange, ...rest }: ILabeledInputProps): ReactElement => {
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <ColorPicker color={color} name={name} onChange={onChange} {...rest}></ColorPicker>
    </Wrapper>
  );
};

export default LabeledColorPicker;
