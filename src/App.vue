<template  >
  <v-app class="geral">
      <div>
        <Bar/>
      </div>
      <router-view/>
  </v-app>
  
</template>

<script>
import Bar from "./components/Bar"
export default {
  name: 'App',
  components:{Bar}
};
</script>
<style>
  #app{
    background-color: darkslategrey;
  }
</style>
