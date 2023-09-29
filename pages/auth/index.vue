<script>
</script>
<template>
    <div class="w-screen h-screen flex justify-center items-center bg-[#EEEDF2]">
        <div class="w-[95%] flex-col h-[90%] flex  justify-center items-start  gap-10">
            <h1>DLA</h1>
            <div class="w-full h-[800px] flex justify-center items-center bg-[#027DFC] boxBorder">
                <div class="box2">
                    <img src="../../assets/svg/box2.svg" alt="#">
                </div>
                <div class="box flex flex-col justify-between items-center">
                    <h2>Welcome to DLA</h2>
                    <p>Let’s set up your account together</p>
                    <nuxt-link to="/auth/general-info">
                        <button class="begin">Let’s begin</button>
                    </nuxt-link>
                </div>
                <div class="box3">
                    <img src="../../assets/svg/box3.svg" alt="#">
                </div>
                <div class="boxx">
                    <img src="../../assets/svg/box.svg" alt="#">
                </div>
                <div class="gears-two">
                    <img src="../../assets/svg/gears-two.svg" alt="#">
                </div>
                <div class="gear-two-shadow">
                    <img src="../../assets/svg/gear-two-shadow.svg" alt="#">
                </div>
                <div class="gear-two-shadow2">
                    <img src="../../assets/svg/gear-two-shadow2.svg" alt="#">
                </div>
                <div class="gear">
                    <img src="../../assets/svg/gear.svg" alt="#">
                </div>
                <div class="gear-shadow">
                    <img src="../../assets/svg/gear-shadow.svg" alt="#">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
h1 {
    color: #000;
    font-family: 'Figtree', ;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

h2 {
    color: #EEEDF2;
    font-family: Figtree;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

p {
    color: #EEEDF2;
    text-align: center;
    font-family: Figtree;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.boxBorder {
    border-radius: 40px;
    position: relative;
}

.box {
    width: 500px;
    height: 200px;
}

.box2 {
    width: 109.481px;
    height: 81.291px;
    flex-shrink: 0;
    position: absolute;
    left: 170px;
    top: 100px;
}

.begin {
    width: 280px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
}

.box3 {
    width: 156.206px;
    height: 116.289px;
    flex-shrink: 0;
    position: absolute;
    bottom: 30px;
    left: 40px;
}

.boxx {
    width: 79.204px;
    height: 59.052px;
    flex-shrink: 0;
    position: absolute;
    bottom: 70px;
    left: 250px;
}

.gears-two {
    width: 155.112px;
    height: 141.437px;
    flex-shrink: 0;
    position: absolute;
    bottom: 160px;
    right: 190px;
    z-index: 2;
}

.gear-two-shadow {
    width: 102.555px;
    height: 59.783px;
    flex-shrink: 0;
    fill: #002143;
    opacity: 0.6;
    position: absolute;
    bottom: 190px;
    right: 250px;
}

.gear-two-shadow2 {
    width: 102.555px;
    height: 59.418px;
    flex-shrink: 0;
    fill: #002143;
    opacity: 0.6;
    position: absolute;
    bottom: 140px;
    right: 200px;
}

.gear {
    width: 102.922px;
    height: 90.402px;
    flex-shrink: 0;
    position: absolute;
    bottom: 70px;
    right: 300px;
    z-index: 2;
}

.gear-shadow {
    width: 102.555px;
    height: 59.418px;
    flex-shrink: 0;
    fill: #002143;
    opacity: 0.6;
    position: absolute;
    bottom: 45px;
    right: 310px;
}
</style>
