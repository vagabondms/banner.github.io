import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
export interface ISelectorProps {
  options: (string | number)[];
  name: string;
}

const StyledSelect = styled.select`
  width: 100px;
`;
const StyledOption = styled.option``;

const Selector = ({ options, name }: ISelectorProps): ReactElement => {
  return (
    <StyledSelect name={name}>
      {options.map((option) => {
        return (
          <StyledOption key={option} value={option}>
            {option}
          </StyledOption>
        );
      })}
    </StyledSelect>
  );
};

export default Selector;
