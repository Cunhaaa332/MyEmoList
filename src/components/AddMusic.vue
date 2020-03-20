<template>
  <v-card class="addMusic">
    <v-toolbar
      flat
      color="grey darken-2"
      dark
    >
      <v-toolbar-title>ADD MUSIC</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field required type="text" label="Song Name" placeholder="Put the song name here..."></v-text-field>
      <v-text-field required type="text" label="Artist" placeholder="Put the artist name here..."></v-text-field>
      <v-text-field type="text" label="Álbum Name" placeholder="Put the álbum name here..."></v-text-field>
      <v-textarea
          name="critic"
          label="Critic"
          placeholder="Insert your critic here..."
          hint="Hint text"
        ></v-textarea>
      <v-text-field type="number" label="Note" placeholder="Put the avaliaton note here..."></v-text-field>
      <v-text-field type="text" label="Music Link" placeholder="Put the music link (if you want)..."></v-text-field>
      <v-text-field type="text" label="Álbum Image Link" placeholder="Put the álbum image link..."></v-text-field>
      
    </v-card-text>
      <v-divider class="my-1"></v-divider>
    <v-card-actions class="d-flex justify-space-between">
      <v-btn
        to=/
        dark
        depressed
      >
        BACK
      </v-btn>
      <v-btn
        submit
        dark
        depressed
      >
        ADD
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'AddMusic',
  }
</script>

<style>
  .addMusic{
    width: 50%;
    height: 100%;
    margin: 0 auto;
  }

</style>