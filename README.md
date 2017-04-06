## kickable

**kickable** is a microservice built to answer the age old question, "Can I Kick It?"

|: NPM   |: Builds |:  Coverage |: Vulnerabilities |
| ------------- | ------------- | ------------- | ------------- |
| <a href="http://npmjs.com/package/kickable"><img src="https://img.shields.io/npm/v/kickable.svg" alt="npm version"></a>  | <a href="https://travis-ci.org/defstream/kickable"><img src="https://img.shields.io/travis/defstream/kickable.svg" alt="build status"></a> | <a href="https://codecov.io/github/defstream/kickable"><img src="https://img.shields.io/codecov/c/github/defstream/kickable.svg" alt="coverage"></a> | <a href="https://snyk.io/test/github/defstream/kickable"><img src="https://snyk.io/test/github/defstream/kickable/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/defstream/kickable"></a> |
|  <a href="http://npm-stat.com/charts.html?package=kickable"><img src="https://img.shields.io/npm/dm/kickable.svg" alt="downloads"></a> | <a href="https://circleci.com/gh/defstream/kickable"><img src="https://img.shields.io/circleci/project/defstream/kickable.svg" alt="build status"></a>  | <a href='https://coveralls.io/github/defstream/kickable?branch=master'><img src='https://coveralls.io/repos/github/defstream/kickable/badge.svg?branch=master' alt='Coverage Status' /></a>
|<a href="https://gemnasium.com/defstream/kickable"><img src="https://img.shields.io/gemnasium/defstream/kickable.svg" alt="Gemnasium"></a> | | | |

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

### What's next?
- Case Insensitivity
- Support for configuring kickable items other than `it`.
- Return true if the item is known to be a kickable noun, ie. ball, wall, door; otherwise false ( sky, feelings, comments )"

### Discuss
[![Join the chat at https://gitter.im/kickable/Lobby](https://badges.gitter.im/kickable/Lobby.svg)](https://gitter.im/kickable/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


  

  

  

**Builds**

  

  

**Coverage**

  

  


**Vulnerabilities**

  


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