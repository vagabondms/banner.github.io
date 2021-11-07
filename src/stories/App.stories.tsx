import React from 'react';

import { Meta } from '@storybook/react';

import App from '../App';

export default {
  component: App,
  title: 'App',
} as Meta;

const Template = () => <App />;

export const Default = Template.bind({});
