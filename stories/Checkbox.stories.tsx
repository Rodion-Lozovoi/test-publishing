import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from '../src';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
  args: {
    name: 'checkbox',
    label: 'Checkbox label'
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;
export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  errorMessage: 'This is an error message'
};
