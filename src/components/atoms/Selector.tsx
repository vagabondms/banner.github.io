import React, { ReactElement, ReactEventHandler, SelectHTMLAttributes } from 'react';

import styled from '@emotion/styled';

export type TOption = { label: string | number; value: string | number };
export type TOptions = TOption[];

export interface ISelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: TOptions;
  value: string | number;
  onChange: ReactEventHandler;
}

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  text-align: center;
  border: 1px solid #facf5a;
  width: 100px;
  height: 30px;

  background: transparent;
  color: #facf5a;
  margin: 5px;
  padding: 4px;
  border-radius: 4px;
  outline: 0 none;
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
