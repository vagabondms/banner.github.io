import React, { CSSProperties, ReactElement, ReactEventHandler } from 'react';

import Input from '@atoms/Input';
import Label from '@atoms/Label';
import styled from '@emotion/styled';
import { useData } from '@hooks/useContext';
interface ILabeledInputProps {
  name: 'title' | 'subTitle' | 'tag';
  style?: CSSProperties;
  placeholder: string;
  type: 'text' | 'number';
  value: string;
  onChange: ReactEventHandler;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 10px;
`;
const LabeledInput = ({ name, style, ...rest }: ILabeledInputProps): ReactElement => {
  // 여기에서 동적으로 가져올 수 있는 방법 생각해보기
  const hi = useData().title;
  return (
    <StyledDiv>
      <Label name={name} style={{ fontSize: (style?.fontSize as number) - 3 }}>
        {name}
      </Label>
      <Input name={name} style={style} {...rest}></Input>
    </StyledDiv>
  );
};

export default LabeledInput;
