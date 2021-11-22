import React, { HTMLAttributes, ReactElement, ReactEventHandler } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/css';

export interface TToggleProps extends HTMLAttributes<HTMLDivElement> {
  state: boolean;
  onClickHandler: ReactEventHandler;
}

type TStyledToggleOuterProps = Omit<TToggleProps, 'onClickHandler' | 'state'>;
type TStyledToggleInnerProps = Omit<TToggleProps, 'onClickHandler'>;

const stateHandler = ({ state }: TStyledToggleInnerProps) => {
  switch (state) {
    case true:
      return css``;
    case false:
      return css``;
    default:
      return css``;
  }
};

const ToggleOuter = styled.div<TStyledToggleOuterProps>`
  width: 50px;
  height: 24px;
  padding: 2px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${colors.red};
  display: flex;
`;

const ToggleInner = styled.div<TStyledToggleInnerProps>`
  background-color: ${colors.blue};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  transition: all 0.2s;

  ${stateHandler};
`;

const Toggle = ({ state, onClickHandler, ...rest }: TToggleProps): ReactElement => {
  console.log(state);
  return (
    <ToggleOuter onClick={onClickHandler} {...rest}>
      <ToggleInner state={state} />
    </ToggleOuter>
  );
};

export default Toggle;
