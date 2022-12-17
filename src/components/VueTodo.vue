<template>
    <div>
        <the-header></the-header>
        <b-card class="todo-list-card">
        <todo-list :todos="todos" @setFavTask="setFavTask">
            <p class="todo-list-quote" slot="quote">🤗 You gonna rock!</p>
        </todo-list>
    </b-card>
    </div>
</template>
<script>
import Vue from 'vue'
import TheHeader from"./TheHeader.vue";
import TodoList from "./TodoList.vue"
import {BCard} from 'bootstrap-vue'
Vue.component('b-card', BCard)
export default {
     name:'VueTodoList',
        components: {
        TodoList,
        TheHeader
    },
      data() {
        return {
            todos: [{
                    task: 'Laundry',
                    id: '1',
                    isFav: false
                },
                {
                    task: 'Read new Book',
                    id: '2',
                    isFav: false
                },
                {
                    task: 'Complete the previous Task',
                    id: '3',
                    isFav: false
                },
            ],
        }
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
.todo-list-quote{
    margin-top: 27px;
    font-weight: bold;
}
</style>