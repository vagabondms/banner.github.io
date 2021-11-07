import React from 'react';

import BackgroundBox from '@organisms/BackgroundBox';
import { Meta } from '@storybook/react';

export default {
  component: BackgroundBox,
  title: 'BackgroundBox',
} as Meta;

const Template = () => <BackgroundBox />;

export const Default = Template.bind({});
