# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.1.8-unstable.0 (2021-02-14)

**Note:** Version bump only for package jsonld-checker





## [0.1.5-unstable.0](https://github.com/gjgd/jsonld-checker/compare/v0.1.4...v0.1.5-unstable.0) (2021-02-14)


### Bug Fixes

* enable cors for api ([6a2ad12](https://github.com/gjgd/jsonld-checker/commit/6a2ad121ff6f7593ad2d71a6334b1c08f166439c))
* update examples ([7651904](https://github.com/gjgd/jsonld-checker/commit/7651904cdbe56e5c0e9fb2887ea4a1cae9aab1f0))
* use regex to determine if url is github domain ([60b88e8](https://github.com/gjgd/jsonld-checker/commit/60b88e86dd166bcdb486baf3da94f04df86efe34)), closes [#45](https://github.com/gjgd/jsonld-checker/issues/45)


### Features

* add boilerplate express api ([a51cba4](https://github.com/gjgd/jsonld-checker/commit/a51cba4e7936ae73ed159edd22f71a8e8489bd91))
* add db package ([536e3a9](https://github.com/gjgd/jsonld-checker/commit/536e3a90c9a71f8b84ab2c11b69d16e6f70833ca))
* add endpoint for getting a json from id ([322c12d](https://github.com/gjgd/jsonld-checker/commit/322c12d33908a0dd5df7cfbb7270f46e3adcb860))
* add endpoint to save a json under a uuid ([1ca83f4](https://github.com/gjgd/jsonld-checker/commit/1ca83f4e772142886dbc768699fc762674367b50))
* add jsonld file type ([6cc96da](https://github.com/gjgd/jsonld-checker/commit/6cc96da9d6f23e8f9ca14f539753e902c773758d)), closes [#40](https://github.com/gjgd/jsonld-checker/issues/40)
* add loading ([0e46d4e](https://github.com/gjgd/jsonld-checker/commit/0e46d4ee3a11285ab751919fed43e216130e9ea2))
* add serverless config for deploying app to AWS ([76512b9](https://github.com/gjgd/jsonld-checker/commit/76512b9adcbbf0a1af2c11b78883eb87ece6821d))
* add support for getting a json by id ([cd113ec](https://github.com/gjgd/jsonld-checker/commit/cd113ec139c22fcb71108b2df1a766066e77e2d6))
* add support for saving a large json ([e39b5b0](https://github.com/gjgd/jsonld-checker/commit/e39b5b0ec043025954ce6aa9ed2010baa084ebc1))
* consume jsonid value after use ([f14b853](https://github.com/gjgd/jsonld-checker/commit/f14b8537019bafbbc67948eabc2b385ed2b67d12))
* expand cors whitelist ([090f512](https://github.com/gjgd/jsonld-checker/commit/090f512c8f6060efa126c931f2ae2cb7e77dc4f0))
* fix default url in url page ([3011599](https://github.com/gjgd/jsonld-checker/commit/3011599a03b5ee4289817b8f1cd2e95c1fb4a81a))
* remove analyze query param ([d31e3f0](https://github.com/gjgd/jsonld-checker/commit/d31e3f0aeca13c73d1734c7d4f56f53eef4a69ac))
* support github link ([577117e](https://github.com/gjgd/jsonld-checker/commit/577117eb7c91fdd361209af79db37fcb7ebed705)), closes [#38](https://github.com/gjgd/jsonld-checker/issues/38)
* switching tabs resets query parameters ([7bccd4a](https://github.com/gjgd/jsonld-checker/commit/7bccd4a193cbae182392127ff86f5c37d32337b8))
* use API_URL env variable ([d339093](https://github.com/gjgd/jsonld-checker/commit/d3390938d21e10d394988fe363b85b8f7aac5aac))
* use localStorage to remember data ([275d7ad](https://github.com/gjgd/jsonld-checker/commit/275d7ad826a45841cece30b5e5791e13d87371a8))


### Reverts

* Revert "chore: fix dot-prop dependencies" ([c1d7854](https://github.com/gjgd/jsonld-checker/commit/c1d78540c3f58b831a808bce809448c7019d3a36))





## [0.1.4](https://github.com/gjgd/jsonld-checker/compare/v0.1.3...v0.1.4) (2020-08-19)


### Bug Fixes

* fix import path in test ([11f49d5](https://github.com/gjgd/jsonld-checker/commit/11f49d50408197fbd1120189dc867128c1548597))
* jsonld test ([9a9fcb0](https://github.com/gjgd/jsonld-checker/commit/9a9fcb0bff951887503df2434735dcd8cf46e038))
* react hook lint warning ([a5950e2](https://github.com/gjgd/jsonld-checker/commit/a5950e2ba977988a90c3d745beefb754e206a686))
* table header ([fdbf048](https://github.com/gjgd/jsonld-checker/commit/fdbf048dff64a154277d162a1a32303ee1963fb9))
* use username and reponame from url ([36bbdd7](https://github.com/gjgd/jsonld-checker/commit/36bbdd7a3c090335cf65306f06e0932b871a19f1))


### Features

* add documentLoader as an optional argument of check ([952fbde](https://github.com/gjgd/jsonld-checker/commit/952fbde8ba44629c2387a42e072e613757f98727))
* add inspect button in file tab ([7e89ca7](https://github.com/gjgd/jsonld-checker/commit/7e89ca718a597f14fa895a2a776b75e2986f392b))
* check all html files by default ([d619ac1](https://github.com/gjgd/jsonld-checker/commit/d619ac17240b766eabce2d44b928997ff60069ed))





## [0.1.3](https://github.com/gjgd/jsonld-checker/compare/v0.1.2...v0.1.3) (2020-07-08)


### Bug Fixes

* fileState ([2c20420](https://github.com/gjgd/jsonld-checker/commit/2c204207f8157fd61c2fde8a46b75ac41a1dc8be))
* recreate tiny url everytime ([570ae6e](https://github.com/gjgd/jsonld-checker/commit/570ae6ebd0ee8731fdb804f89bbcb70aeabbde71))


### Features

* add analyze query param in file tab ([52505f9](https://github.com/gjgd/jsonld-checker/commit/52505f90d8009c4c14486349699561e200a45e9a))
* add analyze query parameter ([441ed08](https://github.com/gjgd/jsonld-checker/commit/441ed081ef694a79d9ea0ad532f688abfb7e8294))
* add check repo button ([7bda467](https://github.com/gjgd/jsonld-checker/commit/7bda467c8b61b1e043f4a4aebe47f103c106036f))
* add checkRepoTab ([098cf03](https://github.com/gjgd/jsonld-checker/commit/098cf03d2cf9f277a6640efb31714cf06fa115f0))
* add file filters ([c26a86d](https://github.com/gjgd/jsonld-checker/commit/c26a86d5a022a1a35f250807d771dd87da50f4ad))
* add files table (wip) ([26a4266](https://github.com/gjgd/jsonld-checker/commit/26a4266b1baf3dab790b72e5a455e6978e8b205f))
* add getFiles functions to list files in a github repo ([ac00958](https://github.com/gjgd/jsonld-checker/commit/ac0095834315888ab4a9a4d6a14108ca1e36a7c7))
* add loader to check button in file tab ([cf53760](https://github.com/gjgd/jsonld-checker/commit/cf53760cfc7f8e4df0a6fa8135b33a26330990bb))
* add loader to share button ([eb8845a](https://github.com/gjgd/jsonld-checker/commit/eb8845aa02843e134097bf06a2dba7f27baaf8c9))
* add popover in Sharebutton ([1d25e93](https://github.com/gjgd/jsonld-checker/commit/1d25e93a35d63fa86d63c8f3c471d79cb1e9ff92))
* add rawUrl column ([eb6beaa](https://github.com/gjgd/jsonld-checker/commit/eb6beaa6bbd86d110a711d8fbed3f931c0f59e91))
* add Share button ([756d8ea](https://github.com/gjgd/jsonld-checker/commit/756d8ea6428a7edc944669971030e5a9a7867a4f))
* add tiny url in ShareButton ([908742e](https://github.com/gjgd/jsonld-checker/commit/908742e32e43ccb411d819b020866771ee1f7198))
* add two way binding for analyze ([6a1f555](https://github.com/gjgd/jsonld-checker/commit/6a1f55556026ce8fe457fb07b179cb2dee2e0624))
* add two way binding with tab query param ([e3b6a77](https://github.com/gjgd/jsonld-checker/commit/e3b6a772c28b5c0a439644d317c5a966a90bb34d))
* add two way data binding for json ([4cdf90b](https://github.com/gjgd/jsonld-checker/commit/4cdf90b8de5bbef7862ecdd1420f83fef1116e2d))
* add valid Icon ([8a3fa40](https://github.com/gjgd/jsonld-checker/commit/8a3fa40ef6afa63c7c8ddb44590394df306bf2c4))
* display files in table ([a610457](https://github.com/gjgd/jsonld-checker/commit/a610457cb9ce536dba72644017e414eaf86cc9e5))
* display json in uri ([745f6fc](https://github.com/gjgd/jsonld-checker/commit/745f6fcab6b224ca0854ee4c837080268a7b6234))
* link to check file url ([d62a983](https://github.com/gjgd/jsonld-checker/commit/d62a9835d2c90e0e6ca3ec6a7acaa5e0922d718f))
* two way binding between url and input ([04701d7](https://github.com/gjgd/jsonld-checker/commit/04701d7a4fbdf5fd60d66cfb5e888c6512b8db37))
* use query string to point to a tab ([8da1151](https://github.com/gjgd/jsonld-checker/commit/8da1151a695755de4e4c397b4b3d01965b79db2a))


### Reverts

* Revert "ci: trigger deploy" ([07a1278](https://github.com/gjgd/jsonld-checker/commit/07a127899fbdae24293daf47cb06343f31bce509))





## [0.1.2](https://github.com/gjgd/jsonld-checker/compare/v0.1.1...v0.1.2) (2020-06-27)


### Features

* add "Open in JSON-LD playground" button ([0ed04b0](https://github.com/gjgd/jsonld-checker/commit/0ed04b05b474dbf1f055afee6fa95a91c274b2ce))
* add CheckJsonButton component that has a loader ([9b2ced2](https://github.com/gjgd/jsonld-checker/commit/9b2ced22d08b40aa418e2d85ca7eaeede936fecd))
* filter out non jsonld properties ([46ab8b5](https://github.com/gjgd/jsonld-checker/commit/46ab8b525595292f375c219dc819255167962f0e))
* log current git commit ([4fe7e72](https://github.com/gjgd/jsonld-checker/commit/4fe7e7203fc6b37ea9ab0ff5a5829cea4b735fc6))
* update CSS in json tab ([b0ddb6a](https://github.com/gjgd/jsonld-checker/commit/b0ddb6aff7d4d5cecbf12e3bd25f45af739cf365))
