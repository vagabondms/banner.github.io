import React, { ReactElement, ReactEventHandler, SelectHTMLAttributes } from 'react';

import styled from '@emotion/styled';
import { border, colors, fonts, justifying, sizing, spacing } from '@styles/css';

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
  outline: 0 none;
  ${fonts.mainSize}
  ${justifying.centering}
  ${border.defaultRadius}
  border: ${border.orangeLightBorder};
  ${sizing.small}
  ${spacing.defaultSpacing}
  background: transparent;
  color: ${colors.orange};
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
