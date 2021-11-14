import React, { memo, ReactNode, ReactElement, LabelHTMLAttributes } from 'react';

import styled from '@emotion/styled';

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const StyledLabel = styled.label`
  background: transparent;
  color: #4f9da6;
  font-size: 15px;
  font-weight: bold;
`;

const Label = ({ children, ...rest }: ILabelProps): ReactElement => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default memo(Label);
