<template>
  <div class="pageDataPasien page">
    <Header />
    <div class="containerDataPasien container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Pasien</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageDataPasien page">
      <div class="row">
        <div class="cardDataPasien card">
          <div class="card-body">
            <div class="card-title mb-5">Data Poli Umum</div>
            <div class="row">
              <table class="table text-center">
                <thead>
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Antrian</th>
                    <th scope="col">Nama Lengkap</th>
                    <th scope="col">Jadwal</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><h4 class="btnDataPasien btn btn-primary">Sedang diproses</h4></th>
                    <td>UM01</td>
                    <td>Tengku Mahmudi</td>
                    <td>27/05/2022</td>
                    <td>
                      <div class="row">
                        <div class="col-6"><a href="detailPasienM" class="btnDataPasien btn btn-primary">Lihat</a></div>
                        <div class="col-6"><a href="" class="btnDataPasien btn btn-danger">Hapus</a></div>
                      </div>
                    </td>
                  </tr>
                                    <tr>
                    <th scope="row"><h4 class="btnDataPasien btn btn-primary">Sedang diproses</h4></th>
                    <td>UM02</td>
                    <td>Cecilia</td>
                    <td>27/05/2022</td>
                    <td>
                      <div class="row">
                        <div class="col-6"><a href="detailPasienM" class="btnDataPasien btn btn-primary">Lihat</a></div>
                        <div class="col-6"><a href="" class="btnDataPasien btn btn-danger">Hapus</a></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
.pageDataPasien{
  background-color: whitesmoke;
  height: 100vh;
}
.containerDataPasien a {
  text-decoration: none;
  color: grey;
}
.containerDataPasien a:hover{
  color: black;
}
.cardDataPasien{
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
.btnDataPasien{
  width: 50%;
  border-radius: 7px;
  margin: auto;
  color: white;
  font-size: 1em;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 10px;
}
</style>