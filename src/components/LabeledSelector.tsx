import React, { ChangeEvent, ReactElement, SelectHTMLAttributes } from 'react';

import Label from '@components/Label';
import Wrapper from '@components/Wrapper';
import styled from '@emotion/styled';
import { border, colors, fonts, justifying, sizing, spacing } from '@styles/css';

export type TOption = { label: string | number; value: string | number };
export type TOptions = TOption[];

interface ILabeledInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: TOptions;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const StyledSelect = styled.select<Omit<ILabeledInputProps, 'name' | 'options'>>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0 none;
  background: transparent;
  ${fonts.mainSize}
  ${justifying.centering}
  
  ${border.defaultRadius}
  border: ${border.orangeLightBorder};
  ${sizing.small}
  ${spacing.defaultSpacing}
  color: ${colors.orange};
`;

const StyledOption = styled.option``;

const LabeledSelector = ({ name, options, ...rest }: ILabeledInputProps): ReactElement => {
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <StyledSelect {...rest}>
        {options.map(({ label, value: optionValue }: TOption) => {
          return (
            <StyledOption key={label} value={optionValue}>
              {label}
            </StyledOption>
          );
        })}
      </StyledSelect>
    </Wrapper>
  );
};

export default LabeledSelector;
