<template>
<div>
    <div class="header-container text-center pt-3 pb-2">
        <h2 class="vue-todo-list my-4">✨ Vue Todo List</h2>
    </div>
    <b-card class="todo-list-card">
        <input v-model="name" @change="setName()" placeholder="add my name"/>

        <b-list-group>
            <b-list-group-item class="list-group" v-for="todo in todos" :key="todo.id">
                {{todo.task}}
                <div class="todo-list-action">
                    <i class="fa-regular fa-heart todo-action-icon fav-icon" v-on:click="setFavTask(todo.id)"></i>
                    <i class="fa-regular fa-trash-can todo-action-icon delete-icon"></i>
                </div>
            </b-list-group-item>
        </b-list-group>
    </b-card>

</div>
</template>

<script>
import Vue from 'vue'
import {BCard} from 'bootstrap-vue'
import {BListGroup} from 'bootstrap-vue'
Vue.component('b-list-group', BListGroup)
Vue.component('b-card', BCard)
export default {
    name: 'TheHeader',
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
            name:''
        }
    },
    methods:{
        setFavTask(id){
            this.todos[id].isFav= true;
            console.log("todo",this.todos[id])
        },
        setName(){
            console.log("change in my input")
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.header-container {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    height: 250px;
}

.vue-todo-list {
    color: white;
    font-family: 'Dancing Script', cursive;
    font-size: 70px;
    padding-top: 25px;
}

.todo-list-card {
    width: 50%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: -68px;
}

.list-group {
    text-align: left;
}

.todo-list-action {
    display: inline-block;
    float: right;
    cursor: pointer;
}

.todo-action-icon {
    margin-right: 10px;
    font-size: 20px;
}
.fav-icon:hover{
  color: hotpink;
}
.delete-icon:hover{
   color: blue;
}
</style>
