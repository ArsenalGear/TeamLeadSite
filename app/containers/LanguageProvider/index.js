import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

export function LanguageProvider({ selectedLocale, children, messages }) {
  return (
    <IntlProvider
      locale={selectedLocale}
      key={selectedLocale}
      messages={messages[selectedLocale]}
    >
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  selectedLocale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selectedLocale: makeSelectLocale(),
});

const withConnect = connect(mapStateToProps);

export default withConnect(LanguageProvider);
