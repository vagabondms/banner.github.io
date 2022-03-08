import React, { ChangeEvent, ReactElement } from 'react';

import Label from '@atoms/Label';
import { ISelectorProps } from '@atoms/Selector';
import Selector from '@atoms/Selector';
import Wrapper from '@atoms/Wrapper';

interface ILabeledInputProps extends ISelectorProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
