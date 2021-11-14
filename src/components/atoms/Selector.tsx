import React, { ReactElement, ReactEventHandler, SelectHTMLAttributes } from 'react';

import styled from '@emotion/styled';

export type TOption = { label: string | number; value: string | number };
export type TOptions = TOption[];

export interface ISelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: TOptions;
  value: string;
  onChange: ReactEventHandler;
}

const StyledSelect = styled.select`
  width: 100px;
  background: transparent;
  color: #facf5a;
`;
const StyledOption = styled.option``;

const Selector = ({ options, ...rest }: ISelectorProps): ReactElement => {
  return (
    <StyledSelect {...rest}>
      {options.map(({ label, value }: TOption) => {
        return (
          <StyledOption key={label} value={value}>
            {label}
          </StyledOption>
        );
      })}
    </StyledSelect>
  );
};

export default Selector;
