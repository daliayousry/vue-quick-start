<template>
<div>
    <div class="header-container text-center pt-3 pb-2">
        <h2 class="vue-todo-list my-4">✨ Vue Todo List</h2>
    </div>
    

</div>
</template>

<script>

export default {
    name: 'TheHeader',

  

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


</style>
