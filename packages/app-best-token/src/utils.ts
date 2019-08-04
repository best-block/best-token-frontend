import { hexToU8a, isHex, stringToU8a } from '@polkadot/util';
import { blake2AsHex } from '@polkadot/util-crypto';

export const toHash = (data: string): string => {
  const isHexData = isHex(data);
  const hash = blake2AsHex(
    isHexData
      ? hexToU8a(data)
      : stringToU8a(data),
    256
  );

  return hash;
};
