<template>
  <div class="pageDataPasien page">
    <Header />
    <div class="containerDataPasien container mb-4">
      <div class="row">
        <div>
          <a class="link" href="/adminHome">Home</a> <strong>></strong>
          <a class="link" href="/dataPoliklinik" >Data Poliklinik</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Pasien</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid pageDataPasien page">
      <div class="row">
        <div class="cardDataPasien card">
          <div class="card-body">
            <div class="card-title mb-5">Data Poli {{idPoli}}</div>
               <div class="table-responsive-sm">
                <vue-good-table
                    :columns="columns"
                    :rows="filteredSessions"
                    :pagination-options="{
                    enabled: true,
                    mode: 'pages'
                    
                    }"
                    :search-options="{
                    enabled: true,
                    placeholder: 'Search Name'
                    }"
                    >

                    <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'status'">
                      <div class="text-center">
                        <h5 class="status">{{props.row.status}}</h5>
                      </div>
                    </span>
                      <span v-if="props.column.field == 'action'">
                        <button id="tombol" itemid="props.row.index" class="btn btn-primary" @click="editRow(props.row.originalIndex)">Edit</button>
                        <button id="2" class="btn btn-danger" @click="deleteRow(props.row.index)">Delete</button>
                      </span>
                      <span v-else>
                        {{props.formattedRow[props.column.field]}}
                      </span>
                    </template>

                </vue-good-table>

                <span>{{ nama }}</span>
                <!-- <div v-for="sessions in dataSessions" :key="sessions.id">
                  {{sessions.complaint}}
                </div> -->
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
          idPoli: '',
          dataSessions: [],
          kolom: [
            {
              label: "1",
              field: "1"
            },
            {
              label: "2",
              field: "2"
            },
            {
              label: "3",
              field: "3"
            },
                        {
              label: "4",
              field: "4"
            },
            {
              label: "5",
              field: "5"
            },
            {
              label: "6",
              field: "6"
            },
                        {
              label: "7",
              field: "7"
            },
            {
              label: "8",
              field: "8"
            },
            {
              label: "9",
              field: "9"
            },
          ] ,
          baris: [] ,
            columns: [
        {
          label: "Status",
          field: "status",
          sortable: true,
          searchable: true,
        },
        {
          label: 'Antrian',
          field: 'queueCode',
          sortable: true,
          searchable: true,
        },
        {
          label: 'Nama Lengkap',
          field: 'patientID',
          type: 'text',
          sortable: true,
          searchable: true,
        },
        {
          label: "Jadwal",
          field: "date",
          type: "date",
          dateInputFormat: 'yyyy-mm-dd',
          dateOutputFormat: 'MMMM dd yyyy',
          sortable: true,
        },
        {
          label: 'Action',
          field: 'action'
        },
      ],
      rows: [
        { status: "", id: 1, nama: "B", jadwal: '19-07-2022' },
        { status: "", id: 2, nama: "A", jadwal: '18-07-2022' },
        { status: "", id: 3, nama: "A", jadwal: '16-07-2022' },
        { status: "", id: 4, nama: "A", jadwal: '17-07-2022' },
      ],
      nama: '',
      id: 0,
    }
  },

  methods: {
  	editRow(param) {
      // console.log('your id:', this.filteredSessions[param].patientID )
      this.$store.commit("admin/setPatientID",this.filteredSessions[param].patientID)
      this.$router.push("/detailPasienM");
    },
    deleteRow(id) {
    	this.showAlert(id, 'HAPUS')
      console.log("Removing", id);
      this.rows.splice(id, 1);
    },
    showAlert(id, type) {
    	this.nama = `You clicked ${type} on row ID ${id}`
    },
    async fetchSessions(){
      try{
      const resp = await this.$axios.$get(`https://shaggy-badger-99.a276.dcdg.xyz/sessions`)
      console.log(resp.data)
      this.dataSessions = resp.data

    } catch(e) {
      console.log(e.response)
    }
    },
    cekPoli(){
      if(this.computedPoliID == 'clinic-1-1'){
        this.idPoli = "Umum"
      }
            if(this.computedPoliID == 'clinic-2-1'){
        this.idPoli = "Mata"
      }
            if(this.computedPoliID == 'clinic-3-1'){
        this.idPoli = "Jantung"
      }
            if(this.computedPoliID == 'clinic-4-1'){
        this.idPoli = "Anak"
      }
            if(this.computedPoliID == 'clinic-5-1'){
        this.idPoli = "THT"
      }
            if(this.computedPoliID == 'clinic-6-1'){
        this.idPoli = "Gigi"
      }
    }
  },
  mounted(){
    this.fetchSessions();
    this.cekPoli();
  },
  computed: {

    console: () => console,

    currentVal(){
      return this.filteredSessions[this.id]
    },

    filteredSessions() {
    let tempSessions = this.dataSessions
    
    tempSessions = tempSessions.filter((item) => {
      return (item.queueCode == this.computedPoliID)
    })
    
    return tempSessions;
  },
      computedPoliID(){
      return this.$store.state.admin.poliID;
    }

  },
  components: {
    VueGoodTable,
  }
  ,


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
.status{
  background-color: rgb(0, 202, 202);
  color: white;
  padding: 5px;
  border-radius: 10px;
}
</style>