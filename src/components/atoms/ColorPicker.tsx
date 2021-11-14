import React, { ReactElement, useState } from 'react';
import { CompactPicker, ColorChangeHandler } from 'react-color';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  width: 100px;
  height: 20px;
  border: 1px solid #facf5a;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: content-box;
  padding: 4px;
  margin: 5px;
`;
const StyledInnerDiv = styled.div`
  box-sizing: border-box;
  height: 100%;
`;

const StyledPopoverDiv = styled.div`
  margin-top: 40px;
  position: absolute;
  z-index: 2;
`;
const StyledCoverDiv = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export interface IColorPickerProps {
  name: string;
  onChange: ColorChangeHandler;
  color: string;
}

const ColorPicker = ({ name, color, onChange }: IColorPickerProps): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <StyledDiv
        id={name}
        onClick={() => {
          setIsVisible(true);
        }}
      >
        <StyledInnerDiv style={{ backgroundColor: color }}></StyledInnerDiv>
      </StyledDiv>
      {isVisible ? (
        <>
          <StyledPopoverDiv>
            <StyledCoverDiv
              onClick={() => {
                setIsVisible(false);
              }}
            ></StyledCoverDiv>
            <CompactPicker color={color} onChange={onChange}></CompactPicker>
          </StyledPopoverDiv>
        </>
      ) : null}
    </>
  );
};

export default ColorPicker;
