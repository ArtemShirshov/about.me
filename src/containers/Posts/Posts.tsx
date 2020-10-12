import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import queryString from 'query-string';

import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageSetting } from 'components/PageSetting/PageSetting';

import { PostSkeleton } from './PostSkeleton/PostSkeleton';
import { PostsItem } from './PostsItem/PostsItem';
import { startPostsSaga } from './ducks/Posts.reducer';

export interface PostType {
  _id: number;
  date: number;
  title: string;
  text: string;
  categories: [{ title: string, _id: string }];
}

interface Props {
  startPostsSaga: (arg?: { category: string[] | string | null }) => void;
  posts: [PostType];
  isLoading: boolean;
}

export const Posts = ({ startPostsSaga, posts, isLoading }: Props) => {
  const fetchPostWithCategory = useCallback(() => {
    const { category } = queryString.parse(window.location.search);
    startPostsSaga({ category });
  }, [startPostsSaga, window.location.search]);

  useEffect(() => {
    fetchPostWithCategory();
  }, [fetchPostWithCategory]);

  return (
    <div>
      <PageSetting title="Posts" />
      <PageHeader title="Posts" />

      <Grid container direction="column">
        {isLoading ? (
          <>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </>
        ) : (
          posts.map((item: PostType) => (
            <PostsItem
              post={item}
              key={`${item.title} ${item.date}`}
              fetchPostWithCategory={fetchPostWithCategory}
            />
          ))
        )}
      </Grid>
    </div>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({
  posts: state.Posts.data,
  isLoading: state.Posts.loading,
});
const mapDispatchToProps = { startPostsSaga };

export const PostsConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
