<template>
<div>
    <the-header></the-header>
    <b-card class="todo-list-card">
        <h3 class="welcome-msg">{{$t('message')}} {{ name | prepend('Dr.')}}</h3><br>
        <todo-list :todos="$store.state.todos" @setFavTask="setFavTask">
            <p v-if="quotes" class="todo-list-quote" slot="quote">🤗 {{quotes[Math.floor(Math.random() * 1000) + 1].text}}</p>
        </todo-list>
      <router-link to="/FavTodos">Go to FavTodos</router-link> 
    </b-card>
</div>
</template>

<script>
import Vue from 'vue'
import TheHeader from "./TheHeader.vue";
import TodoList from "./TodoList.vue"
import {BCard} from 'bootstrap-vue'
Vue.component('b-card', BCard)
export default {
    name: 'VueTodoList',
    components: {
        TodoList,
        TheHeader
    },
    data() {
        return {
       
            name: 'Dalia',
            quotes:null
        }
    },
    filters: {
        prepend(name, prefix) {
            return `${prefix} ${name}`;
        }
    },
 async created() {
       this.quotes = await fetch("https://type.fit/api/quotes")
            .then(function (response) {
                return response.json();
            })
            console.log("Quotes", this.quotes)
    },
    methods: {
        setFavTask(id) {
            console.log("this.$store.state.todos",this.$store.state.todos,id)
           this.$store.state.todos[id].isFav = true;
            this.$store.commit("favTodos", this.$store.state.todos[id-1]);
        }
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
