import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageSetting } from 'components/PageSetting/PageSetting';

import { PostSkeleton } from './PostSkeleton/PostSkeleton';
import { PostsItem } from './PostsItem/PostsItem';
import { fetchPosts } from './ducks/Posts.reducer';

export interface PostType {
  _id: number;
  date: number;
  title: string;
  text: string;
  categories: [{ title: string }];
}

interface Props {
  fetchPosts: Function;
  posts: [PostType];
  isLoading: boolean;
}

export const Posts = ({ fetchPosts, posts, isLoading }: Props) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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
            <PostsItem post={item} key={`${item.title} ${item.date}`} />
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
const mapDispatchToProps = { fetchPosts };

export const PostsConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
