import React, { forwardRef } from 'react';

import BannerBackground from '@atoms/BannerBackground';
import BannerText from '@atoms/BannerText';
import Wrapper from '@atoms/Wrapper';
import { useData } from '@hooks/useDataContext';

const Preview = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    data: {
      title,
      subTitle,
      tag,
      font,
      width,
      height,
      backgroundColor,
      fontColor,
      titleFontSize,
      subTitleFontSize,
      tagFontSize,
      underline,
    },
  } = useData();

  return (
    <Wrapper wrapperType="banner">
      <BannerBackground
        ref={ref}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          fontFamily: font,
          backgroundColor,
          color: fontColor,
        }}
      >
        <BannerText
          style={{
            fontSize: `${titleFontSize}px`,
            borderBottom: subTitle && underline ? `3px solid ${fontColor}` : 'none',
            fontWeight: 'bold',
          }}
        >
          {title}
        </BannerText>
        {subTitle && <BannerText style={{ fontSize: `${subTitleFontSize}px`, marginTop: 10 }}>{subTitle}</BannerText>}
        {tag && <BannerText style={{ fontSize: `${tagFontSize}px`, position: 'absolute', bottom: 40 }}>{tag}</BannerText>}
      </BannerBackground>
    </Wrapper>
  );
});
Preview.displayName = 'Preview';

export default Preview;
