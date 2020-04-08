<template>
  <v-app-bar
      dark
      color="grey darken-2"
      class="barra"
    >
      <router-link to='/'>
      <v-img
        
        src= http://pngimg.com/uploads/emo/emo_PNG68.png
        class="logo"
        max-height= 60
        max-width= 60
      ></v-img>
      </router-link>
      <v-toolbar-title>
        My Emo List
      </v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    name: "Bar"
}
</script>

<style>
    .barra{
        margin-bottom: 12px;
        height: 80px;
    }

    .logo{
        width: 70px;
        height: 70px;    
    }
</style>