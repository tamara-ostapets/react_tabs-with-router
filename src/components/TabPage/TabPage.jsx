import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { TABS } from '../../constants';

export const TabPage = () => {
  const match = useRouteMatch();

  const [selectedTab, setSelectedTab] = useState(null);

  const { tabId } = match.params;

  useEffect(() => {
    setSelectedTab(TABS.find(tab => tab.id === tabId));
  }, [tabId]);

  if (!selectedTab) {
    return (
      <p>Tab is not chosen</p>
    );
  }

  return (
    <p>{selectedTab.content}</p>
  );
};
