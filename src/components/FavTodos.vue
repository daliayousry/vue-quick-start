<template>
<div>
    <the-header></the-header>
    <b-card class="todo-list-card">
        <h3 class="welcome-msg">{{$t('favTodos')}}</h3><br>
        <b-list-group>
            <b-list-group-item class="list-group" v-for="todo in this.$store.state.favTodos" :key="todo.id" >
                {{todo.task}}
            </b-list-group-item>
        </b-list-group>
    </b-card>
</div>
</template>

<script>
import Vue from 'vue'
import TheHeader from "./TheHeader.vue";
import {
    BCard
} from 'bootstrap-vue'
import {BListGroup} from 'bootstrap-vue'
Vue.component('b-list-group', BListGroup)
Vue.component('b-card', BCard)
export default {
    name: 'FavTodos',
    components: {
        TheHeader,
    },
    data() {
        return {}
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
