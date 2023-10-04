<template >
    <div class="container">
        <HeaderComponent :bgColor="bgProp"/>
        <div class="main">

        </div>
        <FooterComponent/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bgProp:'#eef1e8'
        }
    }
}
</script>
<style scoped>
.container{
    width: 100vw;
    height: auto;

}
.main{
    width: 100%;
    height: 100vh;
}
</style>