# Setting up the backend documentation

The backend documentation is built using [vitepress](https://vitepress.dev/guide/getting-started).

The backend documentation requires `node 20`.

To run a development version with hot reloads locally, run

```bash
npm install
npm run docs:dev
```

The live version is put online from `docs/.vitepress/dist`. To build and preview, use

```bash
npm run docs:build
npm run docs:preview # builds as well
```

## Configuration and Theme
Configuration of the site (e.g. sidebar, navigation, …) is in `docs/.vitepress/config.js`.
Follow the [vitepress reference](https://vitepress.dev/reference/site-config) for changes to that.

The custom theme is in `docs/.vitepress/theme`.
See the [vitepress guide](https://vitepress.dev/guide/extending-default-theme) for details.

## Deployed version
The documentation is deployed via a GitHub Action in `.github/workflows/deploy-docs.yml` using [GitHub Pages](https://pages.github.com/) on [giscience.github.io/openrouteservice](https://giscience.github.io/openrouteservice/).
