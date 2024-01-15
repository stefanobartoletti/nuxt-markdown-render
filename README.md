<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: nuxt-markdown-render
- Description: My new Nuxt module
-->

# nuxt-markdown-render

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Much inspired by [vue-markdown-render](https://github.com/cloudacy/vue-markdown-render), this Nuxt module is a simple and lightweight wrapper for [markdown-it](https://markdown-it.github.io/) with full TypeScript support.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- TODO: following links -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/sandros94/nuxt-markdown-render?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ✨ &nbsp;Ease of use
- 🧩 &nbsp;Extensible via markdown-it plugins
- 🎨 &nbsp;Customizable (both via `runtimeConfig` as well as via `props`)
- 📘 &nbsp;TypeScript support

## How to use it

```vue
<template>
  <div>
    <NuxtMarkdown :source="md" />
  </div>
</template>

<script setup>
const md = `
# Hello Nuxt!

Welcome to the example of [nuxt-markdown-render](https://github.com/sandros94/nuxt-markdown-render).`
</script>

```

## Quick Setup

1. Add `nuxt-markdown-render` dependency to your project
    ```bash
    # Using pnpm
    pnpm add -D nuxt-markdown-render
    
    # Using yarn
    yarn add --dev nuxt-markdown-render
    
    # Using npm
    npm install --save-dev nuxt-markdown-render
    ```

2. Add `nuxt-markdown-render` to the `modules` section of `nuxt.config.ts`
    ```ts
    export default defineNuxtConfig({
      modules: [
        'nuxt-markdown-render'
      ]
    })
    ```

3. Customize your defaults via `nuxt-markdown-render` inside your `nuxt.config.ts`
    ```ts
    import pluginMdc from 'markdown-it-mdc'

    export default defineNuxtConfig({
      modules: [
        'nuxt-markdown-render'
      ],
    
      nuxtMarkdownRender: {
        as: 'article',
        options: {
          html: true
        },
        plugins: ['pluginMdc'],
        global: true
      }
    })
    ```
    This will do the following:
    - render them as [`article`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) HTML tags.
    - enable [HTML tags in source](https://markdown-it.github.io/markdown-it/#MarkdownIt.new).
    - load the [markdown-it-mdc](https://github.com/antfu/markdown-it-mdc) plugin.
    - mark the `NuxtMarkdown` component [`global`](https://nuxt.com/docs/guide/directory-structure/components#dynamic-components).

That's it! You can now use nuxt-markdown-render in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
pnpm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-markdown-render/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-markdown-render

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-markdown-render.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-markdown-render

[license-src]: https://img.shields.io/npm/l/nuxt-markdown-render.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-markdown-render

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
