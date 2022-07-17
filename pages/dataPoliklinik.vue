<template>
  <div class="page2">
    <Header />
    <div class="container2 container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Poliklinik</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid page">
      <div class="row">
        <div class="card card2">
          <div class="card-body">
            <h5 class="card-title pl-4">Data Poliklinik</h5>
            <div class="container-fluid text-center mb-5">
              <div class="row">
                <div class="col-6">
                  <div class="card2 card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI UMUM
                          </strong>
                        </h5>
                        <h5 class="text">
                          Dr.Keshya Valerie SKy
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="/dataPasien" class="btn2 btn btn-block">LIHAT LIST ANTRIAN</a>
                        <div class="progress mb-4">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="20">10/20 Kuota terisi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card2 card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI JANTUNG
                          </strong>
                        </h5>
                        <h5 class="text">
                          Dr.Rizky Sp. A(k)
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btn2 btn btn-block">LIHAT LIST ANTRIAN</a>
                        <div class="progress mb-4">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="20">10/20 Kuota terisi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card2 card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI THT
                          </strong>
                        </h5>
                        <h5 class="text">
                          Dr.Amroni Sp. THT
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btn2 btn btn-block">LIHAT LIST ANTRIAN</a>
                        <div class="progress mb-4">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="20">10/20 Kuota terisi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card2 card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI MATA
                          </strong>
                        </h5>
                        <h5 class="text">
                          Dr.Baki Sp. M
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btn2 btn btn-block">LIHAT LIST ANTRIAN</a>
                        <div class="progress mb-4">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="20">10/20 Kuota terisi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card2 card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI ANAK
                          </strong>
                        </h5>
                        <h5 class="text">
                          Dr.Valen Sp. A
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btn2 btn btn-block">LIHAT LIST ANTRIAN</a>
                        <div class="progress mb-4">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="20">10/20 Kuota terisi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card2 card content">
                    <div class="row">
                      <div class="col-6 mt-4">
                        <h5>
                          <strong>
                            POLI GIGI
                          </strong>
                        </h5>
                        <h5 class="text">
                          Dr.Trisna Sp. KG
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <a href="" class="btn2 btn btn-block">LIHAT LIST ANTRIAN</a>
                        <div class="progress mb-4">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="20">10/20 Kuota terisi</div>
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
  </div>
</template>

<script>
export default {

  middleware: 'auth',

}
</script>

<style>
.page2{
    background-color: whitesmoke;
    height: 100vh;
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
.card2{
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
.btn2{
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
.btn2:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
</style>