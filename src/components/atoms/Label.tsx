import React, { memo, ReactNode, ReactElement, LabelHTMLAttributes } from 'react';

import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@styles/css';

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const StyledLabel = styled.label`
  background: transparent;
  color: ${colors.blue};
  ${spacing.labelSpacing}
  ${fonts.largeSize}
  font-weight: bold;
  white-space: nowrap;
`;

const Label = ({ children, ...rest }: ILabelProps): ReactElement => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default memo(Label);
