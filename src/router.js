import VueRouter from 'vue-router';
import EmoList from './components/EmoList.vue'
import AddMusic from './components/AddMusic.vue'
import Music from './components/Music.vue'

 
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'emoList',
            component: EmoList
        },
        {
            path: '/addMusic',
            name: 'addMusic',
            component: AddMusic
        },
        {
            path: '/music/:id',
            name: 'music',
            component: Music
        },
    ]
});