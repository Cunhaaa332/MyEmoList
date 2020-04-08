import Vuex from "vuex";
import Vue from "vue";
import musics from "./modules/musics"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    musics
  }
});