import React from 'react';
import { Box, Grid } from '@material-ui/core';

import { Link } from 'components/Header/Link/Link';

export const Header = () => (
  <Box mt={4} mb={4}>
    <Grid container justify="center">
      <Grid item style={{ padding: 15 }}>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item style={{ padding: 15 }}>
        <Link to="/posts">Posts</Link>
      </Grid>
      <Grid item style={{ padding: 15 }}>
        <Link to="/new-post">New Posts</Link>
      </Grid>
      <Grid item style={{ padding: 15 }}>
        <Link to="/new-feels">New Feels</Link>
      </Grid>
      <Grid item style={{ padding: 15 }}>
        <Link to="/settings">Settings</Link>
      </Grid>
    </Grid>
  </Box>
);
