<template>
  <div class="page">
    <Header />
    <div class="container head">
      <div class="row">
        <div class="col-6">
          <h1 class="title">Selamat Pagi {{loggedInUser.name}}!</h1>
        </div>
        <div class="col-6">
          <h1 class="date text-right">{{timestamp}}</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">

        <div class="col-6">
          <div class="card text-center">
            <div class="card-body">
              <div class="card-title">PENDAFTARAN PASIEN</div>
                <div class="card-img">
                  <img src="~assets/img/pana.png" class="img-fluid" alt="">
                  <p class="card-text mt-3">Saat ini, {{timestamp}}</p>
                  <a href="daftarPasien" class="btnHome btn btn-primary btn-block mb-3">+ Pendaftaran pasien baru</a>
                  <a href="daftarPasien" class="btnHome btn1 btn btn-primary btn-block mb-4">+ Pendaftaran pasien lama</a>
                </div>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="card text-center">
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <div class="card-body">
                  <div class="card-img">
                    <img src="~assets/img/data.png" class="img-fluid" alt="">
                  </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card-body mt-5">
                    <div class="card-title">DATA POLIKLINIK</div>
                    <a href="dataPoliklinik" class="btnHome btn btn-primary btn-block mb-4">LIHAT DATA</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card text-center mt-4">
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <div class="card-body">
                    <div class="card-img">
                      <img src="~assets/img/data.png" class="img-fluid" alt="">
                    </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="card-body mt-5">
                      <div class="card-title">DATA DOKTER</div>
                      <a href="dataDokter" class="btnHome btn btn-primary btn-block mb-4">LIHAT DATA</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  middleware: 'auth',

  data(){
    return{
      timestamp: ""
    }
  },

  created(){
    setInterval(this.getNow, 1000)
  },

  methods: {
    getNow(){
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;

      this.timestamp = dateTime;
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
    // ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style>
.title{
  font-size: 2.3vw;
  font-weight: 500;
  color: #0957DE;
  text-shadow: 1px 3px 3px rgba(124, 124, 124, 0.5);
}
.date{
  font-size: 1.5vw;
  color: black;
  margin-top: 15px;
  font-weight: 500;
  margin-right: 10px;
}
.head{
  max-width: 1800px;
}
.page{
    background-color: whitesmoke;
    height: 100vh;
}
.banner{
  max-height: 500px;
}
.container-fluid{
  max-width: 1800px;
  margin-top: 50px;
}
.card-title{
  font-weight: bold;
  font-size: 1.5vw;
}
.card-text{
  font-weight: bold;
  font-size: 1vw;
}
.btnHome{
  background-color: #0957DE;
  margin: auto;
  width: 70%;
  height: auto;
  font-size: 1.2vw;
  font-weight: bold;
  padding: 17px;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.7);
}
.btnHome:hover {
  background-color: white;
  color: #0957DE;
}
.btn1{
  background-color: rgb(0, 202, 202);
  border-color: rgb(0, 202, 202);
  margin: auto;
  width: 70%;
  height: auto;
  font-size: 1.2vw;
  font-weight: bold;
  padding: 17px;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.7);
}
.btn1:hover {
  background-color: white;
  border-color: rgb(0, 202, 202);
  color: rgb(0, 202, 202);
}
</style>