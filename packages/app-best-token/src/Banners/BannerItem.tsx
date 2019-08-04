import React from 'react';
import styled from 'styled-components';

import { withCalls } from '@polkadot/ui-api/with';
import { Hash, H256} from '@plugnet/types';
import {toHash} from '../utils';

import Item from './Item';

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
  index: number,
  key: number,
  hash: string,
};


const BannerItem = ({ index, hash }: Props) => {
    return (
      <Wrapper>
        <Item key={hash} hash={new H256(toHash(hash))} />
      </Wrapper>
    );
};

// export default withKitty(KittyCard) as React.ComponentType<Props>;
export default withCalls<Props>(
  ['query.bannerStorage.allBannersArray', { paramName: 'index', propName: 'hash' }],
)(BannerItem);
