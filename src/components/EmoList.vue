<template>
<div>

    <div class="musicBtn">
      <v-btn @click='toggle = !toggle' dark class="ma-6" >
        <span>ADD MUSIC</span>
        <v-icon right>add_box</v-icon>
      </v-btn>
    </div>
    <div v-show='toggle'>
      <AddMusic/>
    </div>
      <v-row>
        <v-col
          v-for="music in allMusics"
          :key="music.id"
          :id="music.id"
          cols="12"
        >
          <v-card
            max-width="500"
            class="card"
            
      
          >
            <div 
              :class="verificaNota(music.note)"
              class="pai"
              >
              <div >
                <v-card-title
                  class="headline font-weight-bold"
                > {{music.name}} </v-card-title>
                <div class="d-flex">
                  <v-card-subtitle>Album: {{music.albumName}}</v-card-subtitle>
                  <v-card-subtitle>Artista: {{music.artist}}</v-card-subtitle>
                </div>
              </div>
              <v-spacer></v-spacer>
              <div class="imgENota" >
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="music.imgLink"></v-img>
                </v-avatar>
                <div>
                  <v-card-text class="font-weight-medium">Nota: {{music.note}}</v-card-text>
                  <v-btn :to="{name:'music',params:{id:music.id}}" dark class="btnVerMais">
                    VER MAIS
                  </v-btn> 
                </div>
                  <v-icon right @click="deleteMusic(music.id)" class="lixeira">delete</v-icon>     
              </div>
            </div>
            
              
            
          </v-card>
        </v-col>
      </v-row>
      </div>
</template>

<script>
import AddMusic from "./AddMusic"
import { mapGetters, mapActions } from "vuex";
export default {
  data () {
   return {
     toggle: false
   }
 },
  name: "EmoList",methods: {
    ...mapActions(["fetchMusics","deleteMusic"]),
    verificaNota(nota){
        if(nota==5){
          return "cardInsideNote5"
        }else if(nota <5 && nota >=3){
          return "cardInsideNote3e4"
        }else{
          return "cardInsideNote2e1"
        }
    }
  },
  components:{AddMusic},
  computed: mapGetters(["allMusics"]),
  created() {
    this.fetchMusics();
  } 
  
 
};
</script>

<style>
  .card{
    display: flex;
    margin: 0 auto;
    
    
  }

  .cardInsideNote5{
    background-color: #f0a90a;
    display: flex;
  }

  .cardInsideNote3e4{
    background-color: #e3e5e4;
    display: flex;
  }

  .cardInsideNote2e1{
    background-color: #9c5221;
    display: flex;
  }

  
  
  .musicBtn{
    text-align: center;
  }
  
 

  .imgENota{
    display: flex;
    float: right;
  }

  .lixeira{
    bottom: 0;
    left: 0;
    height: 40px;
    position: fixed;
    width: 100%;
  }

  .btnVerMais{
    width: 17%;
    position: absolute;
    bottom: 5px;
    right: 5px;
    margin-left: 5px;
   
  }
  .pai{
    position: relative;
  }
</style>
