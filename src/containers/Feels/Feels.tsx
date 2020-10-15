import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { onChangeForm } from 'utils/formUtils';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageSetting } from 'components/PageSetting/PageSetting';

//
// import {
//   fetchCategories,
//   sendPost,
//   getNewPostCategories,
//   getNewPostLoading,
// } from './ducks';

interface PropTypes {
  // fetchCategories: () => void;
  // setOpenNewCategoryDialog: (arg: boolean) => void;
  // sendPost: (arg: {
  //   text: string,
  //   categories: any[],
  //   title: string,
  // }) => void;
  // categories: [];
  // isLoading: boolean;
}

export const Feels = ({}: PropTypes) => {
  const [form, setForm] = useState({
    title: '',
    text: '',
  });

  useEffect(() => {}, []);

  const onChangeField = useCallback(
    (event) => onChangeForm(event, form, setForm),
    [form],
  );

  const onSubmit = useCallback(() => {
    // sendPost({ ...form, categories: selectedCategories });
  }, [form]);

  return (
    <>
      <PageSetting title="How do you feel?" />
      <PageHeader title="How do you feel?" />

      <Grid container spacing={4} direction="column">
        <Grid item></Grid>
      </Grid>
    </>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export const FeelsConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feels);
