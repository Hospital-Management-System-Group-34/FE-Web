<template>
  <div class="page">
    <Header />
    <div class="container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Dokter</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid page">
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h2>
              <strong>
                Detail Data Dokter
              </strong>
            </h2>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <div class="card content text-center">
                    <img src="~/assets/img/Ava.png" alt="" class="card-img-top">
                    <div class="card-body" style="padding-bottom: 20px">
                      <div class="card-text">
                        <h4>
                          <strong>
                            Dr. Keshya Valerie Sky
                          </strong>
                        </h4>
                        <h4 class="category mt-4">UMUM</h4>
                        <h4 class="mt-3" style="color: #9B9B9B">
                          Senin - Sabtu
                        </h4>
                        <h4 class="mt-3" style="color: #C4C3C3">
                          (021) - 123456789
                        </h4>
                      </div>
                    </div>
                      <div class="card-title">
                        <a href="">Lihat Surat Izin</a>
                      </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row text-center" style="height: auto">
                    <a class="col-6" href="profileDokter" style="background-color: #0957DE;padding: 10px;border-radius: 7px 0 0 7px">
                      <div class="detail">Profile Dokter</div>
                    </a>
                    <a class="col-6" href="jadwalPraktik" style="border: 1px solid #0957DE;padding: 10px;border-radius: 0 7px 7px 0">
                      <div class="jadwal" >Jadwal Praktik</div>
                    </a>
                  </div>
                  <form>
                  <div>
                    <h4 class="mt-4">Nama</h4>
                    <h5 class="label mt-4">
                      <input id="input" class="label form-control-plaintext" :readonly="disable" placeholder="Nama Dokter">
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">No. Izin Praktik</h4>
                    <h5 class="label mt-4">
                      <input class="label form-control-plaintext" :readonly="disable" placeholder="A.123456789">
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Alamat</h4>
                    <h5 class="label mt-4">
                      <input class="label form-control-plaintext" :readonly="disable" placeholder="Jl. Soekarno Hatta, Kota Jambi">
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Tempat Tanggal Lahir</h4>
                    <h5 class="label mt-4">
                      <input class="label form-control-plaintext" :readonly="disable" placeholder="Kota Jambi, 17 Maret 1989">
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Agama</h4>
                    <h5 class="label mt-4">
                      <!-- <input class="label form-control-plaintext" :readonly="disable" placeholder="Islam"> -->
                      <select id="sex" class="label form-control-plaintext" :disabled="disable">
                          <option selected>-- AGAMA --</option>
                          <option>Islam</option>
                          <option>Kristen</option>
                      </select>
                    </h5>
                  </div>
                  </form>
                  <button v-if="disable" class="mt-5 btn btn-block" @click="editForm">EDIT</button>
                  <button v-else class="mt-5 btn btn-block" @click="editForm">CONFIRM</button>
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
export default {
data(){
  return{
    disable: true
  }
},
methods: {
  editForm(){
    if (this.disable == true)
    {
      this.disable = false
    }
    else{
      this.disable = true
    }
  }
}
}
</script>

<style>
.page{
  background-color: whitesmoke;
  height: 100vh;
}
.linkpage{
  background-color: #0957DE;
  color: white;
}
.detail{
  color: white;
  font-weight: bold;
  font-size: 1.2em;
}
.detail:hover{
  color: white;
  text-decoration: none;
}
.jadwal{
  color: #0957DE;
  font-weight: bold;
  font-size: 1.2em;
}
.jadwal:hover{
  color: #0957DE;
  text-decoration: none;
}
h2{
  padding-left: 65px;
}
.category{
  background-color: #09C2DE;
  color: white;
  width: 50%;
  margin: auto;
  border-radius: 20px 20px 20px 20px;
  padding: 7px;
}
.card-title{
  background-color: #09C2DE;
  margin-bottom: 0px;
  border-radius: 0 0 15px 15px;
  padding: 10px;
}
.card-title a{
  text-decoration: none;
  color: white;
}
.card-img-top{
  width: 70%;
  margin: auto;
}
.label{
  background-color: rgba(213, 224, 254, 0.3);
  padding: 10px;
}
.container a {
  text-decoration: none;
  color: grey;
}
.container a:hover{
  color: black;
}
.card{
  margin: auto;
  width: 1500px;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.5);
}
.content{
  margin-left: 50px;
  margin-top: 50px;
  width: auto;
  max-width: 400px;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 3px 3px 3px rgba(124, 124, 124, 0.3);
}
.card-body{
  padding: 50px;
}
.card-title{
  font-size: 2em;
  font-weight: bold;
}
.btn{
  width: 100%;
  background-color: #0957DE;
  border-radius: 7px;
  margin: auto;
  color: white;
  font-size: 1.7em;
  font-weight: bold;
  padding: 20px;
  margin-bottom: 10px;
}
.btn:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
.btn1{
  width: 40%;
  background-color: rgb(165, 165, 165);
  float: right;
}
.btn1:hover{
  background-color: white;
  border-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}
</style>