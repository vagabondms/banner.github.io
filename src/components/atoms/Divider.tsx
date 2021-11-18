import React, { ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TDividerType = 'parallel' | 'vertical';

type TDividerProps = {
  dividerType: TDividerType;
};

const handleDividerType = ({ dividerType }: TDividerProps) => {
  switch (dividerType) {
    case 'parallel':
      return css`
        width: 110px;
        border-bottom: 1px solid lightgrey;
        margin-bottom: 20px;
        padding-top: 20px;
      `;
    case 'vertical':
      return css`
        height: 100%;
        border-right: 1px solid lightgrey;
        margin-right: 10px;
        padding-left: 10px;
      `;
  }
};

const StyledDiv = styled.div<TDividerProps>`
  ${handleDividerType}
`;

const Divider = (props: TDividerProps): ReactElement => {
  return <StyledDiv {...props}></StyledDiv>;
};

export default Divider;
