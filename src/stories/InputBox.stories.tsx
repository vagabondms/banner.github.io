import React from 'react';

import InputBox from '@organisms/InputBox';
import { Meta } from '@storybook/react';

export default {
  component: InputBox,
  title: 'InputBox',
} as Meta;

const Template = () => <InputBox />;

export const Default = Template.bind({});
