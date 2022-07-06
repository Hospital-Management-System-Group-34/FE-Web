<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="adminHome">
    <img src="~assets/img/LogoCompany.png" alt="Logo" class="img-fluid logo ml-5">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link logout" style="color: white; font-weight: bold" @click="logout">Sign Out</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  }
}
</script>

<style>
.navbar{
 background-color: #0957DE;
 margin-bottom: 50px;
}
.logo{
  width: 50px;
}
</style>

