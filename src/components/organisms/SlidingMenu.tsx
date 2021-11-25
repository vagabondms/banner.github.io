import React, { ReactElement, useState } from 'react';

import Divider from '@atoms/Divider';
import SlidingModal from '@atoms/SlidingModal';
import { TSlidingModalProps } from '@atoms/SlidingModal';
import { useData } from '@hooks/useDataContext';
import LabeledSelector from '@molecules/LabeledSelector';
import LabeledToggle from '@molecules/LabeledToggle';
import { fontSizeGenerator, fontGenerator } from '@utils/data';
import { widthGenerator, heightGenerator } from '@utils/data';

type TSlidingMenuProps = TSlidingModalProps;

const InputBox = ({ visible }: TSlidingMenuProps): ReactElement => {
  const {
    data: { width, height, font, titleFontSize, subTitleFontSize, tagFontSize },
    onChangeHandler,
  } = useData();

  const [toggleState, setToggleState] = useState(true);
  const onClickHandler = () => {
    setToggleState((prev) => !prev);
  };
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
      <LabeledToggle name="밑줄 설정" state={toggleState} onClickHandler={onClickHandler}></LabeledToggle>
    </SlidingModal>
  );
};

export default InputBox;
