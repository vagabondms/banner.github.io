import React from 'react';

import { Story, Meta } from '@storybook/react';

import InputBox from './InputBox';

export default {
  component: InputBox,
  title: 'Input',
} as Meta;

const Template: Story<any> = () => <InputBox />;

export const Default = Template.bind({});
