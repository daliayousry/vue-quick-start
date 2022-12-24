<template>
<div>
<b-list-group>
    <b-list-group-item class="list-group" v-for="todo in todos" :key="todo.id" @click="selectTodo(todo.id)" >
        {{todo.task}}
        <div class="todo-list-action">
            <i class="fa-regular fa-heart todo-action-icon fav-icon" v-on:click="setFavTask(todo.id)"></i>
            <i class="fa-regular fa-trash-can todo-action-icon delete-icon"></i>
        </div>
    </b-list-group-item>
</b-list-group>
<slot name="quote"></slot>
</div>
</template>

<script>
import Vue from 'vue'
import {BListGroup} from 'bootstrap-vue'
Vue.component('b-list-group', BListGroup)
export default {
    name:'TodoList',
    props:['todos'],
  methods:{
        setFavTask(id){
         this.$emit("setFavTask",id)
        },
        selectTodo(id){
            console.log("id",id)
            this.$router.push({
                name:'selectedTodo',
               params:{ id:id}
            })
        }
    }
}
</script>

<style scoped>
.list-group {
    text-align: left;
    cursor: pointer;
}

.todo-list-action {
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
