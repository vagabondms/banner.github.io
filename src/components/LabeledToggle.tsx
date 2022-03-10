import React, { ReactElement } from 'react';

import Label from '@components/Label';
import Wrapper from '@components/Wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { border, colors, justifying, sizing } from '@styles/css';

export interface TToggleProps {
  id: string;
  checked: boolean;
  onClick: (e: boolean) => void;
}

type TStyledToggleOuterProps = Omit<TToggleProps, 'onClick'>;
type TStyledToggleInnerProps = Omit<TToggleProps, 'onClick' | 'id'>;

interface ILabeledToggleProps extends Omit<TToggleProps, 'id'> {
  name: string;
}

const checkedHandlerOuter = ({ checked }: TStyledToggleInnerProps) => {
  switch (checked) {
    case true:
      return css`
        @keyframes bright {
          from {
            filter: brightness(70%);
          }
          to {
            filter: brightness(100%);
          }
        }
        animation: bright 0.5s forwards;
      `;
    case false:
      return css`
        @keyframes dim {
          from {
            filter: brightness(100%);
          }
          to {
            filter: brightness(70%);
          }
        }
        animation: dim 0.5s forwards;
      `;
    default:
      return css``;
  }
};

const checkedHandlerInner = ({ checked }: TStyledToggleInnerProps) => {
  if (!checked) {
    return css`
      transform: translateX(100%);
    `;
  }
};

const ToggleOuter = styled.div<TStyledToggleOuterProps>`
  ${sizing.small}
  padding: 2px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
  ${border.defaultRadius}
  background-color: ${colors.black};

  ${checkedHandlerOuter};
`;

const ToggleInner = styled.div<TStyledToggleInnerProps>`
  background-color: ${colors.blue};
  ${border.defaultRadius}
  width: 50%;
  height: 100%;
  transition: all 0.5s;
  ${justifying.centering}
  ${checkedHandlerInner};
  color: ${colors.orange};
`;

const LabeledInput = ({ name, checked, onClick, ...rest }: ILabeledToggleProps): ReactElement => {
  const onClickHandler = () => {
    onClick(!checked);
  };
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <ToggleOuter id={name} checked={checked} onClick={onClickHandler} {...rest}>
        <ToggleInner checked={checked}>{checked ? 'ON' : 'OFF'}</ToggleInner>
      </ToggleOuter>
    </Wrapper>
  );
};

export default LabeledInput;
