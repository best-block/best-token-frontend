import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { AddressMini, TxButton } from '@polkadot/ui-app';
import { u8aToHex, formatBalance } from '@polkadot/util';
import { Option, Balance } from '@polkadot/types';
import { withCalls } from '@polkadot/ui-api/with';
import { Hash } from '@plugnet/types';

// import withBanners from './withBanners';


const Wrapper = styled.div`
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 333px;
`;



const Line = styled.div`
  height: 2px;
  background: #eee;
  margin: 10px -10px;
`;

type Props = {
  accountId?: string,
  index: number,
  key: string,
  hash: Hash,
};


const BannerItem = ({ index, accountId, hash }: Props) => {
    return (
      <Wrapper>
        <div>
          {hash}
        </div>
      </Wrapper>
    );
};

// export default withKitty(KittyCard) as React.ComponentType<Props>;
export default withCalls<Props>(
  ['query.bannerStorage.allBannersArray', { paramName: 'index', propName: 'hash' }],
)(BannerItem);
