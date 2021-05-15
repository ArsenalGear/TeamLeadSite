import React from 'react';
import { Switch, Route, withRouter, Router } from 'react-router-dom';
import { HomePage } from '../containers/HomePage';
import history from '../utils/history';

const Routes = () => {
  const returnMainRoutes = () => (
    <Router history={history}>
      <Switch>
        {/* eslint-disable-next-line react/no-children-prop */}
        <Route path="/" children={<HomePage />} />
        {/* <Route exact path="*" component={ToHome} /> */}
      </Switch>
    </Router>
  );

  return <> {returnMainRoutes()} </>;
};
withRouter(Routes);

export { Routes };
