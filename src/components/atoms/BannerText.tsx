import React, { CSSProperties, ReactNode, ReactElement } from 'react';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  white-space: nowrap;
  display: flex;
  align-content: center;
  justify-content: center;
`;

type TBannerText = {
  children: ReactNode;
  style: CSSProperties;
};

const BannerText = ({ children, ...rest }: TBannerText): ReactElement => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default BannerText;
