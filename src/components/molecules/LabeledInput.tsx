import React, { CSSProperties, ReactElement } from 'react';

import Input from '@atoms/Input';
import Label from '@atoms/Label';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  style: CSSProperties;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
const LabeledInput = ({ name, style }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label name={name} style={{ fontSize: (style.fontSize as number) - 3 }}>
        {name}
      </Label>
      <Input name={name} style={style}></Input>
    </StyledDiv>
  );
};

export default LabeledInput;
