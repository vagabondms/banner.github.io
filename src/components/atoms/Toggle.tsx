import React, { HTMLAttributes, ReactElement, ReactEventHandler } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/css';

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
      transform: translateX(130%);
    `;
  }
};

const ToggleOuter = styled.div<TStyledToggleOuterProps>`
  width: 50px;
  height: 24px;
  padding: 2px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${colors.red};

  ${stateHandlerOuter};
`;

const ToggleInner = styled.div<TStyledToggleInnerProps>`
  background-color: ${colors.blue};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  transition: all 0.5s;

  ${stateHandlerInner};
`;

const Toggle = ({ state, onClickHandler, ...rest }: TToggleProps): ReactElement => {
  console.log(state);
  return (
    <ToggleOuter onClick={onClickHandler} state={state} {...rest}>
      <ToggleInner state={state} />
    </ToggleOuter>
  );
};

export default Toggle;
