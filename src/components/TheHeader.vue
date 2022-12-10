<template>
<div>
    <p  :style="{textDecoration:decoration}"> This is my heade></p>
    <p :class="{decoration:isUnderline}"> This is my header</p>
</div>
</template>

<script>
export default {
    name: 'TheHeader',
    data(){
        return{
         decoration:'underline',
         isUnderline:true
        }
    }
    
}
</script>
<style scoped>
.decoration{
    text-decoration: underline;
}
</style>
