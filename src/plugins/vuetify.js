import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
          background: colors.grey.darken4
        },
        dark: {
            primary: colors.blue.lighten3, 
            background: colors.indigo.base, // If not using lighten/darken, use base to return h
        },
      },
    },
  })