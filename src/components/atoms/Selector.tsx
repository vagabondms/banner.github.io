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
  height: 25px;
  background: transparent;
  color: #facf5a;
  margin-top: 2px;
  padding: 4px;
  border-radius: 4px;
  outline: 0 none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
