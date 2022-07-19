<template>
  <div class="pageRiwayatPasien page">
    <Header />
    <div class="containerRiwayatPasien container mb-4">
      <div class="row">
        <div>
          <a class="link" href="/adminHome">Home</a> <strong>></strong>
          <a href="/dataPasien">Data Pasien</a> <strong>></strong>
          <a href="/detailPasienM">Detail Pasien</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Riwayat Pasien</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageRiwayatPasien page">
      <div class="row">
        <div class="cardRiwayatPasien card mb-5">
          <div class="card-bodyy card-body">
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
                  <div>
                    <h4 class="mt-4">Tipe Kunjungan</h4>
                    <h5 class="label mt-4">
                      <input class="label form-control-plaintext" v-model="patientType" :readonly="disable" placeholder="1234567890">
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Tanggal Kunjungan</h4>
                     <div class="row">
                      <div class="col-6">
                        <h5 class="label mt-4">
                        <input v-if="disable" type="text" v-model="patientDate" class="label form-control-plaintext"  :formatter="format(date)" :readonly="disable" placeholder="12/12/1212" onfocus="(this.type='text')">
                        <input v-else type="text" v-model="patientDate" class="label form-control-plaintext"  :formatter="format(date)" :readonly="disable" placeholder="12/12/1212" onfocus="(this.type='date')">
                        </h5>
                      </div>
                      <div class="col-6">
                        <h5 class="label mt-4">
                          <input type="time" v-model="scheduleID" class="label form-control-plaintext" :readonly="disable" value="13:00">
                        </h5>
                      </div>
                     </div>
                  </div>
                  <div>
                    <h4 class="mt-4">Amnesia</h4>
                    <h5 class="label mt-4">
                      <textarea class="label form-control-plaintext" cols="40" rows="5" :readonly="disable" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo modi natus laudantium, vitae voluptatem quidem obcaecati itaque laborum sequi officiis eligendi sapiente placeat harum minus recusandae tempore repudiandae optio? Officiis!"></textarea>
                      <!-- <LoremIpsum add="1p"></LoremIpsum> -->
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Riwayat Alergi Obat</h4>
                     <div class="row">
                      <div class="col-6">
                        <h5 class="label mt-4">
                          <input v-model="patientDrugHistory" class="label form-control-plaintext" :readonly="disable" placeholder="Obat">
                        </h5></div>
                      <div class="col-6">
                        <h5 class="label mt-4">
                          <input v-model="patientDrugHistory" class="label form-control-plaintext" :readonly="disable" placeholder="Tidak Ada">
                        </h5>
                      </div>
                     </div>
                  </div>
                  <div>
                    <h4 class="mt-4">Terapi Obat</h4>
                    <h5 class="label mt-4">
                      <textarea class="label form-control-plaintext" v-model="patientDrugTherapy" cols="40" rows="5" :readonly="disable" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo modi natus laudantium, vitae voluptatem quidem obcaecati itaque laborum sequi officiis eligendi sapiente placeat harum minus recusandae tempore repudiandae optio? Officiis!"></textarea>
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Diagnosa</h4>
                    <h5 class="label mt-4">
                      <textarea class="label form-control-plaintext" v-model="patientDiagnose" cols="40" rows="5" :readonly="disable" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo modi natus laudantium, vitae voluptatem quidem obcaecati itaque laborum sequi officiis eligendi sapiente placeat harum minus recusandae tempore repudiandae optio? Officiis!"></textarea>
                    </h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Pemeriksaan Fisik</h4>
                     <div class="row">
                      <div class="col-6">
                        <h4 class="mt-4">Tinggi Badan (cm)</h4>
                        <h5 class="label mt-4">
                          <input class="label form-control-plaintext" v-model="patientHeight" :readonly="disable" placeholder="175">
                        </h5>
                      </div>
                      <div class="col-6">
                        <h4 class="mt-4">Berat Badan (KG)</h4>
                        <h5 class="label mt-4">
                          <input class="label form-control-plaintext" v-model="patientWeight" :readonly="disable" placeholder="80">
                        </h5>
                      </div>
                     </div>
                  </div>
                  <div>
                    <h4 class="mt-4">Tekanan Darah</h4>
                     <div class="row">
                      <div class="col-6">
                        <h4 class="mt-4">Sistole (mmHg)</h4>
                        <h5 class="label mt-4">
                          <input class="label form-control-plaintext" v-model="patientSystole" :readonly="disable" placeholder="90">
                        </h5>
                        <h4 class="mt-4">Suhu (C)</h4>
                        <h5 class="label mt-4">
                          <input class="label form-control-plaintext" v-model="patientTemp" :readonly="disable" placeholder="34">
                        </h5>
                      </div>
                      <div class="col-6">
                        <h4 class="mt-4">Diastole (mmHg)</h4>
                        <h5 class="label mt-4">
                          <input class="label form-control-plaintext" v-model="patientDiastole" :readonly="disable" placeholder="60">
                        </h5>
                      </div>
                     </div>
                  </div>
                  <div>
                    <h4 class="mt-4">Status Pulang</h4>
                    <h5 class="label mt-4">
                      <input class="label form-control-plaintext" v-model="patientStatus" :readonly="disable" placeholder="Rawat Jalan">
                    </h5>
                  </div>
                  <h4 class="mt-4">*Pastikan semua data terisi dengan benar</h4>
                  <button v-if="disable" class="mt-5 btnRiwayatPasien btn btn-block" @click="editForm">EDIT</button>
                  <button v-else class="mt-5 btnRiwayatPasien btn btn-block" @click="editForm">CONFIRM</button>
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

