import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageSetting } from 'components/PageSetting/PageSetting';

import { fetchStatistic, getLoading, getStatistic } from './ducks';

// eslint-disable-next-line react/prop-types
// @ts-ignore
const Home = ({ fetchStatistic, statistic }) => {
  useEffect(() => {
    fetchStatistic();
  }, [fetchStatistic]);

  return (
    <div>
      <PageSetting title="Home" />
      <PageHeader title="Home" />

      <div
        style={{
          width: 50,
          height: 50,
          lineHeight: '50px',
          borderRadius: 5,
          background: 'rgb(179 179 179)',
          color: 'white',
          fontSize: 24,
          textAlign: 'center',
          fontWeight: 600,
        }}
      >
        {statistic.total_posts_written}
      </div>
    </div>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({
  isLoading: getLoading(state),
  statistic: getStatistic(state),
});
const mapDispatchToProps = { fetchStatistic };

export const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);
