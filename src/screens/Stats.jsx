import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { GlobalStats, LastUpdates, Layout, Spinner } from '../components';
import { actions, reducers } from '../state';
import { theme } from '../utils/constants';

const mapState = state => ({
  countries: reducers.selectCountries(state),
  stats: reducers.selectStats(state),
});

const mapDispatch = {
  fetchCountries: actions.fetchCountries,
  fetchStats: actions.fetchStats,
};

const Stats = ({ countries, stats, fetchCountries, fetchStats }) => {
  useEffect(() => {
    fetchCountries();
    fetchStats();
  }, [fetchCountries, fetchStats]);

  if (!stats.data) {
    return <Spinner isFullScreen={true} />;
  }

  const {
    cases: { active, critical, recovered, total },
    country,
    time,
  } = stats.data;

  const statsFormatted = {
    active: {
      color: theme.color.casablanca,
      label: 'Active',
      value: active,
    },
    deaths: {
      color: theme.color.valencia,
      label: 'Deaths',
      value: critical,
    },
    recovered: {
      color: theme.color.raffia,
      label: 'Recovered',
      value: recovered,
    },
    total: {
      color: theme.color.gallery,
      label: 'Total',
      value: total,
    },
  };

  return (
    <Layout>
      <GlobalStats
        country={country}
        countries={countries}
        fetchStats={fetchStats}
        stats={statsFormatted}
      />
      <LastUpdates stats={statsFormatted} time={time} />
    </Layout>
  );
};

export default compose(connect(mapState, mapDispatch))(Stats);
