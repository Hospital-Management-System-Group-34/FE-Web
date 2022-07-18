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
        <div class="cardDaftarPasien card">
          <div class="card-body">
            <h5 class="card-title">PENDAFTARAN</h5>
             <div class="card-text">
                <form method="post" class="form mt-5" @submit.prevent="submitRegist">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="nik" class="label">NIK</label>
                      <input type="number" class="form-control mb-2" v-model="patientNik" id="nik" placeholder="Masukkan nomer NIK" required>
                      <small class="text">*NIK harus 16 digit</small> <br>

                      <label for="norek" class="label mt-4">No. Rekam Medis</label>
                      <input type="text" class="form-control mb-2" id="norek" placeholder="PS.123456789">

                      <label for="name" class="label mt-4">Nama Lengkap</label>
                      <input type="text" class="form-control mb-2" v-model="patientName" id="name" placeholder="Alterra" required>

                      <label for="no" class="label mt-4">No. HP</label>
                      <input type="number" class="form-control mb-2" v-model="patientPhone" id="no" placeholder="082213273168" required>

                      <label for="sex" class="label mt-4">Jenis Kelamin</label>
                        <select id="sex" class="form-control" v-model="patientGender" required>
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
                          <option value="doctor-1">dr.Keshya Valerie Sky (UMUM)</option>
                          <option value="doctor-2">dr.rizky Sp.A(K) (JANTUNG)</option>
                          <option value="doctor-3">dr.Amroni Sp.THT</option>
                          <option value="doctor-4">dr.Valen Sp.A (ANAK)</option>
                          <option value="doctor-5">dr.Baki Sp.M (MATA)</option>
                          <option value="doctor-6">dr.Trisna Sp.KG (GIGI)</option>
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
            patientNik: "",
            patientName: "",
            patientPhone: "",
            patientGender: "",
            patientClinicID: "",
            patientDoctorID: "",
            patientScheduleID: "",
            patientComplaint: "",
            patientDate: "",
            error: null,
        };
    },
    methods: {
        async submitRegist() {
          if(this.patientNik.length === 16){
            try {
                await this.$axios.$post("https://shaggy-badger-99.a276.dcdg.xyz/patients", {
                    nik: this.patientNik,
                    name: this.patientName,
                    phone: this.patientPhone,
                    gender: this.patientGender
                })
                    // console.log(data)
                    // 
                    .then((response) => {
                    console.log(response.data.patient.id);
                    if (response.code === 200) {
                        try {
                            this.$axios.$post("https://shaggy-badger-99.a276.dcdg.xyz/sessions", {
                                patientID: response.data.patient.id,
                                clinicID: this.patientClinicID,
                                doctorID: this.patientDoctorID,
                                scheduleID: this.patientScheduleID,
                                complaint: this.patientComplaint,
                                date: this.patientDate,
                            })
                                .then((res) => {
                                if (res.code === 200) {
                                    this.$router.push("/daftarBerhasil");
                                    this.$store.commit("admin/setPatientID", response.data.patient.id)
                                }
                                else {
                                    console.log(res.status);
                                    this.error = "Data Sudah ada, cek kembali data Anda";
                                    alert("Please correct the following error(s): \n" + `${this.error}`);
                                }
                            });
                        }
                        catch (err) {
                            console.log(err.message);
                            this.error = "Data Sudah ada, cek kembali data Anda";
                            alert("Please correct the following error(s): \n" + `${this.error}`);
                        }
                    }
                    else {
                        console.log(response.status);
                        this.error = "Data Sudah ada, cek kembali data Anda";
                        alert("Please correct the following error(s): \n" + `${this.error}`);
                    }
                });
            }
            catch (e) {
                console.log(e.message);
                this.error = "Data Sudah ada, cek kembali data Anda";
                alert("Please correct the following error(s): \n" + `${this.error}`);
            }
          }
          else{
            this.error = "Data Nik tidak terdiri dari 16 Digit, tolong periksa kembali!";
            alert("Please correct the following error(s): \n" + `${this.error}`);
          } 
            // this.$store.dispatch("admin/setNewPatient",{
            //   nik: this.patientNik,
            //   name: this.patientName,
            //   phone: this.patientPhone,
            //   gender: this.patientGender,
            //   clinicID: this.patientClinicID,
            //   doctorID: this.patientDoctorID,
            //   scheduleID: this.patientScheduleID,
            //   complaint: this.patientComplaint,
            //   date: this.patientDate,
            // })
            // console.log(
            //   this.patientName,
            //   this.patientGender,
            //   this.patientNik,
            //   this.patientPhone,
            //   this.patientClinicID,
            //   this.patientDoctorID,
            //   this.patientScheduleID,
            //   this.patientComplaint,
            //   this.patientDate,
            // )
        }
    },
}
</script>

<style>
.pageDaftarPasien{
    background-color: whitesmoke;
    height: 100vh;
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
