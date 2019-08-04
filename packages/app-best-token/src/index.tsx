// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// some types, AppProps for the app and I18nProps to indicate
// translatable strings. Generally the latter is quite "light",
// `t` is inject into props (see the HOC export) and `t('any text')
// does the translation
import { DerivedBalancesMap } from '@polkadot/api-derive/types';
import { AppProps, I18nProps } from '@polkadot/ui-app/types';
import { ApiProps } from '@polkadot/ui-api/types';
import { SubjectInfo } from '@polkadot/ui-keyring/observable/types';
import { ComponentProps } from './types';

// external imports (including those found in the packages/*
// of this repo)
import React from 'react';
import { Route, Switch } from 'react-router';
import Tabs, { TabItem } from '@polkadot/ui-app/Tabs';

// our app-specific styles
import './index.css';

import Banners from './Banners';
import MyBanner from './MyBanner';
import CreateBanner from './CreateBanner';
// local imports and components
import AccountSelector from './AccountSelector';
import SummaryBar from './SummaryBar';
import Transfer from './Transfer';
import translate from './translate';

// define out internal types
type Props = AppProps & ApiProps & I18nProps & {
  allAccounts?: SubjectInfo,
  balances?: DerivedBalancesMap,
  // session_validators?: Array<AccountId>,
  // staking_controllers?: [Array<AccountId>, Array<Option<AccountId>>],
  // staking_recentlyOffline?: RecentlyOffline
};
type State = {
  accountId?: string,
  tabs: Array<TabItem>,
  validators: Array<string>
};

class App extends React.PureComponent<Props, State> {
  state: State;

  constructor (props: Props) {
    super(props);

    const { t } = props;

    this.state = {
      tabs: [
        {
          name: 'Banners',
          text: t('Banners')
        },
        {
          name: 'MyBanners',
          text: t('MyBanners')
        }
      ],
      validators: []
    };
  }


  render () {
    const { accountId, tabs } = this.state;
    const { allAccounts, basePath } = this.props;

    return (
      // in all apps, the main wrapper is setup to allow the padding
      // and margins inside the application. (Just from a consistent pov)

      <main>
        {/* <SummaryBar /> */}
        <AccountSelector onChange={this.onAccountChange} />
        {/* <Transfer accountId={accountId} /> */}
        <CreateBanner accountId={accountId} />

        <header>
          <Tabs
            basePath={basePath}
            // hidden={hidden}
            items={tabs}
          />
        </header>
        <Switch>
          <Route path={`${basePath}/my`} render={this.renderComponent(MyBanner)} />
          <Route render={this.renderComponent(Banners)} />
        </Switch>
      </main>
    );
  }

  private onAccountChange = (accountId?: string): void => {
    this.setState({ accountId });
    console.log(accountId);
  }
  private renderComponent (Component: React.ComponentType<ComponentProps>) {
    return (): React.ReactNode => {
      const { validators, accountId } = this.state;
      const { balances = {} } = this.props;

      return (
        <Component
          balances={balances}
          validators={validators}
          accountId={accountId}
        />
      );
    };
  }
}

export default translate(App);
