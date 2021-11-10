import React, { CSSProperties, ReactElement, ReactEventHandler } from 'react';

import Input from '@atoms/Input';
import Label from '@atoms/Label';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  style?: CSSProperties;
  placeholder: string;
  type: 'text' | 'number';
  value: string;
  onChange: ReactEventHandler;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 10px;
`;
const LabeledInput = ({ name, style, ...rest }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label htmlFor={name} style={{ fontSize: (style?.fontSize as number) - 3 }}>
        {name}
      </Label>
      <Input id={name} style={style} {...rest}></Input>
    </StyledDiv>
  );
};

export default LabeledInput;
