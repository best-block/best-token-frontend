import BN from 'bn.js';
import { Option, AccountId, Balance } from '@polkadot/types';
import { withCalls } from '@polkadot/ui-api/with';
import { Kitty } from './types';

export type Props = {
  kittyId: BN,
  kitty?: Option<Kitty>,
  owner?: Option<AccountId>,
  price?: Option<Balance>
};

export default withCalls<Props>(
  ['query.banners.banners', { paramName: 'bannerId', propName: 'baner' }],
  // ['query.banners.ownedBannersCount', { paramName: 'accountId', propName: 'owner' }],
  // ['query.banners.kittyPrices', { paramName: 'bannerId', propName: 'price' }]
);
