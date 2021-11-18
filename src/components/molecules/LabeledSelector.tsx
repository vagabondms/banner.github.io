import React, { ReactElement, ReactEventHandler } from 'react';

import Label from '@atoms/Label';
import { TOptions } from '@atoms/Selector';
import Selector from '@atoms/Selector';
import Wrapper from '@atoms/Wrapper';

interface ILabeledInputProps {
  name: string;
  options: TOptions;
  value: string | number;
  onChange: ReactEventHandler;
}

const LabeledSelector = ({ name, options, value, onChange }: ILabeledInputProps): ReactElement => {
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <Selector id={name} value={value} onChange={onChange} options={options}></Selector>
    </Wrapper>
  );
};

export default LabeledSelector;
