import axios from "axios";

const state={
  musics:[]
};

  const getters = { 
    allMusics: state => state.musics,
    musicById: (state) => (id) => (state.musics = state.musics.filter(m => m.id == id))[0],
  };

  const actions = { //Utiliza a mutacao, seta a resposta da api no nosso estado photos
        fetchMusics({ commit }){  
          axios.get('static/music.json').then((response) => {
          commit('setMusics', response.data);
      });
  },
        addMusic({ commit }, music_add) {
            const new_index =  state.musics[state.musics.length-1].id+1
            const response =  {
                    "userId": 1,
                    "id": new_index,
                    "name": music_add.name,
                    "artist": music_add.artist,
                    "albumName": music_add.albumName,
                    "critc": music_add.critc,
                    "note": music_add.note,
                    "link": music_add.link,
                    "imgLink": music_add.imgLink,
                  }
            commit("new_music",response);
        },

          deleteMusic({ commit }, id) {
            commit("removeMusic", id);
          },
  };

  const mutations = {
    setMusics: (state, musics) => (state.musics = musics),
    new_music: (state, musics) => state.musics.push(musics),
    removeMusic: (state, id) =>
      (state.musics = state.musics.filter(t => t.id !== id)),
  };

  export default {
    state,
    actions,
    getters,
    mutations
  };