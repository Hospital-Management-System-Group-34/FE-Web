<template>
  <div class="page">
    <Header />
    <div class="container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Pasien</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid page">
      <div class="row">
        <div class="card">
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
                    <th scope="row"><h4 class="btn btn-primary">Sedang diproses</h4></th>
                    <td>UM01</td>
                    <td>Tengku Mahmudi</td>
                    <td>27/05/2022</td>
                    <td>
                      <div class="row">
                        <div class="col-6"><a href="detailPasienM" class="btn btn-primary">Lihat</a></div>
                        <div class="col-6"><a href="" class="btn btn-danger">Hapus</a></div>
                      </div>
                    </td>
                  </tr>
                                    <tr>
                    <th scope="row"><h4 class="btn btn-primary">Sedang diproses</h4></th>
                    <td>UM02</td>
                    <td>Cecilia</td>
                    <td>27/05/2022</td>
                    <td>
                      <div class="row">
                        <div class="col-6"><a href="detailPasienM" class="btn btn-primary">Lihat</a></div>
                        <div class="col-6"><a href="" class="btn btn-danger">Hapus</a></div>
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

<style>
.page{
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
.card{
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
.btn{
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