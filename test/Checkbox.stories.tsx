import React from 'react';
import * as ReactDOM from 'react-dom';
import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Checkbox checked label="label" name="name" onChange={() => {}} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
