import React, { forwardRef, useEffect } from 'react';

import BannerBackground from '@atoms/BannerBackground';
import BannerText from '@atoms/BannerText';
import Wrapper from '@atoms/Wrapper';
import { useData } from '@hooks/useDataContext';

const Preview = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    data: { title, subTitle, tag, font, width, height, backgroundColor, fontColor, titleFontSize, subTitleFontSize, tagFontSize },
  } = useData();

  return (
    <Wrapper wrapperType="banner">
      <BannerBackground
        ref={ref}
        style={{
          width: Number(width),
          height: Number(height),
          fontFamily: font,
          backgroundColor,
          color: fontColor,
        }}
      >
        <BannerText
          style={{
            fontSize: Number(titleFontSize),
            borderBottom: subTitle ? `3px solid ${fontColor}` : 'none',
            fontWeight: 'bold',
          }}
        >
          {title}
        </BannerText>
        {subTitle && <BannerText style={{ fontSize: Number(subTitleFontSize), marginTop: 10 }}>{subTitle}</BannerText>}
        {tag && <BannerText style={{ fontSize: Number(tagFontSize), position: 'absolute', bottom: 40 }}>{tag}</BannerText>}
      </BannerBackground>
    </Wrapper>
  );
});
Preview.displayName = 'Preview';

export default Preview;
