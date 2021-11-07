import React, { CSSProperties, ReactElement } from 'react';

import ColorPicker from '@atoms/ColorPicker';
import Label from '@atoms/Label';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 10px;
`;

const LabeledInput = ({ name }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label name={name}>{name}</Label>
      <ColorPicker name={name}></ColorPicker>
    </StyledDiv>
  );
};

export default LabeledInput;
