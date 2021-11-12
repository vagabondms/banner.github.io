import React, { ReactElement, ReactEventHandler } from 'react';

import Label from '@atoms/Label';
import Selector from '@atoms/Selector';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  options: string[] | number[];
  value: string;
  onChange: ReactEventHandler;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 10px;
`;
const LabeledSelector = ({ name, options, value, onChange }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label htmlFor={name}>{name}</Label>
      <Selector id={name} value={value} onChange={onChange} options={options}></Selector>
    </StyledDiv>
  );
};

export default LabeledSelector;
