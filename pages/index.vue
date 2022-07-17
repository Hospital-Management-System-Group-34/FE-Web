<template>
  <div class="pagee page">
    <div class="container text-center">
      <br><br><br>
      <h1 class="titlee title">
        <strong>S I M A R S</strong>
      </h1>
    </div>
    <div class="container">
      <div class="cardd card">
        <h4 class="form-title text-center">
          <strong>
            LOGIN
          </strong>
        </h4>
      <form method="post" class="formm form" @submit.prevent="login">
        <div v-if="error">
          <b>Please correct the following error(s):</b>
            <ul>
              <li>{{ error }}</li>
            </ul>
        </div>
      <div class="form-group">
        <label for="" style="font-weight: bold">ID</label>
        <input type="text" class="form-control" id="id" v-model="id" placeholder="Masukkan ID Kamu" autocomplete required>
      </div>
      <div class="form-group mt-5">
        <label for="" style="font-weight: bold">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Masukkan Password" required>
      </div>
      <button type="submit" @click="setID" class="btnn btn btn-primary btn-block mt-4" data-toggle="modal" data-target="#exampleModalCenter"><strong>Masuk</strong></button>
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
      error: null,
      errors: [],
    }
  },

  methods: {
    async login() {
      if(this.id.length >= 7){
              try{
        const result = await this.$auth.loginWith('local', {
          data: {
            id: this.id,
            password: this.password
          }
        })
        // this.$auth.setUserToken(result.token, result.token)
        this.$router.push('/adminHome')
        
      } catch(e) {
        if(e.status === "fail")
        {
          this.error = "Credentials Salah, silahkan masukkan data yang benar!"
        }else{
          this.error = e.message
        }
        
      }        
      }
      else{
        this.error = 'ID terlalu pendek, minimal 7 karakter!'
      }

    },

    setID(){
      this.$store.dispatch("admin/setAdmin",{
        id: this.id, password: this.password
      })
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
  font-size: 3vw;
}
.btnn{
  background-color: #0957DE;
  color: white;
  height: 70px;
  font-size: 1.5em;
}
.btnn:hover {
  background-color: white;
  color: #0957DE;
}
.formm{
  margin-top: 35px;
}
</style>