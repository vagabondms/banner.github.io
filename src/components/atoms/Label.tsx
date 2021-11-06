import React, { ReactNode, ReactElement, CSSProperties } from 'react';

import styled from '@emotion/styled';

interface ILabelProps {
  name: string;
  children: ReactNode;
  style?: CSSProperties;
}

const StyledLabel = styled.label``;

const Label = ({ name, children, ...rest }: ILabelProps): ReactElement => {
  return (
    <StyledLabel htmlFor={name} {...rest}>
      {children}
    </StyledLabel>
  );
};

export default Label;
