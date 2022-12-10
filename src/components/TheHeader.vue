<template>
<div>
    <p> This is my header</p>
    <p>{{hello=='hi'?'nice':'okay'}}</p>
</div>
</template>

<script>
export default {
    name: 'TheHeader',
    data(){
        return{
            hello:'hi'
        }
    }
    
}
</script>
