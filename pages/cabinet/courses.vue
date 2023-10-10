<template >
    <HeaderComponent :bgColor="bgProp" :bgShadow="shadow" />
    <div class="container">
        <div class="courses-content">
            <div class="card-heading">
                <h3>Mening kurslarim</h3>
            </div>
            <Card />
        </div>
    </div>
    <FooterComponent />
</template>
<script setup>
const bgProp = ref('#fff')
const shadow = ref("0 6px 34px rgba(73,186,4,.09)")
useHead({
    // title: 'SINFXONA',
    meta: [
        { name: 'SINFXONA', content: 'SINFXONA' }
    ],
})

</script>
<style scoped>
.container {
    width: 100%;
    height: auto;
    background-color: #f5f8ff;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    padding: 12px 0 50px;
}

.courses-content {
    width: 80%;
    height: auto;
}


.card-heading h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
}

@media screen and (max-width:1230px) {
    .courses-content {
        width: 98% !important;
    }
}


@media screen and (max-width:1024px) {
    .courses-content {
        width: 100% !important;
        margin-left: 15px;
    }
}

@media screen and (max-width: 900px) {
    .courses-content {
        margin-left: 0px !important;
    }

}

@media screen and (max-width: 600px) {
    .courses-heading {
        height: 150px !important;
    }
}

@media screen and (max-width: 400px) {
    .courses-heading {
        height: 200px !important;
    }
}
</style>