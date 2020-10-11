import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';

import { sendLogin } from './ducks/Auth.reducer';

// @ts-ignore
export const Auth = ({ sendLogin }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const onSubmit = useCallback(() => {
    sendLogin(form);
  }, [form]);

  // @ts-ignore
  const onChangeField = useCallback(
    ({ currentTarget }) => {
      setForm({ ...form, ...{ [currentTarget.name]: currentTarget.value } });
    },
    [form],
  );

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Card elevation={3}>
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5">Enter, please</Typography>
              </Grid>
              <Grid item>
                <TextField
                  name="username"
                  placeholder="Логин"
                  onChange={onChangeField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  name="password"
                  placeholder="Пароль"
                  onChange={onChangeField}
                  variant="outlined"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button onClick={onSubmit}>Войти</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

const mapDispatchToProps = { sendLogin };

export const AuthConnected = connect(null, mapDispatchToProps)(Auth);
