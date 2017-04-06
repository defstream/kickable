## kickable

<p align="center">
  <a href="http://npmjs.com/package/kickable"><img src="https://img.shields.io/npm/v/kickable.svg"
     alt="npm version"></a>

  <a href="https://gemnasium.com/defstream/kickable"><img src="https://img.shields.io/gemnasium/defstream/kickable.svg"
       alt="Gemnasium"></a>

  <a href="https://travis-ci.org/defstream/kickable"><img src="https://img.shields.io/travis/defstream/kickable.svg"
       alt="build status"></a>

  <a href="https://circleci.com/gh/defstream/kickable"><img src="https://img.shields.io/circleci/project/defstream/kickable.svg"
       alt="coverage"></a>

  <a href="https://codecov.io/github/defstream/kickable"><img src="https://img.shields.io/codecov/c/github/defstream/kickable.svg"
    alt="coverage"></a>

  <a href='https://coveralls.io/github/defstream/kickable?branch=master'><img   src='https://coveralls.io/repos/github/defstream/kickable/badge.svg?branch=master' alt='Coverage' /></a>

  <a href="https://snyk.io/test/npm/kickable"><img src="https://snyk.io/test/npm/kickable/badge.svg" alt="Known Vulnerabilities"></a>

  <a href="http://npm-stat.com/charts.html?package=kickable"><img src="https://img.shields.io/npm/dm/kickable.svg" alt="downloads"></a>

</p>

<p align="center">
  <a href="https://gitter.im/defstream/kickable"><img src="https://img.shields.io/gitter/room/defstream/kickable.svg"
     alt="Chat"></a>
</p>

**kickable** is a microservice built to answer the age old question, "Can I Kick It?"

#### What is a kickable?
Currently only the word "it" is kickable. 

# Installation

```shell
$ npm install kickable --save
```

#### Build Documentation
Outputs code documentation files to the `./doc/api` folder.

```shell
$ npm run doc
```

#### Static Analysis
Outputs static analysis files to the `./doc/analysis` folder.

```shell
$ npm run analyze
```

#### Test + Coverage
Outputs code coverage files to the `./doc/coverage` folder.

```shell
$ npm run test
```

**CURRENT COVERAGE REPORT**

![codecov.io](https://codecov.io/github/defstream/kickable/branch.svg?branch=master)

# API

### `api.kick(it)`

Returns true if the string `it` is determined to be kickable. 

**parameters:**
- **it**            {String}    The value to determine as kickable

**returns**: {Bool} true if `it` is determined to be kickable, otherwise false.

### vNext
- Case Insensitivity
- Support for configuring kickable items other than `it`.
- Return true if the item is known to be a kickable noun, ie. ball, wall, door; otherwise false ( sky, feelings, comments )"

### Discuss
+[![Join the chat at https://gitter.im/kickable/Lobby](https://badges.gitter.im/kickable/Lobby.svg)](https://gitter.im/kickable/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)



Questions or comments can also be posted on the kickable Github issues page.

### Maintainers
Hector Gray (Twitter: <a href="https://twitter.com/defstream">@defstream</a>)

### Contribute
Pull Requests welcome. Please make sure all tests pass:

```shell
$ npm test
```

Please submit <a href="https://github.com/defstream/kickable/issues">Github issues</a> for any feature enhancements, bugs or documentation problems.

### License
MIT