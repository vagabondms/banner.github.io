import React, { CSSProperties, ReactNode, ReactElement } from 'react';

import styled from '@emotion/styled';
import { justifying } from '@styles/css';

const StyledDiv = styled.div`
  white-space: nowrap;
  ${justifying.centering}
`;

type TBannerText = {
  children: ReactNode;
  style: CSSProperties;
};

const BannerText = ({ children, ...rest }: TBannerText): ReactElement => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default BannerText;
