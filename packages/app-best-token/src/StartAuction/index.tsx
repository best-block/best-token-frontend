// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { Button, TxButton, InputNumber, InputAddress, InputBalance } from '@polkadot/ui-app';
import { toHash } from '../utils';

import { ProductIndex } from './types';

type Props = {
  accountId?: string
};
type State = {
  productId?: ProductIndex,
  price?: BN
};

export default class CreateBid extends React.PureComponent<Props> {
  state: State = {};

  private onSetProductId = (productId?: BN) => {
    this.setState({ productId: productId && new ProductIndex(productId) });
  }

  private onSetPrice = (price?: BN) => {
    this.setState({ price });
  }

  render () {
    const { bannerId, accountId } = this.props;
    const {
      price
    } = this.state;

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
                  label='Create'
                  params={[bannerId, price]}
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
