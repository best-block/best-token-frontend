import React from 'react';
import styled from 'styled-components';
import { hexToU8a, isHex, stringToU8a } from '@polkadot/util';

import { withCalls } from '@polkadot/ui-api/with';
import { Hash, H256 } from '@plugnet/types';
import { ApiProps } from '@polkadot/ui-api/types';
import {toHash} from '../utils'
import { Banner } from './types';
import { withApi, withMulti } from '@polkadot/ui-api';


// import withBanners from './withBanners';


const Wrapper = styled.div`
  width: 50%;
`;


type Props = ApiProps & {
  key: string,
  hash: string,
  banner: Banner,
};


const BannerItem = ({ banner, api, hash }: Props) => {

  if(!banner) {
    return null;
  }

  // api.query.bannerStorage.banners(hash).then(data=>{
  //   // console.log(hash)
  //   // console.log(data.toString());
  // });
  // let res = JSON.stringify(banner)
  let obj = banner.toJSON();
  console.log(obj,'==================')
    
    return (
      <Wrapper>
        <img style={{width: '100px', height: '100px'}} src={obj.image_url} alt=""/>
        <div>
          name : {obj.name}
        </div>
        <div>
          desc : {obj.desc}
        </div>
        <div>
          price: {obj.current_price}
        </div>
        <div>
          bider: {obj.current_bidder}
        </div>
      
      </Wrapper>
    );
};


export default withMulti(
  withCalls<Props>(
    ['query.bannerStorage.banners', { paramName: 'hash', propName: 'banner' }],
  )(BannerItem),
  withApi
);
