import React, { ReactElement } from 'react';
import { ColorChangeHandler } from 'react-color';

import ColorPicker from '@atoms/ColorPicker';
import Label from '@atoms/Label';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  onChange: ColorChangeHandler;
  color: string;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabeledInput = ({ name, color, onChange }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label htmlFor={name}>{name}</Label>
      <ColorPicker color={color} name={name} onChange={onChange}></ColorPicker>
    </StyledDiv>
  );
};

export default LabeledInput;
