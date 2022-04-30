module.exports = {
  env: {
    "shared-node-browser": true,
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    mongo: true,
    node: true,
    serviceworker: true,
    worker: true,
  },
  extends: ["react-app"],
  ignorePatterns: ["build", "coverage", "serviceWorkerRegistration.ts", "src"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {},
};
