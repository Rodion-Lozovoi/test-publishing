import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RadioGroup } from '../src';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {},
  args: {
    name: 'radio-group',
    value: 'option-1',
    label: 'Radio group label',
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' }
    ]
  }
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: 'This is a helper text'
};
