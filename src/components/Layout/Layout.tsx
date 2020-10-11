import React, { Fragment } from 'react';
import { Box, Container } from '@material-ui/core';

import { Header } from 'components/Header/Header';

// @ts-ignore
export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <Container>
        <Box mb={2}>{children}</Box>
      </Container>
    </Fragment>
  );
};
