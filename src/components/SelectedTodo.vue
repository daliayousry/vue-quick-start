<template>
<div>
    <the-header></the-header>
    <b-card class="todo-list-card">
        <h3 class="welcome-msg">{{$t('selectedTodo')}}</h3><br>
       <b-list-group>
    <b-list-group-item class="list-group"  >
        {{todo.task}}
        <div class="todo-list-action" >
            <i class="fa-regular fa-heart todo-action-icon fav-icon" v-if="!todo.isFav" v-on:click="setFavTask(todo.id)"></i>
            <i class="fa-regular fa-trash-can todo-action-icon delete-icon"></i>
        </div><br>
        {{todo.des}}
    </b-list-group-item>
</b-list-group>
    </b-card>
</div>
</template>

<script>
import Vue from 'vue'
import TheHeader from "./TheHeader.vue";
import {BCard} from 'bootstrap-vue'
Vue.component('b-card', BCard)
export default {
    name: 'selectedTodo',
    components: {
        TheHeader
    },
    data() {
        return {
            todo:this.$store.getters.thisTodo(this.$route.params.id)
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
