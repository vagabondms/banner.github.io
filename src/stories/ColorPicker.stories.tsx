import React from 'react';

import ColorPicker from '@atoms/ColorPicker';
import { Meta } from '@storybook/react';

export default {
  component: ColorPicker,
  title: 'ColorPicker',
} as Meta;

const Template = () => <ColorPicker name="default" />;

export const Default = Template.bind({});
