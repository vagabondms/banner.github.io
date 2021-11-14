import React, { ReactElement, ReactEventHandler } from 'react';

import Label from '@atoms/Label';
import LabelWrapper from '@atoms/LabelWrapper';
import { TOptions } from '@atoms/Selector';
import Selector from '@atoms/Selector';

interface ILabeledInputProps {
  name: string;
  options: TOptions;
  value: string;
  onChange: ReactEventHandler;
}

const LabeledSelector = ({ name, options, value, onChange }: ILabeledInputProps): ReactElement => {
  return (
    <LabelWrapper>
      <Label htmlFor={name}>{name}</Label>
      <Selector id={name} value={value} onChange={onChange} options={options}></Selector>
    </LabelWrapper>
  );
};

export default LabeledSelector;
