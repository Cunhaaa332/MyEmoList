<template>
    <div>
        <v-card
        class="mx-auto my-12"
        max-width="374"
        dark
        >
            <v-img
            width="150"
            height="150"
            :src="musicById(id).imgLink"
            class="img"
            ></v-img>

            <v-card-title>{{ musicById(id).name }}</v-card-title>
            <v-card-subtitle></v-card-subtitle>

            <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                Artista: {{ musicById(id).artist }}, Album: {{ musicById(id).albumName }}
                <v-rating
                :value="musicById(id).note"
                class="ms-3"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                ></v-rating>

                <div class="grey--text ml-1">{{ musicById(id).note }}</div>
            </v-row>

            <v-divider class="mx-0"></v-divider>

            <div>{{ musicById(id).critc }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
            <a :href="musicById(id).link" target="_blank">
                <v-btn>
                    Listen Now
                </v-btn>
            </a>
            </v-card-actions>
        </v-card>
    </div>
        
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:"Music",

    data: function()
    {return{ id : this.$route.params.id  };
    },computed: {
        ...mapGetters(["musicById",])
    }
}
</script>

<style>
    .img{
        margin: 0 auto;
    }
</style>