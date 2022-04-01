export class Data {
  title: string;

  subTitle: string;

  tag: string;

  height: number;

  width: number;

  font: string;

  fontColor: string;

  backgroundColor: string;

  titleFontSize: number;

  subTitleFontSize: number;

  tagFontSize: number;

  underline: boolean;

  constructor() {
    this.title = '';
    this.subTitle = '';
    this.tag = '';
    this.height = 0;
    this.width = 0;
    this.font = '';
    this.fontColor = '';
    this.backgroundColor = '';
    this.titleFontSize = 0;
    this.subTitleFontSize = 0;
    this.tagFontSize = 0;
    this.underline = true;
  }
}

export type InputValues = 'title' | 'subtitle' | 'tag';
export type SelectValues = 'height' | 'width' | 'titleFontSize' | 'subTitleFontSize' | 'tagFontSize' | 'font';
export type ColorValues = 'fontColor' | 'backgroundColor';
