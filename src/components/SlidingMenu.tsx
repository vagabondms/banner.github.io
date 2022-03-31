import React, { ReactElement } from 'react';

import Divider from '@components/Divider';
import LabeledSelector from '@components/LabeledSelector';
import LabeledToggle from '@components/LabeledToggle';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useData } from '@hooks/useDataContext';
import { fontSizeGenerator, fontGenerator } from '@utils/data';
import { widthGenerator, heightGenerator } from '@utils/data';

type TSlidingMenuProps = {
  isVisible: boolean;
};

const handleVisible = ({ isVisible: visible }: TSlidingMenuProps) => {
  switch (visible) {
    case true:
      return css`
        transform: translateX(0px);
        opacity: 1;
      `;
    case false:
      return css`
        transform: translateX(-190px);
        opacity: 0;
        * {
          display: none;
        }
      `;
    default:
      return css``;
  }
};
const StyledDiv = styled.div`
  height: 100%;
  position: absolute;
  width: 190px;
  top: 0;
  bottom: 0;
  background-color: #3c4246;
  z-index: 1;
  ${handleVisible};
  transition: 0.5s;
  padding: 40px;
  left: 0;
`;

const InputBox = ({ isVisible }: TSlidingMenuProps): ReactElement => {
  const {
    data: { width, height, font, titleFontSize, subTitleFontSize, tagFontSize, underline },
    onChangeHandler,
  } = useData();

  return (
    <StyledDiv isVisible={isVisible}>
      <LabeledSelector name="폰트" value={font} onChange={onChangeHandler('font')} options={fontGenerator()}></LabeledSelector>
      <Divider dividerType="parallel" />
      <LabeledSelector
        name="제목"
        value={titleFontSize}
        onChange={onChangeHandler('titleFontSize')}
        options={fontSizeGenerator('title')}
      ></LabeledSelector>
      <LabeledSelector
        name="부제목"
        value={subTitleFontSize}
        onChange={onChangeHandler('subTitleFontSize')}
        options={fontSizeGenerator('subTitle')}
      ></LabeledSelector>
      <LabeledSelector
        name="태그"
        value={tagFontSize}
        onChange={onChangeHandler('titleFontSize')}
        options={fontSizeGenerator('tag')}
      ></LabeledSelector>
      <Divider dividerType="parallel" />
      <LabeledSelector
        options={widthGenerator()}
        value={width}
        onChange={onChangeHandler('width')}
        name="배경 넓이"
      ></LabeledSelector>
      <LabeledSelector
        options={heightGenerator()}
        value={height}
        onChange={onChangeHandler('height')}
        name="배경 높이"
      ></LabeledSelector>
      <Divider dividerType="parallel" />
      <LabeledToggle name="밑줄 설정" checked={underline} onClick={onChangeHandler('underline')}></LabeledToggle>
    </StyledDiv>
  );
};

export default InputBox;
