<template>
  <div class="pagee">
    <div class="container text-center">
      <br><br><br>
      <h1 class="titlee">
        <strong>S I M A R S</strong>
      </h1>
    </div>
    <div class="container">
      <div class="card cardd">
        <h4 class="form-title text-center">
          <strong>
            LOGIN
          </strong>
        </h4>
      <form method="post" class="form" @submit.prevent="login">
      <div class="form-group">
        <label for="" style="font-weight: bold">ID</label>
        <input type="text" class="form-control" id="id" v-model="id" placeholder="Masukkan ID Kamu" required>
      </div>
      <div class="form-group">
        <label for="" style="font-weight: bold">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Masukkan Password" required>
      </div>
      <button type="submit" class="btn btn-primary btn-block mt-4"><strong>Masuk</strong></button>
    </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  
  auth: 'guest',
  
  data(){
    return {
      id: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try{
        await this.$auth.loginWith('local', {
          data: {
            id: this.id,
            password: this.password
          }
        })

        this.$router.push('/adminHome')
      } catch(e) {
        this.error = e.response.data.message
      }
    }
  }

}
</script>

<style>
.pagee{
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("~/assets/img/bg2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    background-color: white;
}
.titlee{
  color: #0957DE;
  font-weight: bold;
  font-size: 5vw;
}
.cardd{
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
  padding: 20px;
  margin-top: 100px;
  background-color: whitesmoke;
  border: none;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.5);
}
.form-title{
  color: #0957DE;
}
.btn{
  background-color: #0957DE;
  color: white;
}
.btn:hover {
  background-color: white;
  color: #0957DE;
}
.form{
  margin-top: 35px;
}
</style>
