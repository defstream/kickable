## kickable

**kickable** is a microservice built to answer the age old question, "Can I Kick It?"

#### What is a kickable?
Currently only the word "it" is kickable.

| NPM | Build | Coverage | Vulnerabilities |
| :--- | :--- | :--- | :--- |
| <a href="http://npmjs.com/package/kickable"><img src="https://img.shields.io/npm/v/kickable.svg" alt="npm version"></a> | <a href="https://github.com/defstream/kickable/actions/workflows/ci.yml"><img src="https://github.com/defstream/kickable/actions/workflows/ci.yml/badge.svg" alt="CI"></a> | <a href="https://codecov.io/github/defstream/kickable"><img src="https://img.shields.io/codecov/c/github/defstream/kickable.svg" alt="coverage"></a> | <a href="https://snyk.io/test/github/defstream/kickable"><img src="https://snyk.io/test/github/defstream/kickable/badge.svg" alt="Known Vulnerabilities"></a> |
| <a href="http://npm-stat.com/charts.html?package=kickable"><img src="https://img.shields.io/npm/dm/kickable.svg" alt="downloads"></a> | | <a href='https://coveralls.io/github/defstream/kickable?branch=master'><img src='https://coveralls.io/repos/github/defstream/kickable/badge.svg?branch=master' alt='Coverage Status' /></a> | |

# Requirements

**Node.js 22+**

# Usage

```shell
$ npm ci
$ npm run build
$ npm start
```

The service listens on port `3000` by default. Set the `PORT` environment variable to override:

```shell
$ PORT=8080 npm start
```

# Development

#### Type check

```shell
$ npm run typecheck
```

#### Lint

```shell
$ npm run lint
```

#### Build

```shell
$ npm run build
```

#### Test

```shell
$ npm test
```

#### Coverage

```shell
$ npm run test:coverage
```

# API

### `GET /healthz`

Returns `200 OK`. Used by load balancers and orchestrators to verify liveness.

### `GET /kick/:it`

Returns `true` if `:it` is kickable, otherwise `false`.

**Example:**

```shell
$ curl http://localhost:3000/kick/it
true

$ curl http://localhost:3000/kick/sky
false
```

### What's next?
- Case insensitivity
- Support for configuring kickable items other than `it`
- Return true if the item is a known kickable noun (ball, wall, door); otherwise false (sky, feelings, comments)

### Maintainers
Hector Gray (Twitter: <a href="https://twitter.com/defstream">@defstream</a>)

### Contribute
Pull Requests welcome. Please make sure all checks pass:

```shell
$ npm run typecheck
$ npm run lint
$ npm test
```

Please submit <a href="https://github.com/defstream/kickable/issues">Github issues</a> for any feature enhancements, bugs or documentation problems.

### License
MIT
