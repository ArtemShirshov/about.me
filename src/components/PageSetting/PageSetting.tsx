import React from 'react';
import { Helmet } from 'react-helmet';

interface PropTypes {
  title: string;
}

export const PageSetting = ({ title }: PropTypes) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
  </Helmet>
);
