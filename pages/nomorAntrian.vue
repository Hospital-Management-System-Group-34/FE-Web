<template>
  <div id="content" class="pageAntrian page">
    <div class="container-fluid text-center">
      <h1 style="color: #0957DE">
        <strong>
          KARTU ANTRIAN
        </strong>
      </h1>
        <div class="cardAntrian card mt-5">
          <div class="card-title">
            No Antrian
          </div>
          <div class="card-body">
            <div class="content">
              <h1 class="mt-5 mb-4">
                <strong>UM01</strong> <br>
                <span>
                  <h3>
                    Senin
                  </h3>
                </span>
              </h1>
            </div>
            <div class="content mt-3">
              <h4>Dokter</h4>
              <h2>
                <strong>dr.Liza Amalia Putri</strong>
              </h2>
            </div>
            <div class="mt-3">
              <div class="container overflow-hidden">
                <div class="row gx-5">
                  <div class="col left">
                    <div class="p-3 content">
                      <h5>Poli Tujuan</h5>
                       <strong>
                      <h4 style="font-weight: bold">POLI MATA</h4>
                      </strong>
                    </div>
                  </div>
                  <div class="col right">
                    <div class="p-3 content">
                      <h5>Nama</h5>
                       <strong>
                      <h4 style="font-weight: bold">Tengku Mahmudi</h4>
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
                      <h4 style="font-weight: bold">PS.123456789</h4>
                      </strong>
                    </div>
                  </div>
                  <div class="col right">
                    <div class="p-3 content">
                      <h5>Waktu</h5>
                       <strong>
                      <h4 style="font-weight: bold">08:00-11:00</h4>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div class="row mt-5 text-center">
            <div class="col-4">
              <a href="adminHome" class="btn btn1 btn-block">Home</a>
            </div>
            <div class="col-4">
              <a href="daftarPasien" class="btn btn2 btn-block">Daftar Lagi</a>
            </div>
            <div class="col-4">
              <a @click="createPDF" class="btn btn3 btn-block">Print</a>
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

export default {

  middleware: 'auth',

  methods: {
  async cekData(){
    try{
      const resp = await this.$axios.$get('http://18.141.205.74:9000/patients')
      console.log(resp.data)
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

  createPDF () {
    const doc = new jsPDF()

    console.log(this.$refs);
    const html = this.$refs.content.innerHTML

    doc.fromHTML(html,15,15,{
      width: 150
    })

    doc.save("output.pdf")
  }

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