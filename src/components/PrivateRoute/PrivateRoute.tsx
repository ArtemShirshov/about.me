import React, { useMemo } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import { Layout } from 'components/Layout/Layout';

interface Props {
  component: React.ComponentType<any>;
  path: string;
}

export const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const isAuthenticated = useMemo((): boolean => {
    return Boolean(Cookies.get('Token'));
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
