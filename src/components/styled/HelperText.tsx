import React, { FC } from 'react';
import { FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';

const HelperTextStyled = styled(FormHelperText)`
  margin: 5px 12px 5px 0;
`;

interface Props {
  helperText: string;
}

export const HelperText: FC<Props> = ({ helperText }) => (
  <HelperTextStyled>{helperText}</HelperTextStyled>
);
