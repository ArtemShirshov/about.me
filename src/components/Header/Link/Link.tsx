import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useStyles } from './Link.styled';

export const Link = (props: any) => {
  const classes = useStyles();

  return <RouterLink className={classes.link} {...props} />;
};
