import React from 'react';

import Button, { IButtonProps } from '@atoms/Button';
import { Story, Meta } from '@storybook/react';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

export const Download = Template.bind({});
Download.args = {
  text: 'Download',
};
