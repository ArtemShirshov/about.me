import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  wrapper: {
    borderRadius: 5,
    boxShadow: '0 8px 18px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0.05)',
    padding: '16px 24px',
    marginBottom: 48,
    background: 'white',
  },
});

export const Wrapper = ({ children }: { children: any }) => {
  const classes = useStyles();

  return React.createElement('div', { className: classes.wrapper }, children);
};
