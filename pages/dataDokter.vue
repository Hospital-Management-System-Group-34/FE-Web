<template>
  <div class="pageDataDokter">
    <Header />
    <div class="container2 container mb-4">
      <div class="row">
        <div>
          <a class="link" href="/adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Dokter</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageDataDokter">
      <div class="row">
        <div class="cardDataDokter card">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <h5 class="card-title pl-4">Data Dokter</h5>
              </div>
              <div class="col-6">
                <button class="btnDataDokter btn2 btn btn-block" @click="showModal = true">TAMBAH DATA DOKTER</button>
                <Modal v-if="showModal" @close="showModal = false">
                  <h3 style="text-align:center" slot="header">Form Tambah Dokter</h3>

                  <form method="post" class="form" slot="body">
                    <div class="form-group">
                      <label class=" labelForm label" for="nama">Nama Dokter :</label>
                      <input id="nama" type="text" placeholder="Nama Dokter">
                    </div>
                    <div class="form-group">
                      <label class="labelForm label" for="speciality">Spesialitas :</label>
                      <input id="speciality" type="text" placeholder="Spesialitas Dokter">
                    </div>
                    <div class="form-group">
                      <label class=" labelForm label" for="nomorTelp">Nomor Telepon :</label>
                      <input id="nomorTelp" type="text" placeholder="Kontak Dokter">
                    </div>
                    <div class="form-group">
                      <label class="labelForm label" for="pass">Password :</label>
                      <input id="napassma" type="text" placeholder="Password">
                    </div>
                    <div class="form-group">
                      <label class="labelForm label" for="role">Role :</label>
                      <select>
                        <option value="role-1">Dokter</option>
                        <option value="role-2">Perawat</option>
                      </select>
                    </div>
                  </form>

                </Modal>
              </div>
            </div>
            <div class="container-fluid text-center mb-5">
              <div class="row">
                <div class="col-6">
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI UMUM
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          dr. Jane
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button id="doctor-1" @click="press1()" class="btnDataDokter btn btn-block">LIHAT DATA</button>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI JANTUNG
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          dr. Peter
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button id="doctor-3" @click="press3()" class="btnDataDokter btn btn-block">LIHAT DATA</button>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI THT
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          dr. Strange
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button id="doctor-5" @click="press5()" class="btnDataDokter btn btn-block">LIHAT DATA</button>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI MATA
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          dr. Richard
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button id="doctor-2" @click="press2()" class="btnDataDokter btn btn-block">LIHAT DATA</button>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI ANAK
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          dr. Wanda
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button id="doctor-4" @click="press4()" class="btnDataDokter btn btn-block">LIHAT DATA</button>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI GIGI
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          dr. Kamala
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button id="doctor-6" @click="press6()" class="btnDataDokter btn btn-block">LIHAT DATA</button>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
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
import Modal from '~/components/modal.vue';
export default {
    middleware: "auth",
    
    components: { Modal },

    data(){
      return{
        showModal: false,
      }
    },

      methods:{
    press1(){
      const button = document.querySelector('#doctor-1')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setDoctorID",button.id)
      this.$router.push("/profileDokter");
    },
        press2(){
      const button = document.querySelector('#doctor-2')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setDoctorID",button.id)
      this.$router.push("/profileDokter");
    },
        press3(){
      const button = document.querySelector('#doctor-3')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setDoctorID",button.id)
      this.$router.push("/profileDokter");
    },
        press4(){
      const button = document.querySelector('#doctor-4')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setDoctorID",button.id)
      this.$router.push("/profileDokter");
    },
        press5(){
      const button = document.querySelector('#doctor-5')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setDoctorID",button.id)
      this.$router.push("/profileDokter");
    },
        press6(){
      const button = document.querySelector('#doctor-6')
      console.log('your id:', button.id)
      this.$store.commit("admin/setDoctorID",button.id)
      this.$router.push("/profileDokter");
    }
  },

    computedDoctorID(){
      return this.$store.state.admin.doctorID;
    }
}
</script>

<style>
.pageDataDokter{
  background-color: whitesmoke;
  height: 100vh;
}
.small{
  color: #0957DE;
}
.progress{
  width: 278px;
  margin: auto;
}
.text{
  color: #0957DE;
}
.container2 a {
  text-decoration: none;
  color: grey;
}
.container2 a:hover{
  color: black;
}
.cardDataDokter{
  margin: auto;
  width: 1500px;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.5);
}
.content{
  margin: auto;
  margin-top: 50px;
  width: 650px;
  border: none;
  border-radius: 15px;
  background-color: whitesmoke;
}
.card-body{
  padding: 50px;
}
.card-title{
  font-size: 2em;
  font-weight: bold;
}
/* .card-text{
  padding: 25px;
} */
.form-control{
  width: 90%;
  margin: auto;
}
.btnDataDokter{
  width: 90%;
  background-color: #0957DE;
  border-radius: 7px;
  margin: auto;
  color: white;
  font-size: 1em;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 10px;
}
.btnDataDokter:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
.btn2{
  width: 40%;
  background-color: rgb(165, 165, 165);
  float: right;
}
.btn2:hover{
  background-color: white;
  border-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}
.labelForm{
  display: block;
}
</style>