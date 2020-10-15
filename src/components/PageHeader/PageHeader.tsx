import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export const PageHeader = ({
  title,
  separatedTitle,
}: {
  title: string,
  separatedTitle?: string,
}) => (
  <Box mb={4}>
    <Grid container>
      <Grid item>
        <Typography variant="h2" style={{ color: 'white' }}>
          {title}
          {separatedTitle !== '' && (
            <span style={{ color: '#a4a4a4' }}> / {separatedTitle}</span>
          )}
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

PageHeader.defaultProps = {
  separatedTitle: '',
};
