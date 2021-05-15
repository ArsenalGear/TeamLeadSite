import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';
import azLocale from 'date-fns/locale/az';

import { makeSelectLocale } from '../LanguageProvider/selectors';

const localeMap = {
  en: enLocale,
  az: azLocale,
  ru: ruLocale,
};

export function PickersUtilsProvider({ selectedLocale, children }) {
  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      locale={localeMap[selectedLocale]}
    >
      {React.Children.only(children)}
    </MuiPickersUtilsProvider>
  );
}

PickersUtilsProvider.propTypes = {
  children: PropTypes.element.isRequired,
  selectedLocale: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  selectedLocale: makeSelectLocale(),
});

const withConnect = connect(mapStateToProps);

export default withConnect(PickersUtilsProvider);
