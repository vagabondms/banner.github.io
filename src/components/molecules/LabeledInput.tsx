import React, { ReactElement, ReactEventHandler } from 'react';

import Input from '@atoms/Input';
import Label from '@atoms/Label';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  placeholder: string;
  type: 'text' | 'number';
  value: string;
  onChange: ReactEventHandler;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: space-between;
`;

const LabeledInput = ({ name, ...rest }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label htmlFor={name}>{name}</Label>
      <Input id={name} {...rest}></Input>
    </StyledDiv>
  );
};

export default LabeledInput;
