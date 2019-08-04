// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { Button, TxButton, InputNumber, InputAddress, Input, InputBalance } from '@polkadot/ui-app';

import { U32, U128, Struct, Option, Tuple, AccountId, H256, Vector, Balance, U64, Bool } from '@polkadot/types';

import { toHash } from '../utils';

type Props = {
  accountId?: string
};

type State = {
  nameHash: string,
  urlHash: string,
  descHash: string,
};

export default class CreateBid extends React.PureComponent<Props> {
  state: State = {};

  private onSetName = (value: string) => {
    const hash = toHash(value);
    this.setState({ nameHash: hash });
    console.log('name: ', value, hash);
  }

  private onSetUrl = (value: string) => {
    const hash = toHash(value);
    this.setState({ urlHash: hash });
    console.log('url: ', value, hash);
  }

  private onSetDesc = (value: string) => {
    const hash = toHash(value);
    this.setState({ descHash: hash });
    console.log('desc: ', value, hash);
  }


  render () {
    const { accountId } = this.props;
    const {
      nameHash, urlHash, descHash
    } = this.state;

    return (
      <section>
        <h1>Best Token Auction Marketplace</h1>

        <div>
          <h2>Create a Banner</h2>
          <div className='ui--row'>
            <div className='large'>
              <Input
                label='Name'
                onChange={this.onSetName}
              />
              <Input
                label='Url'
                onChange={this.onSetUrl}
              />
              <Input
                label='Desc'
                onChange={this.onSetDesc}
              />
              <Button.Group>
                <TxButton
                  accountId={accountId}
                  label='Create Banner'
                  params={[nameHash, urlHash, descHash]}
                  tx='banners.createBanner'
                />
              </Button.Group>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
