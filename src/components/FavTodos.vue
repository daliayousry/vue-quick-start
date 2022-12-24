<template>
<div>
    <the-header></the-header>
    <b-card class="todo-list-card">
        <h3 class="welcome-msg">{{$t('favTodos')}}</h3><br>
       
    </b-card>
</div>
</template>

<script>
import Vue from 'vue'
import TheHeader from "./TheHeader.vue";
import {BCard} from 'bootstrap-vue'
Vue.component('b-card', BCard)
export default {
    name: 'FavTodos',
    components: {
        TheHeader
    },
    data() {
        return {
        }
    },
 
 async created() {
  
    },
    methods: {
        
    }
}
</script>

<style scoped>
.todo-list-card {
    width: 50%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: -68px;
}

.todo-list-quote {
    margin-top: 27px;
    font-weight: bold;
}

.welcome-msg {
    text-align: left;
}
</style>
