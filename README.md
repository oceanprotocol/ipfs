[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">ipfs</h1>

> 👩🏽‍🚀 Ocean Protocol's public IPFS node & gateway.
> [ipfs.oceanprotocol.com](https://ipfs.oceanprotocol.com)

[![Build Status](https://flat.badgen.net/travis/oceanprotocol/ipfs?icon=travis)](https://travis-ci.com/oceanprotocol/ipfs)
[![Now deployment](https://flat.badgen.net/badge/now/auto-deployment/21c4dd?icon=now)](https://zeit.co/oceanprotocol/ipfs)
[![js oceanprotocol](https://flat.badgen.net/badge/js/oceanprotocol/7b1173)](https://github.com/oceanprotocol/eslint-config-oceanprotocol) [![Greenkeeper badge](https://badges.greenkeeper.io/oceanprotocol/ipfs.svg)](https://greenkeeper.io/)

This repo holds a simple React app built with [Next.js](https://nextjs.org) serving as the frontpage of [ipfs.oceanprotocol.com](https://ipfs.oceanprotocol.com) from where you can add files to IPFS via drag and drop.

General IPFS integration within the Ocean Protocol stack is outlined in [OEP-15: Distributed Asset File Storage with IPFS](https://github.com/oceanprotocol/OEPs/tree/master/15).

<img width="1308" alt="Screen Shot 2019-10-16 at 17 25 08" src="https://user-images.githubusercontent.com/90316/66933885-f8d4ab80-f039-11e9-846e-91e549c2dbd2.png">

---

- [Development](#development)
- [Production](#production)
- [Deployment](#deployment)
  - [Manual Deployment](#manual-deployment)
- [Authors](#authors)
- [License](#license)

---

## Development

```bash
npm i
npm start
```

Will start a live-reloading local server, reachable under [localhost:3000](http://localhost:3000).

## Production

To create a production build, run from the root of the project:

```bash
npm run build
```

Outputs to `./public`.

## Deployment

Every branch is automatically deployed to [Now](https://zeit.co/now) with their GitHub integration. A link to a deployment will appear under each Pull Request.

The latest deployment of the `master` branch is automatically aliased to `ipfs.oceanprotocol.now.sh`.

### Manual Deployment

If needed, app can be deployed manually. Make sure to switch to Ocean Protocol org before deploying:

```bash
# first run
now login
now switch

# deploy
now
# switch alias to new deployment
now alias
```

## Authors

- Matthias Kretschmann ([@kremalicious](https://github.com/kremalicious)) - [Ocean Protocol](https://oceanprotocol.com)

## License

```
Copyright 2018 Ocean Protocol Foundation Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
