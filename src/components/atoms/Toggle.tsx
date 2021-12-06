import React, { ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { border, colors, justifying, sizing } from '@styles/css';

export interface TToggleProps {
  id: string;
  checked: boolean;
  onClick: (e: any) => void;
}

type TStyledToggleOuterProps = Omit<TToggleProps, 'onClick'>;
type TStyledToggleInnerProps = Omit<TToggleProps, 'onClick' | 'id'>;

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

const Toggle = ({ checked, onClick, ...rest }: TToggleProps): ReactElement => {
  const onClickHandler = () => {
    onClick(!checked);
  };

  return (
    <ToggleOuter checked={checked} onClick={onClickHandler} {...rest}>
      <ToggleInner checked={checked}>{checked ? 'ON' : 'OFF'}</ToggleInner>
    </ToggleOuter>
  );
};

export default Toggle;
