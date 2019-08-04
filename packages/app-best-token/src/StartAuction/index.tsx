// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { Button, TxButton, InputNumber, InputAddress, InputBalance } from '@polkadot/ui-app';
import { toHash } from '../utils';
import { U32, U128, Struct, Option, Tuple, AccountId, H256, Vector, Balance, U64, Bool } from '@polkadot/types';


type Props = {
  accountId?: string,
  bannerId?: H256
};
type State = {
  price?: BN
};

export default class CreateBid extends React.PureComponent<Props> {
  state: State = {};

  private onSetPrice = (price?: BN) => {
    this.setState({ price });
  }

  render () {
    const { bannerId, accountId } = this.props;
    const {
      price
    } = this.state;
    console.log('bannerId, price: ', bannerId, price, '------')
    return (
      <section>
        <h1>Best Token Auction Marketplace</h1>

        <div>
          <h2>Start an auction for this banner</h2>
          <div className='ui--row'>
            <div className='large'>
              <InputBalance
                label='Base Price'
                onChange={this.onSetPrice}
              />
              <Button.Group>
                <TxButton
                  accountId={accountId}
                  label='Start Auction'
                  params={[bannerId, price]}
                  tx='banners.auctionBanner'
                />
              </Button.Group>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
