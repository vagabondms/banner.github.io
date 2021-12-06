import React, { ReactElement } from 'react';

import Label from '@atoms/Label';
import Toggle, { TToggleProps } from '@atoms/Toggle';
import Wrapper from '@atoms/Wrapper';

interface ILabeledToggleProps extends TToggleProps {
  name: string;
}

const LabeledInput = ({ name, ...rest }: ILabeledToggleProps): ReactElement => {
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <Toggle id={name} {...rest}></Toggle>
    </Wrapper>
  );
};

export default LabeledInput;
