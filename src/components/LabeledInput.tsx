import React, { ChangeEvent, HTMLAttributes, InputHTMLAttributes, ReactElement } from 'react';

import Label from '@components/Label';
import Wrapper from '@components/Wrapper';
import styled from '@emotion/styled';
import { border, colors, fonts, sizing, spacing } from '@styles/css';

interface ILabeledInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: 'text' | 'number';
  value: string;
}

type TStyledInputProp = InputHTMLAttributes<Element>;

const StyledInput = styled.input<TStyledInputProp>`
  text-align: center;
  background: transparent;
  color: ${colors.blue};
  ${fonts.mainSize}
  border: ${border.orangeLightBorder};
  ${border.defaultRadius}
  ${sizing.large}
  ${spacing.defaultSpacing}
  :focus {
    outline: none;
    caret-color: #5ec59a;
    ::placeholder {
      visibility: hidden;
    }
  }
`;

const LabeledInput = ({ name, ...rest }: ILabeledInputProps): ReactElement => {
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <StyledInput id={name} {...rest}></StyledInput>
    </Wrapper>
  );
};

export default LabeledInput;
