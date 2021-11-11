import React from 'react';

import Selector, { ISelectorProps } from '@atoms/Selector';
import { Story, Meta } from '@storybook/react';

export default {
  component: Selector,
  title: 'Selector',
} as Meta;

const Template: Story<ISelectorProps> = (args: ISelectorProps) => <Selector {...args} />;

export const FontSelector = Template.bind({});
FontSelector.args = {
  options: ['font1', 'font2', 'font3', 'font4'],
};
