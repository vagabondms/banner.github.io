import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SlidingModal from '@atoms/SlidingModal';
import { TSlidingModalProps } from '@atoms/SlidingModal';
import Toggle from '@atoms/Toggle';
import { useData } from '@hooks/useDataContext';
import LabeledSelector from '@molecules/LabeledSelector';
import { fontSizeGenerator, fontGenerator } from '@utils/data';
import { widthGenerator, heightGenerator } from '@utils/data';
type TSlidingMenuProps = TSlidingModalProps;

const InputBox = ({ visible }: TSlidingMenuProps): ReactElement => {
  const {
    data: { width, height, font, titleFontSize, subTitleFontSize, tagFontSize },
    onChangeHandler,
  } = useData();
  return (
    <SlidingModal visible={visible}>
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
      <Toggle></Toggle>
    </SlidingModal>
  );
};

export default InputBox;
