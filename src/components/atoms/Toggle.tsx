import React, { HTMLAttributes, ReactElement, ReactEventHandler } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { border, colors, fonts, justifying, sizing } from '@styles/css';

export interface TToggleProps extends HTMLAttributes<HTMLDivElement> {
  state: boolean;
  onClickHandler: ReactEventHandler;
}

type TStyledToggleOuterProps = Omit<TToggleProps, 'onClickHandler'>;
type TStyledToggleInnerProps = Omit<TToggleProps, 'onClickHandler'>;

const stateHandlerOuter = ({ state }: TStyledToggleInnerProps) => {
  switch (state) {
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

const stateHandlerInner = ({ state }: TStyledToggleInnerProps) => {
  if (!state) {
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

  ${stateHandlerOuter};
`;

const ToggleInner = styled.div<TStyledToggleInnerProps>`
  background-color: ${colors.blue};
  ${border.defaultRadius}
  width: 50%;
  height: 100%;
  transition: all 0.5s;
  ${justifying.centering}
  ${stateHandlerInner};
  color: ${colors.orange};
`;

const Toggle = ({ state, onClickHandler, ...rest }: TToggleProps): ReactElement => {
  return (
    <ToggleOuter onClick={onClickHandler} state={state} {...rest}>
      <ToggleInner state={state}>{state ? 'ON' : 'OFF'}</ToggleInner>
    </ToggleOuter>
  );
};

export default Toggle;
