import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, Grid, TextField } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';

import { Wrapper } from 'components/Wrapper/Wrapper';
import { onChangeForm } from 'utils/formUtils';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageSetting } from 'components/PageSetting/PageSetting';
import { Input } from 'components/Fields/Input';

import { getPostDataLoading } from './ducks/NewPost.selectors';
import { setOpenNewCategoryDialog } from './NewCategoryDialog/ducks/NewCategoryDialog.reducer';
import { NewCategoryDialogConnected } from './NewCategoryDialog/NewCategoryDialog';

import {
  fetchCategories,
  fetchPost,
  sendPost,
  getNewPostCategories,
  getNewPostLoading,
  getPost,
} from './ducks';

interface PropTypes {
  fetchCategories: () => void;
  fetchPost: (arg: string) => void;
  setOpenNewCategoryDialog: (arg: boolean) => void;
  sendPost: (arg: {
    text: string,
    categories: any[],
    title: string,
  }) => void;
  categories: [];
  isLoading: boolean;
  isLoadingPostData: boolean;
}

export const NewPost = ({
  fetchCategories,
  fetchPost,
  sendPost,
  setOpenNewCategoryDialog,
  categories,
  // @ts-ignore
  post,
  // @ts-ignore
  match,
  isLoading,
  isLoadingPostData,
}: PropTypes) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [form, setForm] = useState({
    title: '',
    text: '',
  });

  useEffect(() => {
    setForm(post);
    setSelectedCategories(post.categories);
  }, [post]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (match.params.id) {
      fetchPost(match.params.id);
    }
  }, [match]);

  const onChangeAutocomplete = useCallback((_, values) => {
    setSelectedCategories(values);
  }, []);

  const onChangeField = useCallback(
    (event) => onChangeForm(event, form, setForm),
    [form],
  );

  const onSubmit = useCallback(() => {
    const selectedCategoriesIds = selectedCategories.map(
      (value: { _id: number }) => value._id,
    );

    sendPost({ ...form, categories: selectedCategoriesIds });
  }, [form, selectedCategories]);

  const onOpenNewCategoryDialog = useCallback(() => {
    setOpenNewCategoryDialog(true);
  }, []);

  return (
    <>
      <NewCategoryDialogConnected />
      <PageSetting title="Write, please" />
      <PageHeader title="Write, please" />

      <Wrapper>
        <Grid container spacing={4} direction="column">
          <Grid item>
            <Input
              label="Title"
              name="title"
              onChange={onChangeField}
              value={form.title}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Text"
              name="text"
              variant="outlined"
              rows={10}
              onChange={onChangeField}
              value={form.text}
              multiline
              fullWidth
            />
          </Grid>

          <Grid item>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs={11}>
                <Autocomplete
                  multiple
                  id="tags-standard"
                  options={categories}
                  onChange={onChangeAutocomplete}
                  getOptionLabel={(option: { title: string }) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Категория"
                    />
                  )}
                  loading={isLoadingPostData}
                  value={selectedCategories}
                />
              </Grid>
              <Grid item xs={1}>
                <AddBox onClick={onOpenNewCategoryDialog} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              onClick={onSubmit}
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Добавить
            </Button>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({
  categories: getNewPostCategories(state),
  post: getPost(state),
  isLoading: getNewPostLoading(state),
  isLoadingPostData: getPostDataLoading(state),
});
const mapDispatchToProps = {
  fetchCategories,
  fetchPost,
  sendPost,
  setOpenNewCategoryDialog,
};

export const NewPostConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPost);
