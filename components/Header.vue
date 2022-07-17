<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="adminHome">
    <h1 class="h1Header">SIMARS</h1>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <div>
            <h1 class="h1Header">{{idComputed}} - Petugas Entry</h1>
          </div>
            <li class="nav-item px-5">
                <a class="nav-link logout" style="color: white; font-weight: bold" @click="logout">Sign Out</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>

// import { mapGetters } from 'vuex'

export default {
  methods: {
    async logout() {
      await this.$auth.logout();
      window.localStorage.removeItem('vuex');
    },
  },

  computed: {
    idComputed(){
      return this.$store.state.admin.loggedIn
    }
    // ...mapGetters(['isAuthenticated', 'loggedInUser'])
    // ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style>
.navbar{
 background-color: #0957DE;
 margin-bottom: 50px;
}
.h1Header{
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
/* .logo{
  width: 50px;
} */
</style>

