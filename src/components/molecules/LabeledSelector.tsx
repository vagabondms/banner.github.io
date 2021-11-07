import React, { CSSProperties, ReactElement } from 'react';

import Label from '@atoms/Label';
import Selector from '@atoms/Selector';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  options: (string | number)[];
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 10px;
`;
const LabeledSelector = ({ name, options }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label name={name}>{name}</Label>
      <Selector name={name} options={options}></Selector>
    </StyledDiv>
  );
};

export default LabeledSelector;
