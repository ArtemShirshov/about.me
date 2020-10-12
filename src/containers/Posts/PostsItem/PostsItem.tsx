import React, { useState, useMemo, useCallback } from 'react';
import { Box, Chip, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { MonthMap } from 'constants/MonthMap';

import { PostType } from '../Posts';
import { PostsActionsConnected } from './PostActions';
import { useStyles } from './PostItem.styled';

interface PropsType {
  post: PostType;
  fetchPostWithCategory: () => void;
}

export const PostsItem = ({ post, fetchPostWithCategory }: PropsType) => {
  const classes = useStyles();
  const [isHoverPostsItem, setHover] = useState(false);

  const date = useMemo(() => {
    const d = new Date(post.date);

    return `${d.getDate()} ${MonthMap[d.getMonth()]} ${d.getFullYear()}`;
  }, [post]);

  const onClickCategory = useCallback(() => {
    fetchPostWithCategory();
  }, [fetchPostWithCategory]);

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
            <Grid key={`${item.title} ${post._id}`} item>
              <Link
                to={`/posts?category=${item._id}`}
                onClick={onClickCategory}
              >
                <Chip
                  key={item.title}
                  label={item.title}
                  variant="outlined"
                  size="small"
                />
              </Link>
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
