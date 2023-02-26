import React, { ChangeEvent, FC } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@mui/material';

import { HelperText } from './styled/HelperText';

interface Option {
  label: string;
  value: string;
}

interface Props {
  /**
   * name of the radio group. Usually used to register the input in a form.
   */
  name: string;
  /**
   * Options of the radio group.
   */
  options: Option[];
  /**
   * Value of the radio group. Defines which radio button is selected.
   */
  value: string;
  /**
   * Label of the radio group.
   */
  label: string;
  /**
   * Helper text to display under the radio group.
   */
  helperText?: string;
  /**
   * Callback function to be called when the radio group is changed.
   * @param event
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const RadioGroup: FC<Props> = ({
  options,
  name,
  value,
  label,
  helperText,
  onChange,
}) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <MuiRadioGroup value={value} onChange={onChange} name={name}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          label={option.label}
          value={option.value}
          control={
            <Radio color="success" data-testid={`${option.value}-radio`} />
          }
        />
      ))}
    </MuiRadioGroup>
    {helperText && <HelperText helperText={helperText} />}
  </FormControl>
);
