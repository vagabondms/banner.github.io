import React, { ReactElement, useState } from 'react';
import { ColorChangeHandler, SketchPicker } from 'react-color';

import Label from '@components/Label';
import Wrapper from '@components/Wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { border, sizing, spacing } from '@styles/css';

type TPickerPositionEnum = 'top' | 'left' | 'right' | 'bottom';
interface IColorPickerProps {
  name: string;
  onChange: ColorChangeHandler;
  color: string;
  pickerPosition?: TPickerPositionEnum;
}

const StyledDiv = styled.div`
  ${sizing.small}
  border : ${border.orangeLightBorder};
  ${border.defaultRadius}
  ${spacing.defaultSpacing}
  overflow: hidden;
  cursor: pointer;
`;

const StyledInnerDiv = styled.div`
  height: 100%;
`;

const handlePickerPosition = ({ position }: { position: TPickerPositionEnum }) => {
  switch (position) {
    case 'top':
      return css`
        bottom: 40px;
        right: -60px;
      `;
    case 'left':
      return css`
        bottom: -150px;
        right: 110px;
      `;
    default:
      return css``;
  }
};

const StyledPopoverDiv = styled.div<{ position: TPickerPositionEnum }>`
  position: absolute;
  z-index: 2;
  ${handlePickerPosition};
`;
const StyledCoverDiv = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const LabeledColorPicker = ({ name, color, onChange, pickerPosition = 'bottom' }: IColorPickerProps): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <div style={{ position: 'relative' }}>
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
            <StyledPopoverDiv position={pickerPosition}>
              <StyledCoverDiv
                onClick={() => {
                  setIsVisible(false);
                }}
              ></StyledCoverDiv>
              <SketchPicker color={color} onChange={onChange}></SketchPicker>
            </StyledPopoverDiv>
          </>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default LabeledColorPicker;
