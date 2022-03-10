import React, { ReactElement } from 'react';

import Divider from '@components/Divider';
import LabeledSelector from '@components/LabeledSelector';
import LabeledToggle from '@components/LabeledToggle';
import SlidingModal from '@components/SlidingModal';
import { TSlidingModalProps } from '@components/SlidingModal';
import { useData } from '@hooks/useDataContext';
import { fontSizeGenerator, fontGenerator } from '@utils/data';
import { widthGenerator, heightGenerator } from '@utils/data';

type TSlidingMenuProps = TSlidingModalProps;

const InputBox = ({ visible }: TSlidingMenuProps): ReactElement => {
  const {
    data: { width, height, font, titleFontSize, subTitleFontSize, tagFontSize, underline },
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
      <LabeledToggle name="밑줄 설정" checked={underline} onClick={onChangeHandler('underline')}></LabeledToggle>
    </SlidingModal>
  );
};

export default InputBox;
