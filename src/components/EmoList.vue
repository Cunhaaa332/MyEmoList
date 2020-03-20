<template>
<div>
    <v-app-bar
      dark
      color="grey darken-2"
      class="barra"
    >
      <v-img
        src= http://pngimg.com/uploads/emo/emo_PNG68.png
        class="logo"
        max-height= 60
        max-width= 60
      ></v-img>
      <v-toolbar-title>
        My Emo List
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2">
         <span>SETTINGS</span>
         <v-icon right> settings</v-icon>
      </v-btn>
        <v-btn>
        <span>SIGN IN</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-app-bar>

    <div class="musicBtn">
      <v-btn to=addMusic dark class="ma-6">
        <span>ADD MUSIC</span>
        <v-icon right>add_box</v-icon>
      </v-btn>

      <v-btn dark>
        <span>EDIT LIST</span>
        <v-icon right>create</v-icon>
      </v-btn>
    </div>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
            max-width="700"
            class="card"
          >
            <div class="d-flex">
              <div>
                <v-card-title
                  class="headline font-weight-bold"
                  v-text="item.title"
                ></v-card-title>
                <div class="d-flex">
                  <v-card-subtitle v-text="item.album"></v-card-subtitle>
                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>
              </div>
              <div class="imgENota" >
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
                <div>
                  <v-card-text class="font-weight-medium" v-text="item.nota"></v-card-text>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      </div>
</template>

<script>
  export default {
    name: 'EmoList',

    data: () => ({
    items: [
        {
          color: '#1F7087',
          src: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/dc/The_Black_Parade.jpg/220px-The_Black_Parade.jpg',
          title: 'Welcome to the Black Parade',
          artist: 'My Chemical Romance',
          album: 'The Black Parade',
          critica: 'Um dos hits mais influentes da cena Emo / PopPunk, Welcome to the Black Parade pode ser considerado como "Bohemian Rhapsody" do movimento Emo.',
          nota: 9.9,
          link: 'https://www.youtube.com/watch?v=RRKJiM9Njr8'
        },
        {
          color: '#952175',
          src: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/4/b/2/20088.jpg',
          title: 'Dear Maria, Count Me In',
          artist: 'All Time Low',
          album: 'So Wrong, Its Right',
          critica: 'Um hit sem dúvida influente na cena mais voltada para Scene / Emo, mais animada, e nem um pouco voltada para o lado gótico',
          nota: 9.2,
          link: 'https://www.youtube.com/watch?v=RRKJiM9Njr8'
        },
      ],
  }),
  }
</script>

<style>
  .card{
    display: flex;
    margin: 0 auto;
    
  }

  .barra{
    margin-bottom: 12px;
  }
  
  .musicBtn{
    text-align: center;
  }
  
  .logo{
    width: 70px;
    height: 70px;    
  }

  .imgENota{
    display: flex;
    left: 45px;
  }
</style>
