export default {
    dev: process.env.NODE_ENV !== 'production',

    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'server',

    ssr: true,
    srcDir: 'src',
    buildDir: 'dist',

    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        titleTemplate: 'Fullstack Web Page',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'Fullstack web Page'
            }
        ]
    },

    /*
    ** Global CSS
    */
    css: [
        '~/assets/vendors',
        '~/assets/theme'
    ],

    /*
     * Bootstrap Vue
     */
    bootstrapVue: {
        bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false // Or `bvCSS: false`
    },

    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [],

    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxt/typescript-build'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
    ],

    /*
    ** Server Middleware
    */
    serverMiddleware: [
        '~/api/index.ts'
    ],

    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {},
}
