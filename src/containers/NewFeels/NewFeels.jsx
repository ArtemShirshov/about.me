import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import { Wrapper } from 'components/Wrapper/Wrapper';
import { onChangeForm } from 'utils/formUtils';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageSetting } from 'components/PageSetting/PageSetting';

import {
  fetchMemories,
  fetchMemoriesActivity,
  getLoading,
  sendFeels,
} from './ducks';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

// eslint-disable-next-line react/prop-types
function IconContainer({ value, ...other }) {
  return <span {...other}>{customIcons[value].icon}</span>;
}

// eslint-disable-next-line react/prop-types
const NewFeels = ({
  fetchMemoriesActivity,
  fetchMemories,
  sendFeels,
  isLoading,
}) => {
  const [ratingValue, setRatingValue] = useState(0);
  const [form, setForm] = useState({
    text: '',
  });

  useEffect(() => {
    fetchMemoriesActivity();
    fetchMemories();
  }, []);

  const onChangeField = useCallback(
    (event) => onChangeForm(event, form, setForm),
    [form],
  );

  const onSubmit = useCallback(() => {
    sendFeels({ ...form, rating: ratingValue });
  }, [form, ratingValue]);

  return (
    <>
      <PageSetting title="How do you feel?" />
      <PageHeader title="How do you feel?" />

      <Wrapper>
        <Grid container spacing={4} direction="column">
          <Grid item>
            <Rating
              size="large"
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer}
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
            <Button
              onClick={onSubmit}
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getLoading(state),
});
const mapDispatchToProps = { fetchMemoriesActivity, sendFeels, fetchMemories };

export const NewFeelsConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewFeels);
