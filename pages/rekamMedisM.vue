<template>
  <div class="pageRekamMedis page">
    <Header />
    <div class="containerRekamMedis container mb-4">
      <div class="row">
        <div>
          <a class="link" href="/adminHome">Home</a> <strong>></strong>
          <a class="link" href="/dataPasien">Data Pasien</a> <strong>></strong>
          <a class="link" href="/detailPasienM" style="font-weight: bold"><strong>Detail Pasien</strong></a> <strong>></strong>
          <a class="link" href="/riwayatPasienM">Riwayat Pasien</a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageRekamMedis page">
      <div class="row">
        <div class="cardRekamMedis card">
          <div class="card-body">
            <h2>
              <strong>
                Detail Pasien
              </strong>
            </h2>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                <div class="col-6" style="padding-left: 25px">
                  <img v-if="patientGender == 'Laki-Laki'" class="mt-5" src="~/assets/img/male.png" alt="">
                  <img v-if="patientGender == 'Perempuan'" class="mt-5" src="~/assets/img/female.png" alt="">
                </div>
                </div>
                <div class="col-6">
                  <div class="row text-center" style="height: auto">
                    <div class="col-6" style="border: 1px solid #0957DE;padding: 10px;border-radius: 7px 0 0 7px">
                      <a class="detail" href="/detailPasienM">Detail Pasien</a>
                    </div>
                    <div class="col-6" style="background-color: #0957DE;padding: 10px;border-radius: 0 7px 7px 0">
                      <a class="jadwal" href="/rekamMedisM">Rekam Medis</a>
                    </div>
                  </div>
                  <div class="card contentrekam text-center">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            {{clinicID}}
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          {{doctorID}}
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="/riwayatPasienM" class="btnRekamMedis btnRekamMedis2 btn btn-block">{{statusSession}}</a>
                        <small class="small"><strong>Tanggal: {{date}}</strong></small><br>
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
export default {

  middleware: 'auth',

    data(){
    return{
      disable: true,
      date: '',
      doctorID: '',
      clinicID: '',
      statusSession: '',
      patientGender: '',

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

          var dokter = new Array(7);
          var poli = new Array(7);

        dokter[1]="dr.Keshya Valerie Sky";
        dokter[2]="dr.dr.rizky Sp.A(K)";
        dokter[3]="dr.Amroni Sp.";
        dokter[4]="dr.Valen Sp.A";
        dokter[5]="dr.Baki Sp.M";
        dokter[6]="dr.Trisna Sp.KG";

        poli[1]="POLI UMUM";
        poli[2]="POLI MATA";
        poli[3]="POLI JANTUNG";
        poli[4]="POLI ANAK";
        poli[5]="POLI THT";
        poli[6]="POLI GIGI";

      try{
      const resp = await this.$axios.$get(`https://shaggy-badger-99.a276.dcdg.xyz/patients/${this.storedPatientID}`)
      console.log(resp)

      const docID = resp.data.sessions[0].doctorID.slice(-1);
      const ClinicID = resp.data.sessions[0].clinicID.slice(-1);

      this.date = resp.data.sessions[0].date,
      this.doctorID = dokter[docID],
      this.clinicID = poli[ClinicID] ,
      this.statusSession = resp.data.sessions[0].status
      this.patientGender = resp.data.gender
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
.btnRekamMedis2{
  padding: 10px;
}
.pageRekamMedis{
  background-color: whitesmoke;
  height: 100vh;
}
.detail{
  color: #0957DE;
  font-weight: bold;
  font-size: 1.2em;
}
.detail:hover{
  color: #0957DE;
  text-decoration: none;
}
.jadwal{
  color: white;
  font-weight: bold;
  font-size: 1.2em;
}
.jadwal:hover{
  color: white;
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
.containerRekamMedis a {
  text-decoration: none;
  color: grey;
}
.containerRekamMedis a:hover{
  color: black;
}
.cardRekamMedis{
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
.contentrekam{
  margin: auto;
  margin-top: 50px;
  width: 650px;
  border: none;
  border-radius: 15px;
  background-color: whitesmoke;
}
.small{
  color: #0957DE;
}
.card-body{
  padding: 50px;
}
.card-title{
  font-size: 2em;
  font-weight: bold;
}
.btnRekamMedis{
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
.btnRekamMedis:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
.btnRekamMedis3{
  width: 40%;
  background-color: rgb(165, 165, 165);
  float: right;
}
.btnRekamMedis3:hover{
  background-color: white;
  border-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}
</style>