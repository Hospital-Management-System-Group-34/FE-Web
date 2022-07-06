<template>
  <div class="pageDataDokter">
    <Header />
    <div class="container2 container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Dokter</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageDataDokter">
      <div class="row">
        <div class="cardDataDokter card">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <h5 class="card-title pl-4">Data Dokter</h5>
              </div>
              <div class="col-6">
                <a href="" class="btnDataDokter btn2 btn btn-block">TAMBAH DATA DOKTER</a>
              </div>
            </div>
            <div class="container-fluid text-center mb-5">
              <div class="row">
                <div class="col-6">
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI UMUM
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          Dr.Keshya Valerie SKy
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="profileDokter" class="btnDataDokter btn btn-block">LIHAT DATA</a>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                  <div class="cardDataDokter card content">
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
                        <a href="" class="btnDataDokter btn btn-block">LIHAT DATA</a>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI THT
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          Dr.Amroni Sp. THT
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btnDataDokter btn btn-block">LIHAT DATA</a>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI MATA
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          Dr.Baki Sp. M
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btnDataDokter btn btn-block">LIHAT DATA</a>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI ANAK
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          Dr.Valen Sp. A
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btnDataDokter btn btn-block">LIHAT DATA</a>
                        <small class="small">Jadwal: Senin - Minggu</small>
                      </div>
                    </div>
                  </div>
                  <div class="cardDataDokter card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI GIGI
                          </strong>
                        </h5>
                        <h5 class="text mb-5">
                          Dr.Trisna Sp. KG
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btnDataDokter btn btn-block">LIHAT DATA</a>
                        <small class="small">Jadwal: Senin - Minggu</small>
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
.pageDataDokter{
  background-color: whitesmoke;
  height: 100vh;
}
.small{
  color: #0957DE;
}
.progress{
  width: 278px;
  margin: auto;
}
.text{
  color: #0957DE;
}
.container2 a {
  text-decoration: none;
  color: grey;
}
.container2 a:hover{
  color: black;
}
.cardDataDokter{
  margin: auto;
  width: 1500px;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.5);
}
.content{
  margin: auto;
  margin-top: 50px;
  width: 650px;
  border: none;
  border-radius: 15px;
  background-color: whitesmoke;
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
.btnDataDokter{
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
.btnDataDokter:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
.btn2{
  width: 40%;
  background-color: rgb(165, 165, 165);
  float: right;
}
.btn2:hover{
  background-color: white;
  border-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}
</style>