<template>
  <div class="page2">
    <Header />
    <div class="container2 container mb-4">
      <div class="row">
        <div>
          <a class="link" href="/adminHome">Home</a> <strong>></strong>
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
                          dr. Jane
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button  id="clinic-1-1" class="btn2 btn btn-block" @click="press1()">LIHAT LIST ANTRIAN</button>
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
                          dr. Peter
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button  id="clinic-3-1" class="btn2 btn btn-block" @click="press3()">LIHAT LIST ANTRIAN</button>
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
                          dr. Strange
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button  id="clinic-5-1" class="btn2 btn btn-block" @click="press5()">LIHAT LIST ANTRIAN</button>
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
                          dr. Richard
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button  id="clinic-2-1" class="btn2 btn btn-block" @click="press2()">LIHAT LIST ANTRIAN</button>
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
                          dr. Wanda
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button  id="clinic-4-1" class="btn2 btn btn-block" @click="press4()">LIHAT LIST ANTRIAN</button>
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
                          dr. Kamala
                        </h5>
                      </div>
                      <div class="col-6 mt-3">
                        <button  id="clinic-6-1" class="btn2 btn btn-block" @click="press6()">LIHAT LIST ANTRIAN</button>
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

  methods:{
    press1(){
      const button = document.querySelector('#clinic-1-1')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setPoliID",button.id)
      this.$router.push("/dataPasien");
    },
        press2(){
      const button = document.querySelector('#clinic-2-1')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setPoliID",button.id)
      this.$router.push("/dataPasien");
    },
        press3(){
      const button = document.querySelector('#clinic-3-1')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setPoliID",button.id)
      this.$router.push("/dataPasien");
    },
        press4(){
      const button = document.querySelector('#clinic-4-1')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setPoliID",button.id)
      this.$router.push("/dataPasien");
    },
        press5(){
      const button = document.querySelector('#clinic-5-1')
      // console.log('your id:', button.id)
      this.$store.commit("admin/setPoliID",button.id)
      this.$router.push("/dataPasien");
    },
        press6(){
      const button = document.querySelector('#clinic-6-1')
      console.log('your id:', button.id)
      this.$store.commit("admin/setPoliID",button.id)
      this.$router.push("/dataPasien");
    }
  },

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