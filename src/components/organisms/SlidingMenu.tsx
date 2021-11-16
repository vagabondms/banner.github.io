import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SlidingModal from '@atoms/SlidingModal';
import { TSlidingModalProps } from '@atoms/SlidingModal';
import { useData } from '@hooks/useData';
import LabeledSelector from '@molecules/LabeledSelector';
import { fontSizeGenerator, fontGenerator } from '@utils/data';
import { widthGenerator, heightGenerator } from '@utils/data';
type TSlidingMenuProps = TSlidingModalProps;

const InputBox = ({ visible }: TSlidingMenuProps): ReactElement => {
  const { width, height, font, onFontChange, onWidthChange, onHeightChange } = useData();
  return (
    <SlidingModal visible={visible}>
      <LabeledSelector name="폰트" value={font} onChange={onFontChange} options={fontGenerator()}></LabeledSelector>
      <Divider />
      <LabeledSelector name="제목" value={font} onChange={onFontChange} options={fontSizeGenerator('title')}></LabeledSelector>
      <LabeledSelector
        name="부제목"
        value={font}
        onChange={onFontChange}
        options={fontSizeGenerator('subTitle')}
      ></LabeledSelector>
      <LabeledSelector name="태그" value={font} onChange={onFontChange} options={fontSizeGenerator('tag')}></LabeledSelector>
      <Divider />
      <LabeledSelector options={widthGenerator()} value={width} onChange={onWidthChange} name="배경 넓이"></LabeledSelector>
      <LabeledSelector options={heightGenerator()} value={height} onChange={onHeightChange} name="배경 높이"></LabeledSelector>
    </SlidingModal>
  );
};

export default InputBox;
