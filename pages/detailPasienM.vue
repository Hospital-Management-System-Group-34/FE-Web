<template>
  <div class="pageDetailPasien page">
    <Header />
    <div class="containerDetailPasien container mb-4">
      <div class="row">
        <div>
          <a class="link" href="/adminHome">Home</a> <strong>></strong>
          <a class="link" href="/dataPasien">Data Pasien</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Detail Pasien</strong></a> <strong>></strong>
          <a class="link" href="/riwayatPasienM">Riwayat Pasien</a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageDetailPasien page">
      <div class="row">
        <div class="cardDetailPasien card">
          <div class="card-body">
            <h2>
              <strong>
                Detail Pasien
              </strong>
            </h2>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6" style="padding-left: 40px">
                  <img v-if="patientGender == 'Laki-Laki'" class="mt-5" src="~/assets/img/male.png" alt="">
                  <img v-if="patientGender == 'Perempuan'" class="mt-5" src="~/assets/img/female.png" alt="">                  
                </div>
                <div class="col-6">
                  <div class="row text-center" style="height: auto">
                    <div class="col-6" style="background-color: #0957DE;padding: 10px;border-radius: 7px 0 0 7px">
                      <a class="detail" href="/detailPasienM">Detail Pasien</a>
                    </div>
                    <div class="col-6" style="border: 1px solid #0957DE;padding: 10px;border-radius: 0 7px 7px 0">
                      <a class="jadwal" href="/rekamMedisM">Rekam Medis</a>
                    </div>
                  </div>
                  <div>
                    <h4 class="mt-4">NIK</h4>
                    <h5 class="label mt-4">
                      <input id="input" class="label form-control-plaintext" v-model="patientNIK" :readonly="disable" placeholder="1234567890">
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">No. Rekam Medis</h4>
                    <h5 class="label mt-4">
                      <input id="input" class="label form-control-plaintext" v-model="medRecord" :readonly="disable" placeholder="PS.1234567890">
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Nama Lengkap</h4>
                    <h5 class="label mt-4">
                      <input id="input" class="label form-control-plaintext"  v-model="patientName" :readonly="disable" placeholder="Tengku Mahmudi">
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Jenis Kelamin</h4>
                    <h5 class="label mt-4">
                      <select id="Jenis Kelamin" class="label form-control-plaintext" v-model="patientGender" :disabled="disable">
                          <option>-- Jenis Kelamin --</option>
                          <option selected>Laki-Laki</option>
                          <option>Perempuan</option>
                      </select>
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">No. HP</h4>
                    <h5 class="label mt-4">
                      <input id="input" class="label form-control-plaintext" v-model="patientPhone" :readonly="disable" placeholder="0812345678">
                    </h5>
                  </div>
                  <button v-if="disable" class="mt-5 btnDetailPasien btn btn-block" @click="editForm">EDIT</button>
                  <button v-else class="mt-5 btnDetailPasien btn btn-block" @click="editForm">CONFIRM</button>
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

  middleware: 'auth',

  data(){
    return{
      disable: true,
      date: '',
      doctorID: '',
      clinicID: '',
      patientName: '',
      scheduleID: '',
      medRecord: '',
      patientNIK: '',
      patientGender: '',
      patientPhone: ''

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
    },
    async fetchDataPatient(){
      try{
      const resp = await this.$axios.$get(`https://shaggy-badger-99.a276.dcdg.xyz/patients/${this.storedPatientID}`)
      console.log(resp)
      this.patientNIK = resp.data.nik
      this.patientName = resp.data.name
      this.patientGender = resp.data.gender
      this.patientPhone = resp.data.phone
      // console.log(resp.data.medicalRecord.slice(-16))

      // const d = new Date(resp.data.sessions[0].date);
      // const docID = resp.data.sessions[0].doctorID.slice(-1);
      // const ClinicID = resp.data.sessions[0].clinicID.slice(-1);
      // const scheduleIdentifier = resp.data.sessions[0].scheduleID.slice(-1);
      // const medRec = resp.data.medicalRecord.slice(-16);
      
      // let day = d.getDay();
      // this.date = weekday[day],

      
      // this.doctorID = dokter[docID],
      // this.clinicID = poli[ClinicID] ,
      // this.patientName = resp.data.name,
      // this.scheduleID = jadwal[scheduleIdentifier],
      // this.medRecord = medRec
    } catch(e) {
      console.log(e.response)
    }
    }
  },
    computed: {
    storedPatientID(){
      return this.$store.state.admin.patientID
    }
  },

  mounted(){
      this.fetchDataPatient();
    }
}
</script>

<style>
.pageDetailPasien{
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
.containerDetailPasien a {
  text-decoration: none;
  color: grey;
}
.containerDetailPasien a:hover{
  color: black;
}
.cardDetailPasien{
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
.btnDetailPasien{
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
.btnDetailPasien:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
.btnDetailPasien2{
  width: 40%;
  background-color: rgb(165, 165, 165);
  float: right;
}
.btnDetailPasien2:hover{
  background-color: white;
  border-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}
</style>