import moment from 'moment'
// import Vue from "vue"
// import VueDummy from "vue-dummy"

// Vue.use(VueDummy)
// import LoremIpsum from '../node_modules/vue-lorem-ipsum/src/LoremIpsum.vue'

export default {
    middleware: "auth",
    data() {
        return {
            disable: true,
            date: "",
            patientType: '',
            patientDate: '',
            patientSchedule: '',
            scheduleID: '',
          patientDrugHistory: '',
          patientDrugTherapy: '',
          patientDiagnose: '',
          patientHeight: '',
          patientWeight: '',
          patientSystole: '',
          patientDiastole: '',
          patientTemp: '',
          patientStatus: '',
          patientGender: '',
        };
    },
    methods: {
        editForm() {
            if (this.disable == true) {
                this.disable = false;
            }
            else {
                this.disable = true;
            }
        },
        format(value) {
            return moment(value).format("DD-MM-YYYY");
        },
        async fetchDataPatient(){

                var weekday=new Array(7);
    var dokter = new Array(7);
    var poli = new Array(7);
    var jadwal = new Array(7);

        weekday[1]="Senin";
        weekday[2]="Selasa";
        weekday[3]="Rabu";
        weekday[4]="Kamis";
        weekday[5]="Jumat";
        weekday[6]="Sabtu";
        weekday[0]="Minggu";

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

        jadwal[1]="08:00-11:00";
        jadwal[2]="09:00-11:00";
        jadwal[3]="10:00-11:00";
        jadwal[4]="13:00-17:00";
        jadwal[5]="14:00-17:00";
        jadwal[6]="15:00-17:00";
        jadwal[7]="16:00-17:00";


          try{
          const resp = await this.$axios.$get(`https://shaggy-badger-99.a276.dcdg.xyz/patients/${this.storedPatientID}`)
          console.log(resp)

          const scheduleIdentifier = resp.data.sessions[0].scheduleID.slice(-1);

          this.patientType = resp.data.medicalRecords[0].type
          this.patientDate = resp.data.sessions[0].date
          this.scheduleID = jadwal[scheduleIdentifier]
          this.patientDrugHistory = resp.data.medicalRecords[0].drugAllergyHistory
          this.patientDrugTherapy = resp.data.medicalRecords[0].drugTherapy
          this.patientDiagnose = resp.data.medicalRecords[0].diagnosis
          this.patientHeight = resp.data.medicalRecords[0].height
          this.patientWeight = resp.data.medicalRecords[0].weight
          this.patientSystole = resp.data.medicalRecords[0].systole
          this.patientDiastole = resp.data.medicalRecords[0].patientDiastole
          this.patientTemp = resp.data.medicalRecords[0].temperature
          this.patientStatus = resp.data.medicalRecords[0].status
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
.pageRiwayatPasien{
  background-color: whitesmoke;
  height: auto;
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
.card-titlee{
  background-color: #09C2DE;
  margin-bottom: 0px;
  border-radius: 0 0 15px 15px;
  padding: 10px;
}
.card-titlee a{
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
.containerRiwayatPasien a {
  text-decoration: none;
  color: grey;
}
.containerRiwayatPasien a:hover{
  color: black;
}
.cardRiwayatPasien{
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
.card-bodyy{
  padding: 50px;
}
.card-titlee{
  font-size: 2em;
  font-weight: bold;
}
.btnRiwayatPasien{
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
.btnRiwayatPasien:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
.btnRiwayatPasien2{
  width: 40%;
  background-color: rgb(165, 165, 165);
  float: right;
}
.btnRiwayatPasien2:hover{
  background-color: white;
  border-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}
</style>