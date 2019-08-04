import React from 'react';
import styled from 'styled-components';

import { withCalls } from '@polkadot/ui-api/with';
import { Hash } from '@plugnet/types';
import {toHash} from '../utils'
import { Banner } from './types';
import { Json } from '@polkadot/types';

// import withBanners from './withBanners';


const Wrapper = styled.div`
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 333px;
`;


type Props = {
  key: string,
  hash: Hash,
  banner: Banner,
};


const BannerItem = ({ banner }: Props) => {
  if(banner) {
    let obj = banner.toString();
    console.log(obj)
  }
  // let res = JSON.stringify(banner)
    return (
      <Wrapper>
        {123}
      </Wrapper>
    );
};

// export default withKitty(KittyCard) as React.ComponentType<Props>;
export default withCalls<Props>(
  ['query.bannerStorage.banners', { paramName: 'hash', propName: 'banner' }],
)(BannerItem);
