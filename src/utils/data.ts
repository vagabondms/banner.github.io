import { TOptions } from '@atoms/Selector';

export const fontGenerator = (): TOptions => {
  return [
    { label: 'Noto-sans', value: 'Noto-sans' },
    { label: '고운돋움', value: 'GowunDodum-Regular' },
    { label: 'G마켓 Sans M', value: 'GmarketSansMedium' },
    { label: '여기어때 잘난체', value: 'yg-jalnan' },
    { label: '리디 바탕', value: 'RIDIBatang' },
    { label: '배민 한나체', value: 'BMHANNAPro' },
    { label: '원스토어 고딕', value: 'ONE-Mobile-Title' },
    { label: '나눔 바른펜', value: 'NanumBarunpen' },
    { label: '한글 누리체', value: 'HangeulNuri-Bold' },
  ];
};

export const widthGenerator = (): TOptions => {
  const result = [];
  for (let i = 600; i <= 1000; i += 50) {
    result.push({
      label: i,
      value: i,
    });
  }
  return result;
};

export const heightGenerator = (): TOptions => {
  const result = [];
  for (let i = 250; i <= 400; i += 50) {
    result.push({
      label: i,
      value: i,
    });
  }
  return result;
};

type TFontType = 'title' | 'subTitle' | 'tag';

export const fontSizeGenerator = (fontType: TFontType): TOptions => {
  const getDiffSize = (type: TFontType) => {
    switch (type) {
      case 'title':
        return 0;
      case 'subTitle':
        return 30;
      case 'tag':
        return 30;
    }
  };

  const diffSize = getDiffSize(fontType);
  const result = [];
  for (let i = 40 - diffSize; i <= 80 - diffSize; i += 5) {
    result.push({
      label: i,
      value: i,
    });
  }
  return result;
};
