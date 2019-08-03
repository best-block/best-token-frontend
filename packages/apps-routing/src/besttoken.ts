// Copyright 2017-2019 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from './types';

import Template from '@polkadot/app-best-token';

export default ([
  {
    Component: Template,
    display: {
      needsApi: []
    },
    i18n: {
      defaultValue: 'Best Token'
    },
    icon: 'th',
    name: 'best-token'
  }
] as Routes);
