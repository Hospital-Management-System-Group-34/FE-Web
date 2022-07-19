<template>
  <div class="pageDaftarPasien page">
    <Header />
    <div class="container mb-4">
      <div class="row">
        <div>
          <a class="link" href="/adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Pendaftaran</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageDaftarPasie page ">
      <div class="row">
        <div class="cardDaftarPasien card mb-5">
          <div class="card-body">
            <h5 class="card-title">PENDAFTARAN</h5>
             <div class="card-text">
                <form method="post" class="form mt-5" @submit.prevent="submitRegist">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="id" class="label">ID</label>
                      <input type="text" class="form-control mb-2" v-model="patientID" id="id" placeholder="Masukkan nomor ID Pasien" required>
                      <small class="text">*ID harus terdaftar di database !</small> <br>

                      <label for="norek" class="label mt-4">No. Rekam Medis</label>
                      <input type="text" class="form-control mb-2" v-model="patientMedicalRecord" id="norek" placeholder="PS.123456789" disabled>

                      <label for="name" class="label mt-4">Nama Lengkap</label>
                      <input type="text" class="form-control mb-2" v-model="patientName" id="name" placeholder="Alterra" disabled>

                      <label for="no" class="label mt-4">No. HP</label>
                      <input type="number" class="form-control mb-2" v-model="patientPhone" id="no" placeholder="082213273168" disabled>

                      <label for="sex" class="label mt-4">Jenis Kelamin</label>
                        <select id="sex" class="form-control" v-model="patientGender" disabled>
                          <option selected>-- PILIH JENIS KELAMIN --</option>
                          <option>Laki-Laki</option>
                          <option>Perempuan</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="poli" class="label">Poli</label>
                        <select id="poli" class="form-control" v-model="patientClinicID" required>
                          <option selected>-- PILIH POLI --</option>
                          <option value="clinic-1">-- POLI UMUM --</option>
                          <option value="clinic-2">-- POLI MATA --</option>
                          <option value="clinic-3">-- POLI JANTUNG --</option>
                          <option value="clinic-4">-- POLI ANAK --</option>
                          <option value="clinic-5">-- POLI THT --</option>
                          <option value="clinic-6">-- POLI GIGI --</option>
                        </select>

                        <label for="dokter" class="label mt-4">Dokter</label>
                        <select id="dokter" class="form-control" v-model="patientDoctorID" required>
                          <option selected>-- Pilih Dokter --</option>
                          <option value="doctor-1">dr. Jane (UMUM)</option>
                          <option value="doctor-2">dr. Richard (MATA)</option>
                          <option value="doctor-3">dr. Peter (JANTUNG)</option>
                          <option value="doctor-4">dr. Wanda (ANAK)</option>
                          <option value="doctor-5">dr. Strange (THT)</option>
                          <option value="doctor-6">dr. Kamala (GIGI)</option>
                        </select>

                        <label for="date" class="label mt-4">Jadwal</label>
                        <input type="date" class="form-control mb-2" id="date" v-model="patientDate" required>

                        <label for="time" class="label mt-4">Jam</label>
                        <select id="time" class="form-control" v-model="patientScheduleID" required>
                          <option selected>----</option>
                          <option value="schedule-1">-- 08:00-11:00 --</option>
                          <option value="schedule-2">-- 09:00-11:00 --</option>
                          <option value="schedule-3">-- 10:00-11:00 --</option>
                          <option value="schedule-4">-- 13:00-17:00 --</option>
                          <option value="schedule-5">-- 14:00-17:00 --</option>
                          <option value="schedule-6">-- 15:00-17:00 --</option>
                          <option value="schedule-7">-- 16:00-17:00 --</option>
                        </select>

                        <label for="keluhan" class="label mt-4">Keluhan</label>
                        <textarea class="form-control" id="keluhan" rows="4" v-model="patientComplaint" required></textarea> <br>
                        <small class="text">*Pastikan data sudah terisi dengan benar</small>

                        <button type="submit" class="btnDaftarPasien btn btn-primary btn-block mt-4">KONFIRMASI</button>
                    </div>
                  </div>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    middleware: "auth",
    data() {
        return {
            patientID: "",
            patientName: "",
            patientPhone: "",
            patientGender: "",
            patientClinicID: "",
            patientDoctorID: "",
            patientScheduleID: "",
            patientComplaint: "",
            patientDate: new Date().toISOString().slice(0,10),
            patientMedicalRecord: "",
            error: null,
            borderColor: '',
            backgroundColor: '#fff',
            borderColorPhone: '',
            backgroundColorPhone: '#fff',
        };
    },
    methods: {
      async cekPatientId(){
        if(this.patientID.length == 13){
          try{
            const resp = await this.$axios.$get(`https://shaggy-badger-99.a276.dcdg.xyz/patients/${this.patientID}`)
            // console.log(resp)
            this.patientName = resp.data.name,
            this.patientMedicalRecord = resp.data.medicalRecord,
            this.patientPhone = resp.data.phone,
            this.patientGender = resp.data.gender
          } catch(e) {
            console.log(e.response)
          }
        }
        else{
          console.log("updating...")
        }
          
    },
      async submitRegist(){
        try{
          await this.$axios.$post('https://shaggy-badger-99.a276.dcdg.xyz/sessions', 
            {
                patientID: this.patientID,
                clinicID: this.patientClinicID,
                doctorID: this.patientDoctorID,
                scheduleID: this.patientScheduleID,
                complaint: this.patientComplaint,
                date: this.patientDate,
            }
          )
          .then((res) => {
            if (res.code === 200) {
              this.$router.push("/daftarBerhasil");
              this.$store.commit("admin/setPatientID", this.patientID);
            }
            else {
              console.log(res.status);
              this.error = "Data Sudah ada, cek kembali data Anda";
              alert("Please correct the following error(s): \n" + `${this.error}`);
            }
          });
        } catch(e) {
          console.log(e.message);
          this.error = e.message;
          alert(this.error);
        }
      
      // console.log(
      //   this.patientName,
      //   this.patientGender,
      //   this.patientNik,
      //   this.patientPhone,
      // )
      },
      blankData(){
            this.patientName = '',
            this.patientMedicalRecord = '',
            this.patientPhone = '',
            this.patientGender = ''
      }
    },
    watch:{
      patientID: function(oldVal, newVal){
        if(oldVal.length == 13){
          this.cekPatientId()
        }
        else{
          this.blankData()
        }
      }
    }
}
</script>

<style>
.pageDaftarPasien{
    background-color: whitesmoke;
    height: auto;
}
.container a {
  text-decoration: none;
  color: grey;
}
.container a:hover{
  color: black;
}
.cardDaftarPasien{
  margin: auto;
  width: 1500px;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.5);
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
.label{
  font-weight: bold;
  font-size: 1.3em;
  padding-left: 33px;
}
.text{
  padding-left: 33px;
  font-weight: 500;
  font-size: 1em;
}
.btnDaftarPasien{
  width: 90%;
  background-color: #0957DE;
  margin: auto;
  color: white !important;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px;
}
.btnDaftarPasien:hover {
  background-color: white;
  color: #0957DE !important;
}
</style>
