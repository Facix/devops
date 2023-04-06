# Devops

This is the temporary repo for ci/cd and project structure. Main features are :

1. Workflows Github
2. Project Structure
3. Jest
4. Storybook

## Getting started

### Start project

```shell
$ yarn dev
```

#### Enjoy

Go on http://localhost:3000/

### Jest

```shell
yarn test
```

### StoryBook

Take a look https://storybook.facix.localhost (not implemented yet)

```shell
$ yarn storybook
```

#### Enjoy

Go on http://localhost:3001/

### ESLint in VSCode

To have ESLint errors and warnings in VS code, you need to use the [`dbaeumer.vscode-eslint`](https://github.com/Microsoft/vscode-eslint) extension.

The simplest way is to add this configuration in the VSCode workspace settings:

If you already have a `//.vscode/settings.json` file, just add this into it: `"eslint.workingDirectories": ["./"]` and `"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }`

If you did not have have a `//.vscode/settings.json` file, create it with this content:

```json
{
  "eslint.workingDirectories": ["./"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
