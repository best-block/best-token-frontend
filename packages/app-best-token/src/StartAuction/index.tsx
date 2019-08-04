// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { Button, TxButton, InputNumber, InputAddress, InputBalance } from '@polkadot/ui-app';

import { ProductIndex } from './types';

type Props = {
  accountId?: string
};
type State = {
  productId?: ProductIndex,
  sellPrice?: BN
};

export default class CreateBid extends React.PureComponent<Props> {
  state: State = {};

  private onSetProductId = (productId?: BN) => {
    this.setState({ productId: productId && new ProductIndex(productId) });
  }

  private onSetSellPrice = (sellPrice?: BN) => {
    this.setState({ sellPrice });
  }

  render () {
    const { accountId } = this.props;
    const {
      productId, sellPrice
    } = this.state;

    return (
      <section>
        <h1>Best Token Auction Marketplace</h1>
        <div>
          <TxButton
            accountId={accountId}
            label='Create New Product'
            params={[]}
            tx='bid.create'
          />
        </div>

        <div>
          <h2>Create an auction</h2>
          <div className='ui--row'>
            <div className='large'>
              <InputNumber
                label='Product ID to bid'
                onChange={this.onSetProductId}
              />
              <InputBalance
                label='Base Price'
                onChange={this.onSetSellPrice}
              />
              <Button.Group>
                <TxButton
                  accountId={accountId}
                  label='Create'
                  params={[productId, sellPrice]}
                  tx='bid.ask'
                />
              </Button.Group>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
