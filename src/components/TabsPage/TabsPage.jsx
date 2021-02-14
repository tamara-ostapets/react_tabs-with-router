import React from 'react';
import { withRouter, Route, NavLink } from 'react-router-dom';
import { TABS } from '../../constants';
import { TabPage } from '../TabPage';

export const TabsPage = withRouter(
  ({ match }) => (
    <>
      <div className="Tabs">
        {TABS.map(tab => (
          <NavLink
            style={{ marginRight: '20px' }}
            className="Tabs__button"
            type="button"
            key={tab.id}
            to={`${match.path}${tab.id}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <Route path="/tabs/:tabId">
        <TabPage />
      </Route>
    </>
  ),
);
