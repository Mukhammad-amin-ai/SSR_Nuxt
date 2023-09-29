<script>
</script>
<template>
    <div class="w-[100%] h-[960px] flex justify-center items-center bg-[#EEEDF2]">
        <div class="w-[100%] h-[100%] p-10  flex-col  flex  justify-center items-start">
            <h1>DLA</h1>
            <div class="w-full h-[800px] mt-[18px] flex justify-center items-center bg-[#027DFC] boxBorder">
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
                <div class="box-small">
                    <img src="../../assets/svg/box-small.svg" alt="#">
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
    font-family: 'Figtree', ;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

p {
    color: #EEEDF2;
    text-align: center;
    font-family: 'Figtree', ;
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
    width: 701px;
    height: 238px;
}

.box2 {
    width: 109.481px;
    height: 81.291px;
    flex-shrink: 0;
    position: absolute;
    left: 197px;
    top: 207px;
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
    bottom: 109.71px;
    left: 81px;
}

.boxx {
    width: 79.204px;
    height: 59.052px;
    flex-shrink: 0;
    position: absolute;
    bottom: 151.27px;
    left: 293.78px;
}

.gears-two {
    width: 155.112px;
    height: 141.437px;
    flex-shrink: 0;
    position: absolute;
    bottom: 268.14px;
    right: 124.09px;
    z-index: 2;
}

.gear-two-shadow {
    width: 102.555px;
    height: 59.783px;
    flex-shrink: 0;
    fill: #002143;
    opacity: 0.6;
    position: absolute;
    bottom: 298.76px;
    right: 193.44px;
}

.gear-two-shadow2 {
    width: 102.555px;
    height: 59.418px;
    flex-shrink: 0;
    fill: #002143;
    opacity: 0.6;
    position: absolute;
    bottom: 247.36px;
    right: 141.25px;
}

.gear {
    width: 102.922px;
    height: 90.402px;
    flex-shrink: 0;
    position: absolute;
    bottom: 149.67px;
    right: 253.29px;
    z-index: 2;
}

.gear-shadow {
    width: 102.555px;
    height: 59.418px;
    flex-shrink: 0;
    fill: #002143;
    opacity: 0.6;
    position: absolute;
    bottom: 128.98px;
    right: 270.45px;
}

.box-small {
    width: 58.033px;
    height: 43.012px;
    flex-shrink: 0;
    position: absolute;
    bottom: 65.66px;
    right: 42.97px;
}
</style>
