import React from 'react';
import styled from 'styled-components';
import { hexToU8a, isHex, stringToU8a } from '@polkadot/util';

import { withCalls } from '@polkadot/ui-api/with';
import { Hash, H256 } from '@plugnet/types';
import { ApiProps } from '@polkadot/ui-api/types';
import {toHash} from '../utils'
import { Banner } from './types';
import { withApi, withMulti } from '@polkadot/ui-api';
import StartAuction from '../StartAuction';
import StartBid from '../StartBid';
import SetImage from '../SetImage';


// import withBanners from './withBanners';


const Wrapper = styled.div`
`;


type Props = ApiProps & {
  key: string,
  hash: string,
  banner: Banner,
  accountId?: string
};


const BannerItem = ({ banner, api, hash, accountId }: Props) => {

  if(!banner) {
    return null;
  }

  // api.query.bannerStorage.banners(hash).then(data=>{
  //   // console.log(hash)
  //   // console.log(data.toString());
  // });
  // let res = JSON.stringify(banner)
  let obj = banner.toJSON();
  console.log(obj,'==================', banner)
  const {
    id,
    name,
    desc,
    image_url: imageUrl,
    can_bid: canBid,
    current_bidder: currentBidder,
    current_price: currentPrice,
  } = banner;
  const isOwner = currentBidder.toHex() === accountId;
  const bannerId = id.toHex();
  const canBidBool = canBid.toJSON();
  return (
    <Wrapper>
      <img style={{width: '100px', height: '100px'}} src={imageUrl.toHex()} alt=""/>
      <div>
        Name: {name.toHex()}
      </div>
      <div>
        Description: {desc.toHex()}
      </div>
      <div>
        Auction Started: {canBidBool ? 'Yes' : 'No'}
      </div>
      {
        canBidBool && <div>
          <div>
            Current Price: {currentPrice.toString()}
          </div>
          <div>
            Current Bidder: {currentBidder.toHex()}
          </div>
        </div>
      }

      {!canBidBool && <StartAuction accountId={accountId} bannerId={bannerId} />}
      {canBidBool && <StartBid accountId={accountId} bannerId={bannerId} />}
      {isOwner && <SetImage accountId={accountId} bannerId={bannerId} />}
    </Wrapper>
  );
};


export default withMulti(
  withCalls<Props>(
    ['query.bannerStorage.banners', { paramName: 'hash', propName: 'banner' }],
  )(BannerItem),
  withApi
);
