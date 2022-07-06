<template>
  <div class="pageJadwalPraktik page">
    <Header />
    <div class="containerJadwalPraktik container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Dokter</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageJadwalPraktik page">
      <div class="row">
        <div class="cardJadwalPraktik card">
          <div class="card-body">
            <h2>
              <strong>
                Detail Data Dokter
              </strong>
            </h2>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <div class="card content text-center">
                    <img src="~/assets/img/Ava.png" alt="" class="card-img-top">
                    <div class="card-body" style="padding-bottom: 20px">
                      <div class="card-text">
                        <h4>
                          <strong>
                            Dr. Keshya Valerie Sky
                          </strong>
                        </h4>
                        <h4 class="category mt-4">UMUM</h4>
                        <h4 class="mt-3" style="color: #9B9B9B">
                          Senin - Sabtu
                        </h4>
                        <h4 class="mt-3" style="color: #C4C3C3">
                          (021) - 123456789
                        </h4>
                      </div>
                    </div>
                      <div class="card-title">
                        <a href="">Lihat Surat Izin</a>
                      </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row text-center" style="height: auto">
                    <a class="col-6" href="profileDokter" style="border: 1px solid #0957DE;padding: 10px;border-radius: 7px 0 0 7px">
                      <div class="detail" >Profile Dokter</div>
                    </a>
                    <a class="col-6" href="jadwalPraktik" style="background-color: #0957DE;padding: 10px;border-radius: 0 7px 7px 0">
                      <div class="jadwal" >Jadwal Praktik</div>
                    </a>
                  </div>
                  <div>
                    <h4 class="mt-4">Senin</h4>
                    <h5 class="label mt-4">08:00 - 11:00</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Selasa</h4>
                    <h5 class="label mt-4">08:00 - 11:00</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Rabu</h4>
                    <h5 class="label mt-4">08:00 - 11:00</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Kamis</h4>
                    <h5 class="label mt-4">08:00 - 11:00</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Jumat</h4>
                    <h5 class="label mt-4">08:00 - 11:00</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Sabtu</h4>
                    <h5 class="label mt-4">08:00 - 11:00</h5>
                  </div>
                  <button class="mt-5 btnJadwalPraktik btn btn-block">EDIT</button>
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
.pageJadwalPraktik{
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
.containerJadwalPraktik a {
  text-decoration: none;
  color: grey;
}
.containerJadwalPraktik a:hover{
  color: black;
}
.cardJadwalPraktik{
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
.btnJadwalPraktik{
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
.btnJadwalPraktik:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
.btnJadwalPraktik2{
  width: 40%;
  background-color: rgb(165, 165, 165);
  float: right;
}
.btnJadwalPraktik2:hover{
  background-color: white;
  border-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}
</style>