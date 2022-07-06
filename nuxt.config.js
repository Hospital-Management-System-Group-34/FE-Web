export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
  plugins: [],

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
    baseURL: 'http://18.141.205.74:9000/',
    // proxy: true
    // proxy: false,
    // prefix: process.env.API_URL,
    // baseURL: process.env.API_URL,
  },

  // proxy: {
  //   '/api/': ''
  // },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.accessToken'},
          // login: { url: 'login', method: 'post', propertyName: 'data.token'},
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
