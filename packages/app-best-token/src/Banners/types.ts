import { U32, U128, Struct, Option, Tuple, AccountId, H256, Vector, Balance, U64, Bool } from '@polkadot/types';

export class Kitty extends U128 {
  get dna (): Uint8Array {
    return this.toU8a();
  }
}

export class Banner extends Struct {
  constructor (value: any) {
        super({
          id: Option.with(H256),
          name: Option.with(Vector),
          desc: Option.with(Vector),
          image_url: Option.with(Vector),
          current_price: Option.with(Balance),
          current_bidder: Option.with(U64),
          can_bid: Option.with(Bool),
          bid_end_height: Option.with(U64),
        }, value);
      }

  // get dna (): Uint8Array {
  //   return this.toU8a();
  // }
}



// export class KittyIndex extends U32 {
// }

// export class KittyLinkedItem extends Struct {
//   constructor (value: any) {
//     super({
//       prev: Option.with(KittyIndex),
//       next: Option.with(KittyIndex)
//     }, value);
//   }

//   get prev (): Option<KittyIndex> {
//     return this.get('prev') as Option<KittyIndex>;
//   }

//   get next (): Option<KittyIndex> {
//     return this.get('next') as Option<KittyIndex>;
//   }
// }

// export class OwnedKittiesKey extends Tuple.with([AccountId, Option.with(KittyIndex)]) {
//   get account (): AccountId {
//     return this[0] as AccountId;
//   }

//   get kittyId (): Option<KittyIndex> {
//     return this[1] as Option<KittyIndex>;
//   }
// }
