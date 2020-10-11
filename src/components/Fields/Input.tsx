import React from 'react';
import { TextField } from '@material-ui/core';

interface PropTypes {
  onChange: (event: object) => void;
  label: string;
  name: string;
  margin?: 'none' | 'dense' | 'normal';
  autoFocus?: boolean;
  value?: any;
}

export const Input = ({
  onChange,
  label,
  name,
  value,
  margin,
  autoFocus,
}: PropTypes) => (
  <TextField
    margin={margin}
    autoFocus={autoFocus}
    label={label}
    name={name}
    variant="outlined"
    onChange={onChange}
    value={value}
    fullWidth
  />
);
