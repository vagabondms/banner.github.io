import React, { ReactElement } from 'react';

import BoxWrapper from '@atoms/BoxWrapper';
import Label from '@atoms/Label';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  children: ReactElement | ReactElement[];
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 10px;
`;

const LabeledBoxWrapper = ({ name, children }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label name={name} style={{ fontSize: 40 }}>
        {name}
      </Label>
      <BoxWrapper name={name}>{children}</BoxWrapper>
    </StyledDiv>
  );
};

export default LabeledBoxWrapper;
