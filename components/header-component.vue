<template>
    <div class="header" :style="{backgroundColor:bgColor}">
        
    </div>
</template>
<script>
export default {
    props:{
        bgColor:String
    }
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 70px;
    position: sticky;
    top: 0;
}
</style>