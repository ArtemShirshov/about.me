import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import queryString, { ParsedQuery } from 'query-string';

import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageSetting } from 'components/PageSetting/PageSetting';

import { PostSkeleton } from './PostSkeleton/PostSkeleton';
import { PostsItem } from './PostsItem/PostsItem';
import {
  startPostsSaga,
  getPostsData,
  getPostsLoading,
  getCategoryTitle,
} from './ducks';

export interface PostType {
  _id: number;
  date: number;
  title: string;
  text: string;
  categories: [{ title: string, _id: string }];
}

interface Props {
  startPostsSaga: (arg?: ParsedQuery<string>) => void;
  posts: [PostType];
  category: any;
  isLoading: boolean;
}

export const Posts = ({
  startPostsSaga,
  posts,
  category,
  isLoading,
}: Props) => {
  const categoryParams = useMemo(() => {
    return queryString.parse(window.location.search);
  }, [window.location.search]);

  const fetchPostWithCategory = useCallback(() => {
    startPostsSaga(categoryParams);
  }, [startPostsSaga, categoryParams]);

  useEffect(() => {
    fetchPostWithCategory();
  }, [fetchPostWithCategory]);

  return (
    <div>
      <PageSetting title={`Posts / ${category}`} />
      <PageHeader title="Posts" separatedTitle={category} />

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
  category: getCategoryTitle(state),
  posts: getPostsData(state),
  isLoading: getPostsLoading(state),
});
const mapDispatchToProps = { startPostsSaga };

export const PostsConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
