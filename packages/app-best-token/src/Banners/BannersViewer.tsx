import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/ui-api/with';
import {Banners} from './types';
import BannerItem from './BannerItem';
// import OwnedKittyViewer from './OwnedKittyViewer';

const Wrapper = styled.section``;
const MarketsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  bannersCount?: BN,
  ownedBannersCount?: BN,
  accountId?: string,
  banners: Banners[],
  bannersArray: Banners[],
};

const BannersViewer = ({ bannersCount, accountId, ownedBannersCount, bannersArray }: Props) => {
  debugger
  const count = bannersCount ? bannersCount.toNumber() : 0;
  // const ownedCount = ownedBannersCount ? ownedBannersCount.toNumber() : 0;
  const banners = [];

  console.log(bannersArray,'-----------');

  for (let i = 0; i < count; ++i) {
    banners.push(<BannerItem key={i} index={i} ></BannerItem>);
  }

  for (let i = 0; i < count; ++i) {
    banners.push(<div>123</div>);
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
        { banners }
        </MarketsWrapper>
      </div>
    </Wrapper>
  );
};

export default withCalls<Props>(
  ['query.bannerStorage.allBannersCount', { propName: 'bannersCount' }],
  ['query.bannerStorage.ownedBannerCount', { propName: 'ownedBannersCount' }],
)(BannersViewer);
