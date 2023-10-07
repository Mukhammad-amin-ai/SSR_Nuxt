<template >
    <HeaderComponent :bgColor="bgProp" :bgShadow="shadow" />
    <div class="container">
        <CoursesComponent />
    </div>
    <FooterComponent />
</template>
<script>
export default {
    data() {
        return {
            bgProp: '#fff',
            shadow: "0 6px 34px rgba(73,186,4,.09)",
        }
    }
}
</script>
<style scoped>

.container{
    width: 100%;
    height: auto;
    background-color: #f5f8ff;
    padding-bottom: 50px;
}


</style>