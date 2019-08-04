// Copyright 2017-2019 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type AccountFilter = 'all' | 'controller' | 'session' | 'stash' | 'unbonded';

export type ValidatorFilter = 'all' | 'hasNominators' | 'noNominators' | 'hasWarnings' | 'noWarnings' | 'iNominated';
import { U32, U128, Struct, Option, Tuple, AccountId } from '@polkadot/types';
import { DerivedBalancesMap } from '@polkadot/api-derive/types';

export class Product extends U128 {
  get id (): Uint8Array {
    return this.toU8a();
  }
}

export class ProductIndex extends U32 {
}

export class ProductLinkedItem extends Struct {
  constructor (value: any) {
    super({
      prev: Option.with(ProductIndex),
      next: Option.with(ProductIndex)
    }, value);
  }

  get prev (): Option<ProductIndex> {
    return this.get('prev') as Option<ProductIndex>;
  }

  get next (): Option<ProductIndex> {
    return this.get('next') as Option<ProductIndex>;
  }
}

export class OwnedProductssKey extends Tuple.with([AccountId, Option.with(ProductIndex)]) {
  get account (): AccountId {
    return this[0] as AccountId;
  }

  get kittyId (): Option<ProductIndex> {
    return this[1] as Option<ProductIndex>;
  }
}




export type ComponentProps = {
  balances: DerivedBalancesMap,
  validators: Array<string>,
  accountId?: string,
};
