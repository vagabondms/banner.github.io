import React, { ReactElement, ReactEventHandler, useState } from 'react';
import { SketchPicker } from 'react-color';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 100px;
  height: 20px;
  padding: 2px;
  border: 0.5px solid black;
  border-radius: 2px;
`;
const StyledInnerDiv = styled.div`
  border: 0.1px solid lightgrey;
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
  onChange: any;
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
            <SketchPicker color={color} onChange={onChange}></SketchPicker>
          </StyledPopoverDiv>
        </>
      ) : null}
    </>
  );
};

export default ColorPicker;
