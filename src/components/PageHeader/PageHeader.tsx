import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export const PageHeader = ({ title }: { title: string }) => (
  <Box mb={4}>
    <Grid container>
      <Grid item>
        <Typography variant="h2" style={{ color: 'white' }}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  </Box>
);
