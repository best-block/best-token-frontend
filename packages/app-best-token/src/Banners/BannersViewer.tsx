import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/ui-api/with';
import {Banners} from './types';
// import KittyCard from './KittyCard';
// import OwnedKittyViewer from './OwnedKittyViewer';

const Wrapper = styled.section``;
const MarketsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  bannersCount?: BN,
  accountId?: string,
  banners: Banners[],
};

const BannersViewer = ({ bannersCount, accountId, banners }: Props) => {
  debugger
  const count = bannersCount ? bannersCount.toNumber() : 0;
  const markets = [];
  for (let i = 0; i < count; ++i) {
    markets.push(<div>123</div>);
  }
  return (
    <Wrapper>
      <h1>my product</h1>
      {/* <OwnedKittyViewer key={accountId} accountId={accountId} /> */}
      <div>
        <h2>
          Total banner count: {count}
        </h2>
        <MarketsWrapper>
        { markets }
        </MarketsWrapper>
      </div>
    </Wrapper>
  );
};

export default withCalls<Props>(
  ['query.bannerStorage.allBannersCount', { propName: 'bannersCount' }],
  ['query.bannerStorage.banner', { propName: 'banners' }]
)(BannersViewer);
