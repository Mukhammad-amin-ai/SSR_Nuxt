<template >
    <div class="container">
        <HeaderComponent :bgColor="bgProp" />
        <div class="home-banner">
            <div class="banner-main-container">
                <div class="banner-content-wrap">
                    <div class="banner-text">
                        <div class="banner-text-cover">
                            <div class="banner-text-one">
                                <p> Vanihoyat O’zbekistonda!</p>
                            </div>
                            <div class="banner-text-two">
                                <h1>Kichik Oylik Obuna To’lovi Evaziga Yurtimizning Oldi Mutaxassislaridan Ta’lim Oling</h1>
                            </div>
                            <div class="banner-text-three">
                                <p>97,000 so’m oylik to’lov evaziga barcha darslarga ega bo’lasiz</p>
                            </div>
                        </div>
                    </div>
                    <div class="banner-slider">
                        <CaruselComponent />
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="registration">
                <div class="registration-form">
                    <div class="form-top" v-if="dinamic">
                        <h4 style="color: #49ba04 !important; ;">Aloqa ma'lumotlari</h4>
                        <h4>To'lov formasi</h4>
                    </div>
                    <div class="form-top2" v-else>
                        <h4>Aloqa ma'lumotlari</h4>
                        <h4 style="color: #49ba04 !important; ;">To'lov formasi</h4>
                    </div>
                    <div class="form-input">
                        <div class="form">
                            <div class="input-container">
                                <div class="name-input">
                                    <input type="text">
                                    <span>Ismingizni kiriting</span>
                                </div>
                                <div class="input-telephone">
                                    <input type="text">
                                    <span>Telefon raqam</span>
                                </div>
                                <div class="check-box">
                                    <input type="checkbox">
                                    <span>
                                        <nuxt-link to="#" class="link">
                                            Offerta
                                        </nuxt-link>
                                        shartlariga roziman
                                    </span>
                                </div>
                            </div>
                            <div class="button-container">
                                <button>
                                    SINFXONAGA QO'SHILISH
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <CoursesComponent/>
        </div>
        <FooterComponent />
    </div>
</template>
<script>
export default {
    data() {
        return {
            bgProp: '#eef1e8',
            dinamic: true,
        };
    },
    methods: {
        makeDinamic() {
            this.dinamic = !this.dinamic;
        }
    },

}
</script>
<style scoped>
.container {
    width: 100vw;
    max-width: 100%;
    height: auto;

}

.home-banner {
    width: 100%;
    height: 600px;
    background: #eef1e8;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
}

.banner-main-container {
    width: 100%;
    height: 400px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 9;

}

.banner-content-wrap {
    width: 100%;
    height: 100%;
    display: flex;
}


.banner-text {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
}

.banner-text-cover {
    width: 78%;

}

.banner-slider {
    width: 60%;
    height: 100%;
    /* background-color: red; */
    overflow: hidden;
}

.banner-text-one {
    width: 100%;
    height: 39px;
    margin-bottom: 10px;
}

.banner-text-one p {
    font-size: 26px;
    font-weight: 400;
    color: #212529;
}

.banner-text-two {
    width: 100%;
    height: 244px;
    margin-bottom: 10px;
}

.banner-text-two h1 {
    font-size: 40px;
    font-weight: 700;
}

.banner-text-three {
    width: 100%;
    height: 78px;
    margin-bottom: 10px;

}

.banner-text-three p {
    font-size: 26px;
    font-weight: 400;
    color: #212529;
}


.registration {
    width: 950px;
    height: 200px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 25px 25px hsla(214, 4%, 65%, .06);
    margin: -100px auto 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.registration-form {
    width: 91%;
    height: 85%;

}

.form-top {
    width: 100%;
    height: 40px;
    border-bottom: 0.5px solid #585f65;
    display: flex;
    justify-content: center;
    gap: 45px;
}

.form-top h4 {
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, .5) !important;
}

.form-top::before {
    content: "";
    width: 160px;
    height: 3px;
    position: absolute;
    top: 51px;
    left: 33%;
    border: 1px solid #49ba04 !important;
    background-color: #49ba04 !important;
}

.form-top2::before {
    content: "";
    width: 160px;
    height: 3px;
    position: absolute;
    top: 51px;
    left: 52%;
    border: 1px solid #49ba04 !important;
    background-color: #49ba04 !important;
}

.form-top2 {
    width: 100%;
    height: 40px;
    border-bottom: 0.5px solid #585f65;
    display: flex;
    justify-content: center;
    gap: 45px;
}

.form-top2 h4 {
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, .5) !important;
}


.form-input {
    width: 100%;
    height: 127px;
    padding: 25px 30px 0;
}

.form {
    width: 810px;
    height: 102px;
    display: flex;
}

.input-container {
    width: 65%;
    height: 100%;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.button-container {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.button-container button {
    width: 254px;
    height: 49px;
    background-color: #49ba04;
    color: #fff;
    font-size: 14px !important;
    font-weight: 600;
    border-radius: 50px;
    border: none;
    cursor: pointer;
}

.name-input,
.input-telephone {
    width: 254px;
    height: 54px;
    position: relative;
    display: flex;
    align-items: center;

}

.name-input input[type="text"],
.input-telephone input[type="text"] {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
}

.name-input span {
    display: none;
    width: 148.63px;
    height: 16.8px;
    background-color: #fff;
    position: absolute;
    z-index: 99;
    margin-left: 10px;
}

.check-box {
    width: 100%;
    height: 26px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.check-box input[type='checkbox'] {
    width: 24px;
    height: 24px;
    border-radius: 5px;
}

.check-box .link {
    text-decoration: none !important;
    color: #006aff !important;
}

.check-box span {
    font-size: 14px;
    font-weight: 500;
    color: #606266;
}

.main-content {
    width: 100%;
    height: auto;
    background-color: #f5f8ff;
}

</style>