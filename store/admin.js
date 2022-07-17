import axios from "axios"

const state = () =>({
    adminID: '',
    info: '',
    loggedIn: '',
    error: '',
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
        state.error = payload
    }
};

const actions = {
    setAdmin(store, credentials) {
        return axios
        .post('https://shaggy-badger-99.a276.dcdg.xyz/login', {
            id: credentials.id,
            password: credentials.password,
        })

        .then((response)=> {
            console.log(response);
            if (response.data.code === 200){
                store.commit("setLoggedIn", response.data.data.userName);
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
    }
}

export default{
    state,
    mutations,
    actions,
};