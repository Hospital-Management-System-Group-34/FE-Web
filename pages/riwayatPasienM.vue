<template>
  <div class="pageRiwayatPasien page">
    <Header />
    <div class="containerRiwayatPasien container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a href="dataPasien">Data Pasien</a> <strong>></strong>
          <a href="detailPasienM">Detail Pasien</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Riwayat Pasien</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageRiwayatPasien page">
      <div class="row">
        <div class="cardRiwayatPasien card mb-5">
          <div class="card-body">
            <h2>
              <strong>
                Detail Pasien
              </strong>
            </h2>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6" style="padding-left: 40px">
                  <img class="mt-5" src="~/assets/img/male.png" alt="">
                </div>
                <div class="col-6">
                  <div>
                    <h4 class="mt-4">NIK</h4>
                    <h5 class="label mt-4">1234567890</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Tanggal Kunjungan</h4>
                     <div class="row">
                      <div class="col-6"><h5 class="label mt-4">27/05/2022</h5></div>
                      <div class="col-6"><h5 class="label mt-4">08:00 - 11:00</h5></div>
                     </div>
                  </div>
                  <div>
                    <h4 class="mt-4">Amnesia</h4>
                    <h5 class="label mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo modi natus laudantium, vitae voluptatem quidem obcaecati itaque laborum sequi officiis eligendi sapiente placeat harum minus recusandae tempore repudiandae optio? Officiis!</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Riwayat Alergi Obat</h4>
                     <div class="row">
                      <div class="col-6"><h5 class="label mt-4">Obat</h5></div>
                      <div class="col-6"><h5 class="label mt-4">Tidak Ada</h5></div>
                     </div>
                  </div>
                  <div>
                    <h4 class="mt-4">Terapi Obat</h4>
                    <h5 class="label mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus dolores nam hic id quod commodi dolorem eligendi pariatur rerum? Repellat magnam ea amet similique nesciunt optio fuga facilis incidunt.</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Diagnosa</h4>
                    <h5 class="label mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus dolores nam hic id quod commodi dolorem eligendi pariatur rerum? Repellat magnam ea amet similique nesciunt optio fuga facilis incidunt.</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Pemeriksaan Fisik</h4>
                     <div class="row">
                      <div class="col-6">
                        <h4 class="mt-4">Tinggi Badan (cm)</h4>
                        <h5 class="label mt-4">175</h5></div>
                      <div class="col-6">
                        <h4 class="mt-4">Berat Badan (KG)</h4>
                        <h5 class="label mt-4">80</h5></div>
                     </div>
                  </div>
                  <div>
                    <h4 class="mt-4">Tekanan Darah</h4>
                     <div class="row">
                      <div class="col-6">
                        <h4 class="mt-4">Sistole (mmHg)</h4>
                        <h5 class="label mt-4">90</h5>
                        <h4 class="mt-4">Suhu (C)</h4>
                        <h5 class="label mt-4">34</h5>
                      </div>
                      <div class="col-6">
                        <h4 class="mt-4">Diastole (mmHg)</h4>
                        <h5 class="label mt-4">60</h5></div>
                     </div>
                  </div>
                  <div>
                    <h4 class="mt-4">Status Pulang</h4>
                    <h5 class="label mt-4">Rawat Jalan</h5>
                  </div>
                  <h4 class="mt-4">*Pastikan semua data terisi dengan benar</h4>
                  <button class="mt-5 btnRiwayatPasien btn btn-block">EDIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
.card-body{
  padding: 50px;
}
.card-title{
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