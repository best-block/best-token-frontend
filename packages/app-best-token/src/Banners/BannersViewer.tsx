import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/ui-api/with';

// import KittyCard from './KittyCard';
// import OwnedKittyViewer from './OwnedKittyViewer';

const Wrapper = styled.section``;
const MarketsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  marketsCount?: BN,
  accountId?: string
};

const MarketViewer = ({ marketsCount, accountId }: Props) => {
  const count = marketsCount ? marketsCount.toNumber() : 0;
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
          Total markets count: {count}
        </h2>
        <MarketsWrapper>
        { markets }
        </MarketsWrapper>
      </div>
    </Wrapper>
  );
};

export default withCalls<Props>(
  ['query.markets.marketsCount', { propName: 'marketsCount' }]
)(MarketViewer);
