export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  // generate
  generate: {
    fallback: true
  },
  
  head: {
    title: 'simars',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css'
  ],
  js: [
    '@/assets/js/bootstrap.min.js'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // browserBaseURL: '/',
    // baseURL: 'https://api.gms.mirfanrafif.me',
    baseURL: 'https://shaggy-badger-99.a276.dcdg.xyz',
    // baseURL: 'https://virtserver.swaggerhub.com/G2731/GymMembership/1.0/user/'
    // proxy: true
    // proxy: false,
    // prefix: process.env.API_URL,
    // baseURL: process.env.API_URL,
  },

  // proxy: {
  //   '/api/': 'https://shaggy-badger-99.a276.dcdg.xyz'
  // },

  auth: {
    strategies: {
      local: {
        endpoints: {
          // login: { url: 'admin/login', method: 'post', propertyName: 'token'},
          // user: { url: 'admin', method: 'get', propertyName: 'data'},
          login: { url: 'login', method: 'post', propertyName: 'data.accessToken'},
          // login: { url: 'login', method: 'post', propertyName: 'data.token'},
          // user: {url:'user', method: 'get', propertyName: 'data'},
          user: {url:'users/doctor-1', method: 'get', propertyName: 'data.user'},
          // user: {url:'', method: 'get', propertyName: 'data'},
          logout: false,
          // logout: {url: 'logout', method: 'post'},
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
