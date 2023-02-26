import React, { ChangeEvent, FC } from 'react';
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from '@mui/material';

import { HelperText } from './styled/HelperText';

interface Props {
  /**
   * Name of the checkbox. Usually used to register the input in a form.
   */
  name: string;
  /**
   * Whether the checkbox is checked or not.
   */
  checked: boolean;
  /**
   * Label of the checkbox.
   */
  label: string;
  /**
   * Whether the checkbox is invalid or not.
   */
  invalid?: boolean;
  /**
   * Error message to display when the checkbox is invalid.
   */
  errorMessage?: string;
  /**
   * Callback function to be called when the checkbox is changed.
   * @param event
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = ({
  name,
  checked = false,
  label,
  onChange,
  invalid,
  errorMessage,
}) => (
  <FormControl error={invalid}>
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          name={name}
          onChange={onChange}
          data-testid={`${name}-checkbox`}
          color="success"
        />
      }
      label={label}
    />
    {errorMessage && <HelperText helperText={errorMessage} />}
  </FormControl>
);
