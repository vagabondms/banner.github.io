import React, { CSSProperties, ReactElement } from 'react';

import Input from '@atoms/Input';
import Label from '@atoms/Label';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  style?: CSSProperties;
  placeHolder: string;
  type: 'text' | 'number';
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 10px;
`;
const LabeledInput = ({ name, style, placeHolder, type }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label name={name} style={{ fontSize: (style?.fontSize as number) - 3 }}>
        {name}
      </Label>
      <Input name={name} style={style} type={type} placeHolder={placeHolder}></Input>
    </StyledDiv>
  );
};

export default LabeledInput;
