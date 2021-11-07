import React from 'react';

import Input, { IInputProp } from '@atoms/Input';
import { Story, Meta } from '@storybook/react';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const Template: Story<IInputProp> = (args: IInputProp) => <Input {...args} />;

export const Title = Template.bind({});
Title.args = {
  name: '제목',
  style: { fontSize: 30, borderBottom: '2px solid #5ec59a', width: 280 },
};

export const SubTitle = Template.bind({});
SubTitle.args = {
  name: '부제목',
  style: { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 },
};

export const Tag = Template.bind({});
Tag.args = {
  name: '소제목',
  style: { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 },
};
