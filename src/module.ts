import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'
import type {
  Options as MarkdownItOptions,
  PluginSimple,
} from 'markdown-it'
import defu from 'defu'
import { fileURLToPath } from 'url'

export interface ModuleOptions {
  /**
   * HTML tag name for the component.
   * 
   * @default 'div'
   */
  as: string
  /**
   * Component's default name.
   * 
   * @default 'NuxtMarkdown'
   */
  componentName: string
  options: MarkdownItOptions
  plugins: PluginSimple[]
  /**
   * @default false
   */
  global?: boolean | 'sync'
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-markdown-render',
    configKey: 'nuxtMarkdownRender'
  },
  defaults: {
    as: 'div',
    componentName: 'NuxtMarkdown',
    options: {},
    plugins: []
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.runtimeConfig.public.nuxtMarkdownRender = defu(
      nuxt.options.runtimeConfig.public.nuxtMarkdownRender,
      {
        as: options.as,
        options: options.options,
        plugins: options.plugins
      }
    )

    addComponent({
      name: options.componentName,
      filePath: resolve(runtimeDir, 'components', 'nuxt-markdown.vue'),
      global: options.global
    })
  }
})

declare module '@nuxt/schema' {
  interface NuxtOptions {
    nuxtMarkdownRender?: ModuleOptions;
    runtimeConfig: {
      public: {
        nuxtMarkdownRender: ModuleOptions;
      };
    };
  }
}
