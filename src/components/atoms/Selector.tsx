import React, { ReactElement, ReactEventHandler, SelectHTMLAttributes } from 'react';

import styled from '@emotion/styled';

export interface ISelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: (string | number)[];
  value: string;
  onChange: ReactEventHandler;
}

const StyledSelect = styled.select`
  width: 100px;
`;
const StyledOption = styled.option``;

const Selector = ({ options, ...rest }: ISelectorProps): ReactElement => {
  return (
    <StyledSelect {...rest}>
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
