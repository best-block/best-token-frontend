import { hexToU8a, isHex, stringToU8a } from '@polkadot/util';
import { blake2AsHex } from '@polkadot/util-crypto';
import { H256 } from '@polkadot/types';

export const toHash = (data: string): H256 => {
  const isHexData = isHex(data);
  const hash = blake2AsHex(
    isHexData
      ? hexToU8a(data)
      : stringToU8a(data),
    256
  );

  return new H256(hash);
};
