// Copyright 2017-2019 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { DerivedBalancesMap } from '@polkadot/api-derive/types';
import { AccountId, BlockNumber } from '@polkadot/types';


export type ComponentProps = {
  balances: DerivedBalancesMap,
  validators: Array<string>,
  accountId?: string,
};


export type AccountFilter = 'all' | 'controller' | 'session' | 'stash' | 'unbonded';

export type ValidatorFilter = 'all' | 'hasNominators' | 'noNominators' | 'hasWarnings' | 'noWarnings' | 'iNominated';
