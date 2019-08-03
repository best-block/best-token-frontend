import { U32, U128, Struct, Option, Tuple, AccountId } from '@polkadot/types';

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
