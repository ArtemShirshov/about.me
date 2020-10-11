import React, { useState, useMemo } from 'react';
import { Box, Chip, Grid, Typography } from '@material-ui/core';

import { MonthMap } from 'constants/MonthMap';

import { PostType } from '../Posts';
import { PostsActionsConnected } from './PostActions';
import { useStyles } from './PostItem.styled';

export const PostsItem = ({ post }: { post: PostType }) => {
  const classes = useStyles();
  const [isHoverPostsItem, setHover] = useState(false);

  const date = useMemo(() => {
    const d = new Date(post.date);

    return `${d.getDate()} ${MonthMap[d.getMonth()]} ${d.getFullYear()}`;
  }, [post]);

  return (
    <Grid
      item
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classes.wrapper}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h4">{post.title}</Typography>
        </Grid>
        <Grid item>
          <PostsActionsConnected id={post._id} isShow={isHoverPostsItem} />
        </Grid>
      </Grid>

      <Box mb={2}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: '#818181', fontSize: 14 }}
            >
              {date}
            </Typography>
          </Grid>

          {post.categories.map((item) => (
            <Grid key={item.title} item>
              <Chip
                key={item.title}
                label={item.title}
                variant="outlined"
                size="small"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: post.text }}
        component="pre"
        style={{ whiteSpace: 'pre-wrap' }}
      />
    </Grid>
  );
};
