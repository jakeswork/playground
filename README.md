# Playground

## Overview

This is a simple starter to get you up and running for testing components.

- a lightweight Webpack config (for development and production)
- helpful tooling for development workflow
  - Test setup with Jest and Enzyme
  - leaniant linting to promote rapid development over high quality code

## Up & Running

On your **local package**:

```
$ sudo npm link
```

On the playground:

```
$ npm i
$ npm link **local-package-name**
$ npm run dev
```

Once the server is running, you can visit `http://localhost:8080/`

## Production Build

To build your production assets and run the server:

```
$ npm run start
```

## License

[MIT](LICENSE)
