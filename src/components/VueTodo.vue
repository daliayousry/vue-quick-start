<template>
<div>
    <the-header></the-header>
    <b-card class="todo-list-card">
        <h3 class="welcome-msg">{{$t('message')}} {{ name | prepend('Dr.')}}</h3><br>
        <todo-list :todos="todos" @setFavTask="setFavTask">
            <p v-if="quotes" class="todo-list-quote" slot="quote">🤗 {{quotes[Math.floor(Math.random() * 1000) + 1].text}}</p>
        </todo-list>
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
            todos: [{
                    task: 'Laundry',
                    id: '1',
                    isFav: false,
                    des:'Laundary: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
                },
                {
                    task: 'Read new Book',
                    id: '2',
                    isFav: false,
                    des:'Read new Book: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'

                },
                {
                    task: 'Complete the previous Task',
                    id: '3',
                    isFav: false,
                    des:'Complete the previous Task: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'

                },
            ],
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
            this.todos[id].isFav = true;
            console.log("todo", this.todos[id])
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
