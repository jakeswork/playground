# Playground

## Overview

This is a simple starter to get you up and running for testing packages.

- a lightweight Webpack config (for development and production)
- helpful tooling for development workflow
  - Test setup with Jest and Enzyme
  - leniant linting to promote rapid development over high quality code

## Getting Started

On your **local package**:

```
$ sudo npm link
```

On this playground:

```
$ npm i
$ npm link **local-package-name**
$ npm run dev
```

Once the server is running, you can visit `http://localhost:8080/`

## License

[MIT](LICENSE)
