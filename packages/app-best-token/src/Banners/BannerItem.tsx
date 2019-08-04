import React from 'react';
import styled from 'styled-components';

import { withCalls } from '@polkadot/ui-api/with';
import { ApiProps } from '@polkadot/ui-api/types';
import { Hash, H256} from '@plugnet/types';
import {toHash} from '../utils';
import { withApi, withMulti } from '@polkadot/ui-api';

import Item from './Item';

// import withBanners from './withBanners';


const Wrapper = styled.div`
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 100%;
  max-width: 900px;
`;

const Line = styled.div`
  height: 2px;
  background: #eee;
  margin: 10px -10px;
`;

type Props = ApiProps & {
  index: number,
  key: number,
  hash: H256,
  accountId?: string
};


const BannerItem = ({ index, hash, api, accountId }: Props) => {
  // let queryHash = api.query.bannerStorage.allBannersArray(index).then(res=>{
  //   console.log(res.toString(), '-----------+++++')
  // })
  // console.log(hash, '++++')
  if(!hash) return null;
    return (
      <Wrapper>
        <Item key={hash} hash={hash.toString()} accountId={accountId} />
      </Wrapper>
    );
};



export default withMulti(
  withCalls<Props>(
    ['query.bannerStorage.allBannersArray', { paramName: 'index', propName: 'hash' }],
  )(BannerItem),
  withApi
);
