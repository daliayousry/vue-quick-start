<template>
<div>
    <div class="header-container text-center pt-3 pb-2">
        <h2 class="vue-todo-list my-4">✨ Vue Todo List</h2>
    </div>
    <b-card class="todo-list-card">
        <b-list-group>
            <b-list-group-item>Cras justo odio
                <div class="todo-list-action">
                    <i class="fa-regular fa-heart todo-action-icon"></i>
                    <i class="fa-regular fa-trash-can todo-action-icon"></i>
                </div>
            </b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in
                <div class="todo-list-action">
                    <i class="fa-regular fa-heart todo-action-icon"></i>
                    <i class="fa-regular fa-trash-can todo-action-icon"></i>
                </div>
            </b-list-group-item>
            <b-list-group-item>Morbi leo risus
                <div class="todo-list-action">
                    <i class="fa-regular fa-heart todo-action-icon"></i>
                    <i class="fa-regular fa-trash-can todo-action-icon"></i>
                </div>
            </b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac
                <div class="todo-list-action">
                    <i class="fa-regular fa-heart todo-action-icon"></i>
                    <i class="fa-regular fa-trash-can todo-action-icon"></i>
                </div>
            </b-list-group-item>
            <b-list-group-item>Vestibulum at eros
                <div class="todo-list-action">
                    <i class="fa-regular fa-heart todo-action-icon"></i>
                    <i class="fa-regular fa-trash-can todo-action-icon"></i>
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
}
.todo-action-icon{
        margin-right: 10px;
    font-size: 20px;
}
</style>
