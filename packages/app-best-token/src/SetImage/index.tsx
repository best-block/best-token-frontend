// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { Button, TxButton, InputNumber, Input, InputBalance } from '@polkadot/ui-app';
import { toHash } from '../utils';
import { U32, U128, Struct, Option, Tuple, AccountId, H256, Vector, Balance, U64, Bool } from '@polkadot/types';

type Props = {
  accountId: string,
  bannerId: H256
};
type State = {
  imageHash: string
};

export default class SetImage extends React.PureComponent<Props> {
  state: State = {};

  private onSetImage = (value: string) => {
    this.setState({ imageHash: toHash(value) });
  }

  render () {
    const { bannerId, accountId } = this.props;
    const {
      imageHash
    } = this.state;
    console.log('accountId, bannerId, imageHash: ', accountId, bannerId, imageHash, '------')
    return (
      <section>
        <h1>Best Token Auction Marketplace</h1>

        <div>
          <h2>Set image Url for you banner</h2>
          <div className='ui--row'>
            <div className='large'>
              <Input
                label='Your image url'
                onChange={this.onSetImage}
              />
              <Button.Group>
                <TxButton
                  accountId={accountId}
                  label='Confirm'
                  params={[bannerId, imageHash]}
                  tx='banners.setImageUrl'
                />
              </Button.Group>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
