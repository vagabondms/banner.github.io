import React from 'react';

import FontBox from '@organisms/FontBox';
import { Meta } from '@storybook/react';

export default {
  component: FontBox,
  title: 'FontBox',
} as Meta;

const Template = () => <FontBox />;

export const Default = Template.bind({});
