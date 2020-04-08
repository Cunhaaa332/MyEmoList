<template>
  <v-card class="addMusic"
  dark >
    <v-toolbar
      flat
      color="grey darken-2"
      dark
    >
      <v-toolbar-title>ADD MUSIC</v-toolbar-title>
    </v-toolbar>
    <form @submit.prevent="onSubmit()">
      <v-card-text>
        <v-text-field required type="text" v-model="name" label="Song Name" placeholder="Put the song name here..."></v-text-field>
        <v-text-field required type="text" v-model="artist" label="Artist" placeholder="Put the artist name here..."></v-text-field>
        <v-text-field type="text" v-model="albumName" label="Álbum Name" placeholder="Put the álbum name here..."></v-text-field>
        <v-textarea
            v-model="critc"
            name="critic"
            label="Critic"
            placeholder="Insert your critic here..."
            hint="Hint text"
          ></v-textarea>
        <v-text-field type="number" v-model="note" label="Note" min="1" max="5" placeholder="Put the avaliaton note here..."></v-text-field>
        <v-text-field type="text" v-model="link" label="Music Link" placeholder="Put the music link (if you want)..."></v-text-field>
        <v-text-field type="text" v-model="imgLink" label="Álbum Image Link" placeholder="Put the álbum image link..."></v-text-field>
        
      </v-card-text>
        <v-divider class="my-1"></v-divider>
      <v-card-actions class="d-flex justify-space-between">
        <input type="submit" class="btnAdd" value="ADD">
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
  import { mapActions } from "vuex";
export default {
  name: "AddMusic",
  data() {
    return {
     
        name: "",
        artist: "",
        albumName: "",
        critc: "",
        note: 0,
        link: "",
        imgLink: "",
      
      
    };
  },
  methods: {
    ...mapActions(["addMusic"]),
    onSubmit() {
       let music_add={
        name: this.name,
        artist: this.artist,
        albumName: this.albumName,
        critc: this.critc,
        note: this.note,
        link: this.link,
        imgLink: this.imgLink,
      }
      this.addMusic(music_add);
    }
  }
};
</script>

<style>
  .addMusic{
    width: 50%;
    height: 100%;
    margin: 0 auto;
  }
  .btnAdd{
    text-align: center;
  }

</style>