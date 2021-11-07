import React from 'react';

import Selector, { ISelectorProps } from '@atoms/Selector';
import { Story, Meta } from '@storybook/react';
import { fontSizeGenerator } from '@utils/data';
export default {
  component: Selector,
  title: 'Selector',
} as Meta;

const Template: Story<ISelectorProps> = (args: ISelectorProps) => <Selector {...args} />;

export const FontSelector = Template.bind({});
FontSelector.args = {
  options: ['font1', 'font2', 'font3', 'font4'],
};

export const FontSizeSelector = Template.bind({});

FontSizeSelector.args = {
  options: fontSizeGenerator(),
};
