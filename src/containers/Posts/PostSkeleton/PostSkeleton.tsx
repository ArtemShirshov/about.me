import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

export const PostSkeleton = () => (
  <Grid item>
    <Box mb={2}>
      <Skeleton variant="text" height={50} />
    </Box>

    <Box mb={2}>
      <Grid container spacing={2}>
        <Grid item>
          <Skeleton variant="text" width={100} />
        </Grid>
        <Grid item>
          <Skeleton variant="text" width={100} />
        </Grid>
        <Grid item>
          <Skeleton variant="text" width={100} />
        </Grid>
      </Grid>
    </Box>

    <Skeleton variant="rect" height={118} />
  </Grid>
);
