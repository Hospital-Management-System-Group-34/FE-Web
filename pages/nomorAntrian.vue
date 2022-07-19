<template>
  <div id="content" ref="content" class="pageAntrian page">
    <div class="container-fluid text-center">
      <h1 style="color: #0957DE">
        <strong>
          KARTU ANTRIAN
        </strong>
      </h1>
        <div id="card" ref="card" class="cardAntrian card mt-5">
          <div class="card-title">
            No Antrian
          </div>
          <div class="card-body">
            <div class="content">
              <h1 class="mt-5 mb-4">
                <strong>UM01</strong> <br>
                <span>
                  <h3>
                    {{date}}
                  </h3>
                </span>
              </h1>
            </div>
            <div class="content mt-3">
              <h4>Dokter</h4>
              <h2>
                <strong>{{doctorID}}</strong>
              </h2>
            </div>
            <div class="mt-3">
              <div class="container overflow-hidden">
                <div class="row gx-5">
                  <div class="col left">
                    <div class="p-3 content">
                      <h5>Poli Tujuan</h5>
                       <strong>
                      <h4 style="font-weight: bold">{{clinicID}}</h4>
                      </strong>
                    </div>
                  </div>
                  <div class="col right">
                    <div class="p-3 content">
                      <h5>Nama</h5>
                       <strong>
                      <h4 style="font-weight: bold">{{patientName}}</h4>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <div class="container overflow-hidden">
                <div class="row gx-5">
                  <div class="col left">
                    <div class="p-3 content">
                      <h5>No.Rekam Medis</h5>
                       <strong>
                      <h4 style="font-weight: bold">PS.{{medRecord}}</h4>
                      </strong>
                    </div>
                  </div>
                  <div class="col right">
                    <div class="p-3 content">
                      <h5>Waktu</h5>
                       <strong>
                      <h4 style="font-weight: bold">{{scheduleID}}</h4>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div class="row mt-5 text-center">
            <div class="col-6">
              <a href="/adminHome" class="btn btn1 btn-block">Home</a>
            </div>
            <!-- <div class="col-4">
              <a href="/daftarPasien" class="btn btn2 btn-block">Daftar Lagi</a>
            </div> -->
            <div class="col-6">
              <a @click="pdfGenerate" class="btn btn3 btn-block">Print</a>
              <!-- <a @click="cekData" class="btn btn3 btn-block">Print</a> -->
            </div>
          </div>

    </div>
  </div>
</template>

<script src="@/assets/js/app.js">
</script>
<script>

import { jsPDF } from "jspdf"

import html2canvas from 'html2canvas'

export default {

  middleware: 'auth',

  data(){
    return {
      date: '',
      doctorID: '',
      clinicID: '',
      patientName: '',
      scheduleID: '',
      medRecord: '',
    }
  },
  created(){

  },

  methods: {
  async cekData(){

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
      // console.log(resp.data.medicalRecord.slice(-16))

      const d = new Date(resp.data.sessions[0].date);
      const docID = resp.data.sessions[0].doctorID.slice(-1);
      const ClinicID = resp.data.sessions[0].clinicID.slice(-1);
      const scheduleIdentifier = resp.data.sessions[0].scheduleID.slice(-1);
      const medRec = resp.data.medicalRecord.slice(-16);
      
      let day = d.getDay();
      this.date = weekday[day],

      
      this.doctorID = dokter[docID],
      this.clinicID = poli[ClinicID] ,
      this.patientName = resp.data.name,
      this.scheduleID = jadwal[scheduleIdentifier],
      this.medRecord = medRec
    } catch(e) {
      console.log(e.response)
    }
  
  // console.log(
  //   this.patientName,
  //   this.patientGender,
  //   this.patientNik,
  //   this.patientPhone,
  // )
},

  pdfGenerate(){
    const quality = 1 // Higher the better but larger file

    html2canvas(document.querySelector('#content'),
     { 
      scale: quality
     }
      ).then(canvas => {
        const pdf = new jsPDF('l', 'mm', 'a4');
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, width, height);
        pdf.save('op.pdf');
      });
  }

},

  computed: {
    storedPatientID(){
      return this.$store.state.admin.patientID
    }
  },

  mounted(){
      this.cekData();
    }

}
</script>

<style>
.pageAntrian{
  background-image: url("~/assets/img/bgantrian.png");
  height: 100vh;
  background-size: cover;
  display: flex;
  margin: 0px;
}
.container-fluid{
  margin: auto;
  margin-top: 100px;
  width: 650px  ;
}
.cardAntrian{
  border: none;
  border-radius: 10px;
}
.card-title{
  background-color: #70a4fd;
  color: white;
  font-size: 2em;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
}
.content{
  padding: 5px;
  border-style: groove;
  border-color: #0957DE;
  border-width: thin;
  border-radius: 5px;
}
.left{
  padding-left: 0px;
}
.right{
  padding-right: 0px;
}
.btn1{
  background-color: #70a4fd;
  color: white;
  font-weight: bold;
}
.btn1:hover{
  background-color: white;
  border-color: #70a4fd;
  color: #70a4fd;
  font-weight: bold;
}
.btn2{
  background-color: #0957DE;
  color: white;
  font-weight: bold;
}
.btn2:hover{
  background-color: white;
  border-color: #0957DE;
  color: #0957DE;
  font-weight: bold;
}
.btn3{
  background-color: rgb(0, 202, 202);
  color: white;
  font-weight: bold;
}
.btn3:hover{
  background-color: white;
  border-color: rgb(0, 202, 202);
  color: rgb(0, 202, 202);
  font-weight: bold;
}
</style>