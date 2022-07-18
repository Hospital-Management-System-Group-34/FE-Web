<template>
  <div class="pageDetailDokter page">
    <Header />
    <div class="container mb-4">
      <div class="row">
        <div>
          <a class="link" href="/adminHome">Home</a> <strong>></strong>
          <a class="link" href="/dataDokter" style="font-weight: bold"><strong>Data Dokter</strong></a> <strong>></strong>
          <a class="link" href="/detailDokter" style="font-weight: bold"><strong>Detail Dokter</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageDetailDokter page">
      <div class="row">
        <div class="cardDetailDokter card">
          <div class="card-body">
            <h2>
              <strong>
                Detail Data Dokter
              </strong>
            </h2>
              <div>
                <vue-good-table
                  :columns="columns"
                  :rows="rows"/>
              </div>
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
                  <div>
                    <h4 class="mt-4">Nama</h4>
                    <h5 class="label mt-4">Dr. Keshya Valerie Sky</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">No. Izin Praktik</h4>
                    <h5 class="label mt-4">A.123456789</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Alamat</h4>
                    <h5 class="label mt-4">Jl. Soekarno Hatta, Kota Jambi</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Tempat Tanggal Lahir</h4>
                    <h5 class="label mt-4">Kota Jambi, 17 Maret 1989</h5>
                  </div>
                  <div>
                    <h4 class="mt-4">Agama</h4>
                    <h5 class="label mt-4">Islam</h5>
                  </div>
                  <button class="mt-5 btn btn-block">EDIT</button>
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

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

export default {

  middleware: 'auth',

  data(){
    return{
            columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    }
  },

  components: {
  VueGoodTable,
}

}
</script>

<style>
.pageDetailDokter{
  background-color: whitesmoke;
  height: 100vh;
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
.cardDetailDokter{
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
.btn{
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