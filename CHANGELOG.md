## [3.0.1](https://github.com/zepdev/zeppelin-element-library/compare/v3.0.0...v3.0.1) (2021-02-22)


### Bug Fixes

* **bundle:** fix font path and remove zel.css from root ([0ca8e77](https://github.com/zepdev/zeppelin-element-library/commit/0ca8e77b61ac1a0c986d9cb7876f4314d3ff6344))

# [3.0.0](https://github.com/zepdev/zeppelin-element-library/compare/v2.0.2...v3.0.0) (2020-12-18)


### Bug Fixes

* **assets:** remove unnecessary icons ([f7a0ebf](https://github.com/zepdev/zeppelin-element-library/commit/f7a0ebf2a540c1cfe064d183c14027b2da3438a1))
* **breakpoints:** change px to em in media queries, get sizes from guidelines map ([9c43c28](https://github.com/zepdev/zeppelin-element-library/commit/9c43c28659b4e7019f3b861570010f5118d45bba))
* **button--pagination:** add default selected border-color if no theming is used ([9340835](https://github.com/zepdev/zeppelin-element-library/commit/9340835adcff0197e72fb168278a87286ce8a23e))
* **icons:** add latest icons, adjust icon processing, adjust icon component, replace old icons in element pages ([ed683e3](https://github.com/zepdev/zeppelin-element-library/commit/ed683e35b9c17fcd6813f0d2418543516a288a67))
* **icons:** substract to subtract icon typo ([9af1818](https://github.com/zepdev/zeppelin-element-library/commit/9af1818fba7a2db88320283be9a8af0e59e50d24))
* **input:** adjust label position ([3f1aef8](https://github.com/zepdev/zeppelin-element-library/commit/3f1aef891621e147f3d80c12cb69a7c7f43931c1))
* **notification:** add white background to default ([ecb9997](https://github.com/zepdev/zeppelin-element-library/commit/ecb9997aeae4000518f3e67ac46c0c198f02f189))
* **notification:** use new typography scss, px to rem, edit notificationPage, deprecate --danger modifier ([6ed41d5](https://github.com/zepdev/zeppelin-element-library/commit/6ed41d5ffd3867e8999c6a712a997d812ad460a6))
* **pagination:** fix button themes and icon vertical alignment ([fde474e](https://github.com/zepdev/zeppelin-element-library/commit/fde474e372c469f9097954a570a58ca609665f9b))
* **paginationPage:** fix build error, remove duplicate prop ([31140be](https://github.com/zepdev/zeppelin-element-library/commit/31140becc3d05dd5057f60f0fcdbfd0d2c060dbe))
* **search:** edit input paddings ([7d0a7f6](https://github.com/zepdev/zeppelin-element-library/commit/7d0a7f6b86fbe634102d47627e2479dd4f73b723))
* **select:** resolve text wrap overflow issue from [#129](https://github.com/zepdev/zeppelin-element-library/issues/129) ([be48ce8](https://github.com/zepdev/zeppelin-element-library/commit/be48ce8d528508b6801f1ee4e918509b927147b3))
* **spinnerPage:** remove duplicate props ([61758c2](https://github.com/zepdev/zeppelin-element-library/commit/61758c2827712a1bfb345aba3477fa1806608305))
* **table:** adjust header border-width ([7cf46a7](https://github.com/zepdev/zeppelin-element-library/commit/7cf46a785f5c1f49c0fe98afc37d8fc3bee959a4))
* **typography:** fix and refactor guidelines.json, refactor typography scss for using values from guidelines ([5125d74](https://github.com/zepdev/zeppelin-element-library/commit/5125d74fb3559078573ee131a526ddaf7ba586e4))


### Features

* **assets:** add latest sketch library ([19d0b5f](https://github.com/zepdev/zeppelin-element-library/commit/19d0b5f014061316e76fe49be03fe4fdd756abca))
* **icons:** add simplified location dot and pin to icons ([77683ae](https://github.com/zepdev/zeppelin-element-library/commit/77683aef4e55723b47f1f3a085778ae2ca831853))
* **icons:** add svghandler.sh to automate prefixing, optimization and sprite creation of SVG icons ([dfadb8a](https://github.com/zepdev/zeppelin-element-library/commit/dfadb8abbb6b8aa1662ecfdcf7f8dcb285542819))
* **icons:** change "simplified-dot" and pin to just "dot" and "pin", add colored dot and pin icons ([d884a6e](https://github.com/zepdev/zeppelin-element-library/commit/d884a6e65c2141be49b5ac8a288924af9d52434f))
* **typography:** add new typo classes related to ZDS.Sketch -> Global Textstyles ([9855cd3](https://github.com/zepdev/zeppelin-element-library/commit/9855cd3a932feb171e203113eb1a5f6a89b181b3))


### BREAKING CHANGES

* **typography:** changed typo css class names and its values to the latest ZDS.Sketch Global Textstyles

## [2.0.2](https://github.com/zepdev/zeppelin-element-library/compare/v2.0.1...v2.0.2) (2020-11-11)


### Bug Fixes

* **spinner:** adjust sizes to ZDS icon rules ([8ed0d30](https://github.com/zepdev/zeppelin-element-library/commit/8ed0d302fb73f94f8a8cce965cd4fb7fea4dfd5e))
* **spinner:** adjust sizes to ZDS icon rules ([13e51dc](https://github.com/zepdev/zeppelin-element-library/commit/13e51dcc8ad1f9688558516d18d3f48701fcc3e8))

## [2.0.1](https://github.com/zepdev/zeppelin-element-library/compare/v2.0.0...v2.0.1) (2020-11-06)


### Bug Fixes

* **deployment:** fix bundling and deployment paths ([f74f7ba](https://github.com/zepdev/zeppelin-element-library/commit/f74f7baf857f4f3d7c2280ef480b501cc60d9ab6))

# [2.0.0](https://github.com/zepdev/zeppelin-element-library/compare/v1.3.0...v2.0.0) (2020-11-06)


### Bug Fixes

* **radio, checkbox:** theme color to black new version ([e474aec](https://github.com/zepdev/zeppelin-element-library/commit/e474aecf1ffd98f0d82d1870416b4cf613c25e12))
* **themes:** [#153](https://github.com/zepdev/zeppelin-element-library/issues/153) add text base colors to themes ([8014de4](https://github.com/zepdev/zeppelin-element-library/commit/8014de46cea86b94ec1cd26b02e100e44a5a458d))
* liniting ([4eddc3b](https://github.com/zepdev/zeppelin-element-library/commit/4eddc3b3cadc61b5da838165c497370f2b4e5d84))
* update icon opacity and remove increase font weight on focus ([1914249](https://github.com/zepdev/zeppelin-element-library/commit/1914249754f18ca4d91f1ac8674e093950cf8cbb)), closes [#149](https://github.com/zepdev/zeppelin-element-library/issues/149)
* **all:** clean up files for theme ([673cacb](https://github.com/zepdev/zeppelin-element-library/commit/673cacbe15a11c34d2b41b1942d08579d40e7bb8))
* **all:** resolve conflicts ([6014440](https://github.com/zepdev/zeppelin-element-library/commit/6014440ad5fd3c5a53b8f678029f1b3080e44021))
* **checkbox:** fixed border on active ([91ac193](https://github.com/zepdev/zeppelin-element-library/commit/91ac193aff9a0b90be92ea3e0ba92dfefa3308ed))
* **circleci:** updated node ([eada04e](https://github.com/zepdev/zeppelin-element-library/commit/eada04ed8939dfa9da9f26b943538c2fa291c86a))
* **merge conflicts:** solve conflicts, clean up button related files ([b18cbdd](https://github.com/zepdev/zeppelin-element-library/commit/b18cbddc48a40bb7b1b65afef4fffbeaa3fb9753))
* **numberinput:** add useLayoutEffect hook for ZEL.refresh on page ([ecd9fe8](https://github.com/zepdev/zeppelin-element-library/commit/ecd9fe83a080f1e9ce404b765a225029b2c5c0eb)), closes [#136](https://github.com/zepdev/zeppelin-element-library/issues/136)
* **package.json:** removed temp package ([8c05bf7](https://github.com/zepdev/zeppelin-element-library/commit/8c05bf7910b656dc1ad378f1e7ea8c34f45bf935))
* **push:** fixes were not pushed ([a6470e2](https://github.com/zepdev/zeppelin-element-library/commit/a6470e230b92c36c5e987fc4780b8476d9059108))
* **searchbar:** added different views ([d3b4a9e](https://github.com/zepdev/zeppelin-element-library/commit/d3b4a9ed7064cd6d061e1513eb2dd8bcf3b74e27))
* **typo in lightgray:** missing comma in lightGray colors ([929c77b](https://github.com/zepdev/zeppelin-element-library/commit/929c77baa93e4d4945b05f1a8a49ccc351cbdba3))


### Features

* **loading-spinner:** add spinner, update devDependencies ([ebddd62](https://github.com/zepdev/zeppelin-element-library/commit/ebddd62abcb3299c4dfeb693b9e65e9426731269))
* themify mixin with custom selectors ([3015a35](https://github.com/zepdev/zeppelin-element-library/commit/3015a3593dd6a2bba007cfb6629f7a429d8dc5a9))
* **button:** button styles and colors changed ([d649f8a](https://github.com/zepdev/zeppelin-element-library/commit/d649f8a0aa211e2a74f50cb17683b4d74b48bb45))
* **buttons:** new styles, fix js, fix tests ([9888ac7](https://github.com/zepdev/zeppelin-element-library/commit/9888ac753eaf29e8e6fd4210e62a02aa4f7261a3)), closes [#136](https://github.com/zepdev/zeppelin-element-library/issues/136)
* **checkbox:** new style ([a9f06e4](https://github.com/zepdev/zeppelin-element-library/commit/a9f06e434ab17fe953d2883d04a39c6af81c884d))
* **colors:** guideline colors for fonts changed, updated buttons ([d6d930c](https://github.com/zepdev/zeppelin-element-library/commit/d6d930c94685fab0bb06d82fa011b69a571c011d))
* **radio:** new focus state ([220ff14](https://github.com/zepdev/zeppelin-element-library/commit/220ff14fc7df3ead69e392ce942e129ca4973734))
* **radio:** new styles ([edcd82b](https://github.com/zepdev/zeppelin-element-library/commit/edcd82ba711c94ecc42684a9861a7d9ab53c40f6))


### BREAKING CHANGES

* **button:** color name changes

# [1.3.0](https://github.com/zepdev/zeppelin-element-library/compare/v1.2.1...v1.3.0) (2020-01-24)


### Bug Fixes

* **package.json:** fixed typo in naming ([04d34cb](https://github.com/zepdev/zeppelin-element-library/commit/04d34cbde583a49005869341777a7b9b1a4d5086))


### Features

* **logos:** logos added and guidelines structure changed ([c346cb3](https://github.com/zepdev/zeppelin-element-library/commit/c346cb33575558e0211c8885eb55733ff9b9b7f4))

## [1.2.1](https://github.com/zepdev/zeppelin-element-library/compare/v1.2.0...v1.2.1) (2019-12-20)


### Bug Fixes

* **bundle handler:** missing hash removal from fonts ([c9693b4](https://github.com/zepdev/zeppelin-element-library/commit/c9693b4))

# [1.2.0](https://github.com/zepdev/zeppelin-element-library/compare/v1.1.1...v1.2.0) (2019-12-19)


### Features

* **icons:** 3 new icons for zeppelin.com header ([d6ecd52](https://github.com/zepdev/zeppelin-element-library/commit/d6ecd52)), closes [#121](https://github.com/zepdev/zeppelin-element-library/issues/121)

## [1.1.1](https://github.com/zepdev/zeppelin-element-library/compare/v1.1.0...v1.1.1) (2019-12-18)


### Bug Fixes

* **merge:** merge conflicts ([3b5a848](https://github.com/zepdev/zeppelin-element-library/commit/3b5a848))

# [1.1.0](https://github.com/zepdev/zeppelin-element-library/compare/v1.0.0...v1.1.0) (2019-11-28)


### Bug Fixes

* **colors:** cat color wrong, new zlab seconday, new structure of theme ([456463f](https://github.com/zepdev/zeppelin-element-library/commit/456463f)), closes [#118](https://github.com/zepdev/zeppelin-element-library/issues/118)
* **theme.json:** updated typeface names ([f811741](https://github.com/zepdev/zeppelin-element-library/commit/f811741))


### Features

* **typography:** cleaned up typography in all components ([9a264e9](https://github.com/zepdev/zeppelin-element-library/commit/9a264e9)), closes [#113](https://github.com/zepdev/zeppelin-element-library/issues/113)

# [1.0.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.12.0...v1.0.0) (2019-11-19)


### Features

* **typography:** remove Teko font ([b87f805](https://github.com/zepdev/zeppelin-element-library/commit/b87f805)), closes [#117](https://github.com/zepdev/zeppelin-element-library/issues/117)


### BREAKING CHANGES

* **typography:** new font names

# [0.12.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.11.4...v0.12.0) (2019-08-10)


### Bug Fixes

* **circle ci:** moved cache to v2 ([7866419](https://github.com/zepdev/zeppelin-element-library/commit/7866419))
* **circle ci:** new cache with dummy change in code ([411b1ff](https://github.com/zepdev/zeppelin-element-library/commit/411b1ff))
* **circleci:** force new build ([a3022ef](https://github.com/zepdev/zeppelin-element-library/commit/a3022ef))
* **circleci:** modified version of circle ci so it will not fail ([fc07e0b](https://github.com/zepdev/zeppelin-element-library/commit/fc07e0b))
* **circleci:** new cache ([9639df0](https://github.com/zepdev/zeppelin-element-library/commit/9639df0))
* **circleci:** wrong run command ([665f579](https://github.com/zepdev/zeppelin-element-library/commit/665f579))
* **package.json:** prettier updated ([e50469d](https://github.com/zepdev/zeppelin-element-library/commit/e50469d))
* **react-testing-library:** update dom-testing-library to new name ([1ad8e24](https://github.com/zepdev/zeppelin-element-library/commit/1ad8e24))
* **yarn.lock:** new yarn.lock file ([3d143c5](https://github.com/zepdev/zeppelin-element-library/commit/3d143c5))


### Features

* **theme.json:** corporate colors added to theme.json ([b412273](https://github.com/zepdev/zeppelin-element-library/commit/b412273))

## [0.11.4](https://github.com/zepdev/zeppelin-element-library/compare/v0.11.3...v0.11.4) (2019-05-31)


### Bug Fixes

* **comments:** Fix semantic release ([9d91fc6](https://github.com/zepdev/zeppelin-element-library/commit/9d91fc6))

## [0.11.3](https://github.com/zepdev/zeppelin-element-library/compare/v0.11.2...v0.11.3) (2019-05-31)


### Bug Fixes

* **svg:** add fill to colors for svg ([137374d](https://github.com/zepdev/zeppelin-element-library/commit/137374d))
* **svg:** modify circleci to upload icons folder ([6594610](https://github.com/zepdev/zeppelin-element-library/commit/6594610))

## [0.11.2](https://github.com/zepdev/zeppelin-element-library/compare/v0.11.1...v0.11.2) (2019-05-29)


### Bug Fixes

* **Input:** add error state ([f235334](https://github.com/zepdev/zeppelin-element-library/commit/f235334))

## [0.11.1](https://github.com/zepdev/zeppelin-element-library/compare/v0.11.0...v0.11.1) (2019-05-29)


### Bug Fixes

* **tag:** add button to tag ([34bb793](https://github.com/zepdev/zeppelin-element-library/commit/34bb793))

# [0.11.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.10.0...v0.11.0) (2019-05-28)


### Bug Fixes

* **babel:** add IE9 classes compatibility plugin ([0b579a2](https://github.com/zepdev/zeppelin-element-library/commit/0b579a2))
* **bundlehandler:** fix typo on icon sprite command ([a7a9ae0](https://github.com/zepdev/zeppelin-element-library/commit/a7a9ae0))
* **bundlehandler:** fixed how icons are exported ([b2d06e9](https://github.com/zepdev/zeppelin-element-library/commit/b2d06e9))
* **bundlehandler:** zip sprite files ([55d1ffb](https://github.com/zepdev/zeppelin-element-library/commit/55d1ffb))
* **button:** fix button-icon style for numberinput background-color ([a476d14](https://github.com/zepdev/zeppelin-element-library/commit/a476d14))
* **button:** fix vertical alignment on buttons ([67a164c](https://github.com/zepdev/zeppelin-element-library/commit/67a164c))
* **EventBus:** add a conditional to check HTML document on construct ([d0418db](https://github.com/zepdev/zeppelin-element-library/commit/d0418db))
* **global:** edit js class names, add missing tests ([0105c8f](https://github.com/zepdev/zeppelin-element-library/commit/0105c8f))
* **number input:** fixed icons ([ccd7f33](https://github.com/zepdev/zeppelin-element-library/commit/ccd7f33))
* **number-input:** Improve event listener handling ([0285451](https://github.com/zepdev/zeppelin-element-library/commit/0285451))
* **numberinput:** fix vertical alignment ([63ea095](https://github.com/zepdev/zeppelin-element-library/commit/63ea095))
* **numberInput:** fix max value behavior on init if missing ([c6d4c39](https://github.com/zepdev/zeppelin-element-library/commit/c6d4c39))
* **pagination:** fixed alignment of pagination numbers ([43b80d4](https://github.com/zepdev/zeppelin-element-library/commit/43b80d4))
* **sonar:** Add missing sonar organization argument ([502efbd](https://github.com/zepdev/zeppelin-element-library/commit/502efbd))
* **style:** fix css bug detected by sonarcloud ([764271f](https://github.com/zepdev/zeppelin-element-library/commit/764271f))
* **svg:** fixed svg sprites ([555af91](https://github.com/zepdev/zeppelin-element-library/commit/555af91))
* **test:** fix mock object on zel.js test ([f5d4758](https://github.com/zepdev/zeppelin-element-library/commit/f5d4758))
* **test:** fix name of class import ([e7fd6f3](https://github.com/zepdev/zeppelin-element-library/commit/e7fd6f3))


### Features

* **core:** add js core classes ([dd61ef8](https://github.com/zepdev/zeppelin-element-library/commit/dd61ef8))
* **core:** Add tests for numberinput and constructor ([16825c4](https://github.com/zepdev/zeppelin-element-library/commit/16825c4))
* **core:** Refactoring and tests ([a5b2d89](https://github.com/zepdev/zeppelin-element-library/commit/a5b2d89))
* **core:** WIP javascript integration - create basis ([d6cf486](https://github.com/zepdev/zeppelin-element-library/commit/d6cf486))
* **notification,pagination:** new components addded ([8aecea7](https://github.com/zepdev/zeppelin-element-library/commit/8aecea7))
* **tabs:** initial set up ([0150042](https://github.com/zepdev/zeppelin-element-library/commit/0150042))

# [0.10.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.9.0...v0.10.0) (2019-05-16)


### Bug Fixes

* **assets:** Add back sketch file to library ([d09b753](https://github.com/zepdev/zeppelin-element-library/commit/d09b753))
* **button:** updated disabled style ([487f99e](https://github.com/zepdev/zeppelin-element-library/commit/487f99e))
* **checkbox:** fix IE9 layout ([4cf2cd6](https://github.com/zepdev/zeppelin-element-library/commit/4cf2cd6))
* **checkbox, icon button, tag:** font icon replaced with svg sprite ([d5b19f9](https://github.com/zepdev/zeppelin-element-library/commit/d5b19f9))
* **react-scripts:** update to newest version of zepdev-react-scripts ([e0d2235](https://github.com/zepdev/zeppelin-element-library/commit/e0d2235))
* **search:** active state styling changed ([c4d20e4](https://github.com/zepdev/zeppelin-element-library/commit/c4d20e4))
* **search:** naming follows bem conventions ([47f3284](https://github.com/zepdev/zeppelin-element-library/commit/47f3284))
* **search:** remove search from homepage ([bb517a2](https://github.com/zepdev/zeppelin-element-library/commit/bb517a2))
* **select:** rename list__item to BEM listitem ([40bb4d4](https://github.com/zepdev/zeppelin-element-library/commit/40bb4d4))
* **sidebar:** sidebar searches by key name not title name ([4427699](https://github.com/zepdev/zeppelin-element-library/commit/4427699))
* **table:** table cell algin middle ([70b3538](https://github.com/zepdev/zeppelin-element-library/commit/70b3538))
* **typo prop:** removed invalid prop that was a typo ([597b879](https://github.com/zepdev/zeppelin-element-library/commit/597b879))


### Features

* **search:** styles added for search ([19cb2e0](https://github.com/zepdev/zeppelin-element-library/commit/19cb2e0))
* **select:** set up select ([5c2a9b1](https://github.com/zepdev/zeppelin-element-library/commit/5c2a9b1))
* **table:** created a table element and styling ([cd4ea36](https://github.com/zepdev/zeppelin-element-library/commit/cd4ea36))

# [0.9.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.8.0...v0.9.0) (2019-05-09)


### Bug Fixes

* **button:** fixed width of icon button ([76d2936](https://github.com/zepdev/zeppelin-element-library/commit/76d2936))
* **button:** remove outline from disabled button ([721af59](https://github.com/zepdev/zeppelin-element-library/commit/721af59))
* **circle:** remove npm install from config ([901558d](https://github.com/zepdev/zeppelin-element-library/commit/901558d))
* **input:** floating labels ([2f7c368](https://github.com/zepdev/zeppelin-element-library/commit/2f7c368))
* **input:** IE9 compatibility fix ([a81ac48](https://github.com/zepdev/zeppelin-element-library/commit/a81ac48))
* **input:** Move to es2015 template declaration ([2baabb3](https://github.com/zepdev/zeppelin-element-library/commit/2baabb3))
* **input:** WIP: floating labels ([670cc1d](https://github.com/zepdev/zeppelin-element-library/commit/670cc1d))


### Features

* **input:** Finalize input and label ([cf0214d](https://github.com/zepdev/zeppelin-element-library/commit/cf0214d))
* **tag, input:** all color variations addded for themes ([cde03e4](https://github.com/zepdev/zeppelin-element-library/commit/cde03e4))

# [0.8.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.7.0...v0.8.0) (2019-05-07)


### Bug Fixes

* **button:** change typo on tertiary button ([3dba948](https://github.com/zepdev/zeppelin-element-library/commit/3dba948))
* **button:** focus boxshadow added ([927f2c0](https://github.com/zepdev/zeppelin-element-library/commit/927f2c0))
* **button:** height fixed changed to min-height ([8f7c221](https://github.com/zepdev/zeppelin-element-library/commit/8f7c221))
* **circle ci:** change yarn ([de2a1f9](https://github.com/zepdev/zeppelin-element-library/commit/de2a1f9))
* **circle ci:** force yarn ([64f9791](https://github.com/zepdev/zeppelin-element-library/commit/64f9791))
* **circle ci:** new yarn cache ([ae3c3a0](https://github.com/zepdev/zeppelin-element-library/commit/ae3c3a0))
* **circle ci:** remove cache ([670f31b](https://github.com/zepdev/zeppelin-element-library/commit/670f31b))
* **circle ci:** test ([d03fedc](https://github.com/zepdev/zeppelin-element-library/commit/d03fedc))
* **circle ci:** try npm ([4317635](https://github.com/zepdev/zeppelin-element-library/commit/4317635))
* **circle ci:** typo ([c3ec9fd](https://github.com/zepdev/zeppelin-element-library/commit/c3ec9fd))
* **circle ci:** yarn ([2334b24](https://github.com/zepdev/zeppelin-element-library/commit/2334b24))
* **circleci:** changed cache to v2 ([8d8a4ae](https://github.com/zepdev/zeppelin-element-library/commit/8d8a4ae))
* **circleci:** remove cache ([2b899c4](https://github.com/zepdev/zeppelin-element-library/commit/2b899c4))
* **circleci:** remove node modules cache ([76d52a8](https://github.com/zepdev/zeppelin-element-library/commit/76d52a8))
* **circleci:** removed yarn.lock as test, updated circleci/node ([bd5b174](https://github.com/zepdev/zeppelin-element-library/commit/bd5b174))
* **grid:** changed margins, paddings, added flexbox alignment options ([90f8680](https://github.com/zepdev/zeppelin-element-library/commit/90f8680))
* **grid:** edited breakpoint dependencies ([6168123](https://github.com/zepdev/zeppelin-element-library/commit/6168123))
* **grid:** fixed grid column padding ([b83e0e8](https://github.com/zepdev/zeppelin-element-library/commit/b83e0e8))
* **grid:** fixed grid column padding ([168ac13](https://github.com/zepdev/zeppelin-element-library/commit/168ac13))
* **grid:** fixed percentage width render issue on cols ([98aec79](https://github.com/zepdev/zeppelin-element-library/commit/98aec79))
* **package.json:** update react ([1632371](https://github.com/zepdev/zeppelin-element-library/commit/1632371))
* **package.json:** updated packages ([071b33a](https://github.com/zepdev/zeppelin-element-library/commit/071b33a))
* **typo:** created mixin for typeset ([f3932cc](https://github.com/zepdev/zeppelin-element-library/commit/f3932cc))
* **typo:** new mixin extended to all elements ([c07ffb5](https://github.com/zepdev/zeppelin-element-library/commit/c07ffb5))
* **typo mixin:** fixed if statements ([b956861](https://github.com/zepdev/zeppelin-element-library/commit/b956861))
* **yarn.lock:** new ([4dbb8e6](https://github.com/zepdev/zeppelin-element-library/commit/4dbb8e6))


### Features

* **grid:** added vertical align options ([953e5fe](https://github.com/zepdev/zeppelin-element-library/commit/953e5fe))
* **icon button:** icon button styles added ([7f20905](https://github.com/zepdev/zeppelin-element-library/commit/7f20905))
* **radio:** radio button added ([2bcc566](https://github.com/zepdev/zeppelin-element-library/commit/2bcc566))

# [0.7.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.6.0...v0.7.0) (2019-04-25)


### Bug Fixes

* **checkbox:** fixed disable colors ([2c72c6e](https://github.com/zepdev/zeppelin-element-library/commit/2c72c6e))
* **style:** fixed button disabled styles ([0af8cb5](https://github.com/zepdev/zeppelin-element-library/commit/0af8cb5))
* **style:** fixed iconfont path issues in ([54c5443](https://github.com/zepdev/zeppelin-element-library/commit/54c5443))
* **theme:** Mapped theme.json color objects to sass color maps ([0852bcf](https://github.com/zepdev/zeppelin-element-library/commit/0852bcf))


### Features

* **list:** Attribute and Buttet List Items ([430d30c](https://github.com/zepdev/zeppelin-element-library/commit/430d30c))

# [0.6.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.5.0...v0.6.0) (2019-04-23)


### Bug Fixes

* **checkbox:** integrate new icons ([af838b1](https://github.com/zepdev/zeppelin-element-library/commit/af838b1))
* **checkbox:** styled checkbox according to zeppelin designs ([5084d10](https://github.com/zepdev/zeppelin-element-library/commit/5084d10))
* **CSS:** Isolate icons classes to extra css ([545dc00](https://github.com/zepdev/zeppelin-element-library/commit/545dc00))
* **Input:** Add styles for base input, refactor numberInput ([7b030cb](https://github.com/zepdev/zeppelin-element-library/commit/7b030cb))
* **layout:** fixed grid margins ([bdd90a9](https://github.com/zepdev/zeppelin-element-library/commit/bdd90a9))
* **layout:** grid col calculation ([182cacd](https://github.com/zepdev/zeppelin-element-library/commit/182cacd))
* **NumberInput:** Switch to icon font ([ea8f2e8](https://github.com/zepdev/zeppelin-element-library/commit/ea8f2e8))


### Features

* **checkbox:** basic layout of checkbox added ([e69a739](https://github.com/zepdev/zeppelin-element-library/commit/e69a739))
* **layout:** added basic flexbox grid ([b626321](https://github.com/zepdev/zeppelin-element-library/commit/b626321))
* **layout:** added cards grid ([db68b8c](https://github.com/zepdev/zeppelin-element-library/commit/db68b8c))
* **number-input:** Added new number-input component ([9d069ed](https://github.com/zepdev/zeppelin-element-library/commit/9d069ed))

# [0.5.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.4.5...v0.5.0) (2019-04-16)


### Bug Fixes

* **icons:** uncomment out file to all fonts to be bundled ([977fa65](https://github.com/zepdev/zeppelin-element-library/commit/977fa65))


### Features

* **grid:** started grid, added breakpoints ([d844f1a](https://github.com/zepdev/zeppelin-element-library/commit/d844f1a))
* **theme:** allows for new themes, zeppelin, cat and rental ([4bb94bb](https://github.com/zepdev/zeppelin-element-library/commit/4bb94bb))

## [0.4.5](https://github.com/zepdev/zeppelin-element-library/compare/v0.4.4...v0.4.5) (2019-04-12)


### Bug Fixes

* **bundler:** remove double zepicon naming ([b763376](https://github.com/zepdev/zeppelin-element-library/commit/b763376))

## [0.4.4](https://github.com/zepdev/zeppelin-element-library/compare/v0.4.3...v0.4.4) (2019-04-12)


### Bug Fixes

* **a11y:** added sr-only for icons ([2d1a58f](https://github.com/zepdev/zeppelin-element-library/commit/2d1a58f))
* **rename icons for build:** rename icons for build ([15893ac](https://github.com/zepdev/zeppelin-element-library/commit/15893ac))

## [0.4.3](https://github.com/zepdev/zeppelin-element-library/compare/v0.4.2...v0.4.3) (2019-04-12)


### Bug Fixes

* **bundler:** changed icon naming ([b0ecf3e](https://github.com/zepdev/zeppelin-element-library/commit/b0ecf3e))
* **bundler:** fix icon naming in bundler ([05d14e7](https://github.com/zepdev/zeppelin-element-library/commit/05d14e7))
* **icons:** new icons svg for development use ([1328bfb](https://github.com/zepdev/zeppelin-element-library/commit/1328bfb))

## [0.4.2](https://github.com/zepdev/zeppelin-element-library/compare/v0.4.1...v0.4.2) (2019-04-12)


### Bug Fixes

* **icons:** add back in icons ([7d2302e](https://github.com/zepdev/zeppelin-element-library/commit/7d2302e))

## [0.4.1](https://github.com/zepdev/zeppelin-element-library/compare/v0.4.0...v0.4.1) (2019-04-11)


### Bug Fixes

* **npm:** Updated to react-scripts to minimum dependency ([1311e73](https://github.com/zepdev/zeppelin-element-library/commit/1311e73))

# [0.4.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.3.6...v0.4.0) (2019-04-10)


### Bug Fixes

* **bundle-script:** Removed shell hash removal ([198962c](https://github.com/zepdev/zeppelin-element-library/commit/198962c))
* **Circle:** Added missing filters to the other jobs ([2d82fa0](https://github.com/zepdev/zeppelin-element-library/commit/2d82fa0))
* **Circle:** Added tags filter because of transient dependency ([3dfba30](https://github.com/zepdev/zeppelin-element-library/commit/3dfba30))


### Features

* **tag:** new element added: tag ([3e52fd4](https://github.com/zepdev/zeppelin-element-library/commit/3e52fd4))

## [0.3.6](https://github.com/zepdev/zeppelin-element-library/compare/v0.3.5...v0.3.6) (2019-04-10)


### Bug Fixes

* **Circle:** Changed regex and added missing filter ([f5fe5df](https://github.com/zepdev/zeppelin-element-library/commit/f5fe5df))

## [0.3.5](https://github.com/zepdev/zeppelin-element-library/compare/v0.3.4...v0.3.5) (2019-04-10)


### Bug Fixes

* **Circle:** Added missing filters to the other jobs ([028d4d1](https://github.com/zepdev/zeppelin-element-library/commit/028d4d1))

## [0.3.4](https://github.com/zepdev/zeppelin-element-library/compare/v0.3.3...v0.3.4) (2019-04-10)


### Bug Fixes

* **Circle:** Added tags filter because of transient dependency ([6ed52c2](https://github.com/zepdev/zeppelin-element-library/commit/6ed52c2))

## [0.3.3](https://github.com/zepdev/zeppelin-element-library/compare/v0.3.2...v0.3.3) (2019-04-10)


### Bug Fixes

* **docs:** Fixed the documentation for the release process ([e9e933f](https://github.com/zepdev/zeppelin-element-library/commit/e9e933f))

## [0.3.2](https://github.com/zepdev/zeppelin-element-library/compare/v0.3.1...v0.3.2) (2019-04-10)


### Bug Fixes

* **package.json:** Added missing semantic release config ([c188ef3](https://github.com/zepdev/zeppelin-element-library/commit/c188ef3))
* **semantic:** Reenable semantic release for every commit on master ([b65898d](https://github.com/zepdev/zeppelin-element-library/commit/b65898d))

# [0.3.0](https://github.com/zepdev/zeppelin-element-library/compare/v0.2.4...v0.3.0) (2019-03-28)


### Bug Fixes

* **CDN:** changed assets path for font linking ([d7efbe1](https://github.com/zepdev/zeppelin-element-library/commit/d7efbe1))
* **ci:** Fixed report scan. Added cache for sonar ([60a03ff](https://github.com/zepdev/zeppelin-element-library/commit/60a03ff))
* **docs:** bug fix Zeppelin Logo on README.md is now visible ([98e71b1](https://github.com/zepdev/zeppelin-element-library/commit/98e71b1))
* **styles:** fixed wrong BEM syntax on button and color classes ([4b0ffb2](https://github.com/zepdev/zeppelin-element-library/commit/4b0ffb2))


### Features

* **element:** added basic button element ([a1fae31](https://github.com/zepdev/zeppelin-element-library/commit/a1fae31))
* **themes:** added theme JSON for usage with react ([08a8efe](https://github.com/zepdev/zeppelin-element-library/commit/08a8efe))

## [0.2.4](https://github.com/zepdev/zeppelin-element-library/compare/v0.2.3...v0.2.4) (2019-03-19)


### Bug Fixes

* **ci:** test "skip ci" commit msg ([146630b](https://github.com/zepdev/zeppelin-element-library/commit/146630b))

## [0.2.3](https://github.com/zepdev/zeppelin-element-library/compare/v0.2.2...v0.2.3) (2019-03-15)


### Bug Fixes

* **core:** removed hashes from bundled fonts ([6c19626](https://github.com/zepdev/zeppelin-element-library/commit/6c19626))

# 0.2.2 (2019-03-15)


### Bug Fixes

* **core:** adjusted commitlint config ([1d231cb](https://github.com/zepdev/zeppelin-element-library/commit/1d231cb))
* **core:** adjusted release prepare message ([91c9e4f](https://github.com/zepdev/zeppelin-element-library/commit/91c9e4f))
* **core:** bugfix syntaxerror sed command in bundlehandler.sh ([68b5269](https://github.com/zepdev/zeppelin-element-library/commit/68b5269))
* **core:** bundling process bugfix ([41274ea](https://github.com/zepdev/zeppelin-element-library/commit/41274ea))
* **core:** resolve merge conflicts ([3f1b160](https://github.com/zepdev/zeppelin-element-library/commit/3f1b160))
* **core:** ZDS-202 enabled npmPublish in release step ([2a028d9](https://github.com/zepdev/zeppelin-element-library/commit/2a028d9))
* **zds:** edited circleCI config ([1d86cdc](https://github.com/zepdev/zeppelin-element-library/commit/1d86cdc))
* **zds:** edited circleCI config ([9c2757f](https://github.com/zepdev/zeppelin-element-library/commit/9c2757f))
* **zds:** zds-171 added sonarqube to project ([845be7b](https://github.com/zepdev/zeppelin-element-library/commit/845be7b))
* **zds:** ZDS-171 changed readme.md ([6eafa5a](https://github.com/zepdev/zeppelin-element-library/commit/6eafa5a))
* **zel:** added commitlint and configured it ([16560fc](https://github.com/zepdev/zeppelin-element-library/commit/16560fc))
* **zel:** edited circleci config aws-sync for fonts and package.json ([9bb83f2](https://github.com/zepdev/zeppelin-element-library/commit/9bb83f2))
* **zel:** edited circleci config release task ([c691699](https://github.com/zepdev/zeppelin-element-library/commit/c691699))
* **zel:** update to last orbs version ([ca508b9](https://github.com/zepdev/zeppelin-element-library/commit/ca508b9))
* **zel:** wip semantic-release setup + add to CircleCI config ([4ef3071](https://github.com/zepdev/zeppelin-element-library/commit/4ef3071))
* **zel:** ZDS-207: add badges generation and upload ([090a45a](https://github.com/zepdev/zeppelin-element-library/commit/090a45a))


### Features

* **ZEL:** added commitizen in preparation for semantic-release to automate versioning process. ([adfbdd2](https://github.com/zepdev/zeppelin-element-library/commit/adfbdd2))
