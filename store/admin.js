import axios from "axios"

const state = () =>({
    adminID: '',
    info: '',
    loggedIn: '',
    error: '',
    patientID: '',
    poliID:'',
    doctorID:'',
});

const mutations = {
    setID(state, payload){
        state.adminID = payload;
    },
    setLoggedIn(state, payload){
        state.loggedIn = payload;
    },
    setInfo(state, payload){
        state.info = payload;
    },
    setError(state, payload){
        state.error = payload;
    },
    setPatientID(state, payload){
        state.patientID = payload;
    },
    setPoliID(state, payload){
        state.poliID = payload;
    },
    setDoctorID(state, payload){
        state.doctorID = payload;
    },
};

const actions = {
    setAdmin(store, credentials) {
        return axios
        .post('https://shaggy-badger-99.a276.dcdg.xyz/login', {
            id: credentials.id,
            password: credentials.password,
        })

        .then((response)=> {
            if (response.data.code === 200){
                store.commit("setLoggedIn", response.data.data.userName);
                this.$auth.setRefreshToken('local', response.data.data.refreshToken);
                return response;
            }
            else{
                store.commit("setInfo", response.data.status);
            }
        })

        .catch((error) => {
            store.commit("setInfo", "email atau password salah");
            store.commit("setError", error)
        });
    },
    setNewPatient({store, state}, identity){
        return axios
        .post('https://shaggy-badger-99.a276.dcdg.xyz/patients', {
            nik: identity.nik,
            name: identity.name,
            phone: identity.phone,
            gender: identity.gender,
        },
        )

        .then((response) => {
            if (response.data.code === 200){
                store.commit("setPatientID", response.data.data.patient.id);
                return axios
                .post('https://shaggy-badger-99.a276.dcdg.xyz/sessions', {
                    patientID: state.patientID,
                    clinicID: identity.clinicID,
                    doctorID: identity.doctorID,
                    scheduleID: identity.scheduleID,
                    complaint: identity.complaint,
                    date: identity.date,
                },
                )

                .then((res) => {
                    if (res.data.code === 200){
                        this.$router.push('/daftarBerhasil');
                    }
                    else{
                        store.commit("setInfo", response.data.status);
                    }
                })
            }
            else{
                store.commit("setInfo", response.data.status);
            }
        })

    }
}

export default{
    state,
    mutations,
    actions,
};