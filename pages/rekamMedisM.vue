<template>
  <div class="page">
    <Header />
    <div class="container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="dataPasien">Data Pasien</a> <strong>></strong>
          <a class="link" href="detailPasienM" style="font-weight: bold"><strong>Detail Pasien</strong></a> <strong>></strong>
          <a class="link" href="riwayatPasienM">Riwayat Pasien</a>
        </div>
      </div>
    </div>
    <div class="container-fluid page">
      <div class="row">
        <div class="card">
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
                  <img class="mt-5" src="~/assets/img/male.png" alt="">
                </div>
                </div>
                <div class="col-6">
                  <div class="row text-center" style="height: auto">
                    <div class="col-6" style="border: 1px solid #0957DE;padding: 10px;border-radius: 7px 0 0 7px">
                      <a class="detail" href="detailPasienM">Detail Pasien</a>
                    </div>
                    <div class="col-6" style="background-color: #0957DE;padding: 10px;border-radius: 0 7px 7px 0">
                      <a class="jadwal" href="rekamMedisM">Rekam Medis</a>
                    </div>
                  </div>
                  <div class="card contentrekam text-center">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI JANTUNG
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          Dr.Rizky Sp. A(k)
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="riwayatPasienM" class="btn btn2 btn-block">Sedang Diproses</a>
                        <small class="small"><strong>Tanggal: 27 Mei 2022</strong></small><br>
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

<style>
.btn2{
  padding: 10px;
}
.page{
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
.btn{
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