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
        <div class="home-banner2">
            <div class="banner-main-container2">
                <div class="banner-content-wrap2">
                    <div class="banner-text2">
                        <div class="banner-text-cover2">
                            <div class="banner-text-one2">
                                <p> Vanihoyat O’zbekistonda!</p>
                            </div>
                            <div class="banner-text-two2">
                                <h1>Kichik Oylik Obuna To’lovi Evaziga Yurtimizning Oldi Mutaxassislaridan Ta’lim Oling</h1>
                            </div>
                            <div class="banner-text-three2">
                                <p>97,000 so’m oylik to’lov evaziga barcha darslarga ega bo’lasiz</p>
                            </div>
                        </div>
                    </div>
                    <div class="banner-slider2">
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
            <CoursesComponent />
            <div class="text-section">
                <div class="text-section-cover">
                    <div class="text-header">
                        Har Oy Yangi Darslar Qo’shib Boriladi!
                    </div>
                    <div class="text-text-one">
                        Sinfxonaning maqsadi hamisha o’sishni va muvaffaqiyatli inson bo’lishni xohlaganlarni “ishlaydigan”
                        ko’nikmalar bilan ta’minlash.
                    </div>
                    <div class="text-text-one">
                        Hozirgacha 100+ ustozlar bilan muzokaralar olib bordik va sizlar bilan o’z tajribalarini
                        bo’lishishlariga rozilik oldik. (va bu bilan to’xtab qolmoqchi emasmiz)
                    </div>
                    <div class="text-text-one">
                        Har kuni yangi ustozlar bilan yangi darslar olinmoqda.
                    </div>
                    <div class="text-text-one">
                        Jamoamiz bilan siz tezroq o’sishingiz va boshqalarni ham hayotini o’zgartirishga hissa qo’shishingiz
                        uchun tinmay mehnat qilmoqdamiz.
                    </div>
                    <div class="text-text-one">
                        Lekin bir narsani tushunishingizni xohlaymiz.
                    </div>
                    <div class="text-text-one">
                        Biz hozircha million dollarlik kompaniya emasmiz. Resurslarimiz cheklangan.
                    </div>
                    <div class="text-text-one">
                        Kuchimiz yetganicha har oy yangi ustozlarni kurslarini joylab boramiz
                    </div>
                    <div class="text-text-one">
                        Hozir sizni yordamingiz bizga judayam muhim.
                    </div>
                    <div class="text-text-one">
                        Sinfxonaga qo’shiling. Ilmga chanqoq insonlar ko’pligini ko’rsating.
                    </div>
                    <div class="text-text-one">
                        Bu bizni siz bilan birgalikda o’sishimizni va yanada ko’proq ustozlardan ta’lim olish imkoniyatiga
                        ega bo’lishimizni tezlashtiradi.
                    </div>
                    <div class="text-text-one">
                        Yurtimiz kelajagi siz bilan bizni qo’limizda.
                    </div>
                    <div class="text-text-one">
                        Birgalikda eng yuqori cho’qqilarni zabt etamiz.
                    </div>
                    <div class="text-text-one">
                        Sinfxonada ko’rishguncha!
                    </div>
                </div>
            </div>
            <div class="section-button">
                <button>
                    SINFXONAGA KIRISH
                </button>
            </div>
            <div class="faq">
                <div class="faq-cover">
                    <div class="faq-header">
                        Tez so'raladigan savollar
                    </div>
                    <div class="faq-accordion">
                        <div class="el-collapse-item" v-for="(faq, index) in frAsQu " :key="faq.id">
                            <div role="tab" aria-controls="el-collapse-content-1229" @click="activated(faq.id)"
                                aria-describedby="el-collapse-content-1229">
                                <div role="button" id="el-collapse-head-2540" tabindex="0"
                                    class="el-collapse-item__header ">
                                    {{ faq.name }}<i class="el-collapse-item__arrow el-icon-arrow-right"></i></div>
                            </div>
                            <div role="tabpanel" aria-labelledby="el-collapse-head-2540" id="el-collapse-content-2540"
                                class="el-collapse-item__wrap is-active" v-if="isActive[faq.id]">
                                <div class="el-collapse-item__content">
                                    <div>{{ faq.descript }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            isActive: {},
            frAsQu: [
                {
                    id: 1,
                    name: '1. Sinfxona nima?',
                    descript: 'Sinfxona bu sizga O’zbekistonning oldi mutaxassislaridan ta’lim olish imkoniyatni beradigan, video darslar jamlangan platforma.'
                },
                {
                    id: 2,
                    name: "2. Oylik 97,000 so’mlik obuna to’lovim evaziga nima olaman?",
                    descript: "Oylik obuna to’lovingiz evaziga platformamizda joylangan barcha kurslardan foydalanish imkoniyatiga ega bo’lasiz."
                },
                {
                    id: 3,
                    name: '3. Yillik tarifda qo’shilsam qancha tejab qolaman?',
                    descript: 'Sinfxonaga bir yillik obunani 814,800 so’m evaziga olishingiz va 349,200 so’m tejab qolishingiz mumkin. Bu tarif hamisha o’sishni xohlaydigan va berilgan imkoniyatdan maksimal foyda chiqaradigan insonlar uchun.'
                },
                {
                    id: 4,
                    name: "4. 14 kunlik to’lovni qaytarish kafolati qanday ishlaydi?",
                    descript: "Bizning maqsadimiz sizning to’xtovsiz rivojlanishingiz. Agar darslar sarmoya qilgan pulingizga arzishini sezmasaniz, obuna bo’lgan kuningizdan boshlab 14 kun ichida murojaat qilasiz va to’lovingizni qaytarib beramiz."
                },
                {
                    id: 5,
                    name: '5. Obunani qanday to’xtataman?',
                    descript: 'Agar davom ettirishni istamasangiz, xohlagan vaqtingiz profilingiz sozlamalariga kirib obunani to’xtatishingiz, yoki qayta aktivlashtirishingiz mumkin.'
                },
                {
                    id: 6,
                    name: "6. Oylik eksklyuziv jonli efirlar nima?",
                    descript: "Har oyda bir marta O’z sohasining mutaxassisi bilan maxsus jonli efirlar o’tkazami. Sinfxona o’quvchilari bu jonli efirga qo’shilishlari va ustozlardan o’z savollariga javob olishlari mumkin."
                },
                {
                    id: 7,
                    name: '7. Nega to’lov qilish uchun karta muddati va sms kod kerak?',
                    descript: 'Sinfxona platformamiz oylik obuna tizimida ishlaydi. Ya’ni platformadan foydalanish uchun har oy 97,000 so’mdan to’lab borasiz.Karta muddati va sms kod orqali obuna bo’lsangiz, har oy kartangizdan avtomatik tarzda 97,000 so’m yechib boriladi va sinfxona siz uchun yopilib qolmaydi.'
                },
                {
                    id: 8,
                    name: "8. Darslar o’zi kim uchun:",
                    descript: "Sinfxona darslari bir nuqtada qolmasdan rivojlanishni va hayotda katta yuqutlarga erishishni xohlagan insonlar uchun."
                },
                {
                    id: 9,
                    name: '9. Barcha darslar darhol ochiladimi?',
                    descript: 'Ha, sinfxonaga qo’shilishingiz bilanoq barcha darslardan foydalanishingiz mumkin bo’ladi.'
                },
                {
                    id: 10,
                    name: "10. Kartada yangi oy uchun yetarlicha pul bo’lmasa nima bo’ladi:",
                    descript: "Kartangizda yangi oy uchun yetarli mablag’ bo’lmasa Sinfxona akkauntingiz qoladi, lekin darslar yopiladi."
                },

            ]
        };
    },
    methods: {
        makeDinamic() {
            this.dinamic = !this.dinamic;
        },
        activated(id) {
            this.isActive[id] = !this.isActive[id];
        },
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
    height: auto;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
}

.banner-text-cover {
    width: 78%;
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
    height: auto;
    margin-bottom: 10px;
}

.banner-text-two h1 {
    font-size: 40px;
    font-weight: 700;
}

.banner-text-three {
    width: 100%;
    height: auto;
    margin-bottom: 10px;

}

.banner-text-three p {
    font-size: 26px;
    font-weight: 400;
    color: #212529;
}

.banner-slider {
    width: 60%;
    height: 100%;
}

.home-banner2 {
    width: 100%;
    height: 900px;
    background: #eef1e8;
    display: none;
}

.banner-main-container2 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.banner-content-wrap2 {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-text2 {
    width: 100%;
}

.banner-text-cover2 {
    width: 100%;
}

.banner-text-one2,
.banner-text-two2 .banner-text-three2 {
    width: 95%;
    margin-left: 10px;
    text-align: center;
    margin-top: 10px;
}

.banner-text-one2,
.banner-text-three2 {
    font-size: 26px;
    font-weight: 400;
    color: rgb(33, 37, 41);
}

.banner-text-two2 {
    font-size: 20px;
    font-weight: 700;
    color: rgb(33, 37, 41);
}

.banner-slider2 {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 80vh;
}


.main-content {
    width: 100%;
    height: auto;
    background-color: #f5f8ff;
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

.form-top2 {
    width: 100%;
    height: 40px;
    border-bottom: 0.5px solid #585f65;
    display: flex;
    justify-content: center;
    gap: 45px;
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


.name-input,
.input-telephone {
    width: 254px;
    height: 54px;
    position: relative;
    display: flex;
    align-items: center;

}

.name-input span,
.input-telephone span {
    display: none;
    width: 148.63px;
    height: 16.8px;
    background-color: #fff;
    position: absolute;
    z-index: 99;
    margin-left: 10px;
}


.name-input input[type="text"],
.input-telephone input[type="text"] {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
}


.check-box {
    width: 100%;
    height: 26px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.check-box span {
    font-size: 14px;
    font-weight: 500;
    color: #606266;
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

.text-section {
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: center;
}

.text-section-cover {
    width: 80%;
    height: 100%;
}

.text-header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    font-size: 26px;
    font-weight: 500;
    margin-top: 10px;
}

.text-text-one {
    width: 100%;
    height: auto;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    color: rgb(33, 37, 41);
}
.section-button {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-button button {
    width: 253.93px;
    height: 49px;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    background: #49ba04 !important;
    color: #fff;
    border: none;
}
.faq {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

.faq-cover {
    width: 80%;
    height: auto;

}

.faq-header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 46px;
    font-weight: 600;
    color: rgb(33, 37, 41);
}

.faq-accordion {
    width: 100%;
    height: auto;
}


.el-collapse-item {
    background: #fff !important;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 15px;
}

.is-active {
    padding: 15px !important;
    border-bottom-color: transparent;
}

.el-collapse-item .el-collapse-item__header {
    background: none;
    border: none !important;
    color: #000 !important;
    font-size: 18px;
    font-weight: 600;
    height: auto;
    line-height: normal;
    padding: 10px 15px;
    /* transition: all .2s linear; */
}

.el-collapse-item__header {
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #ebeef5;
    color: #303133;
    cursor: pointer;
    display: flex;
    font-size: 13px;
    font-weight: 500;
    height: 48px;
    line-height: 48px;
    outline: 0;
    transition: border-bottom-color .3s;
}

.el-collapse-item .el-collapse-item__wrap {
    background: none;
    border: none;
    padding: 0;
}

.el-collapse-item__wrap {
    background-color: #fff;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
    height: 100%;
}

@media screen and (max-width : 1024px) {

    .banner-text {
        width: 100% !important;
        justify-content: flex-start;
        margin-left: 15px;
    }

    .text-section-cover {
        width: 100% !important;
        margin-left: 15px;

    }

    .faq-cover {
        width: 100%;
        margin-left: 15px;

    }


}

@media screen and (max-width : 768px) {
    .registration {
        width: 738px;
        height: 197.8px;
    }

    .input-container {
        width: 467px;
        height: 102px;
    }

    .name-input,
    .input-telephone {
        width: 209.99px;
        height: 54px;

    }

    .form-input {
        padding: 25px 0 0 !important;
    }

    .form {
        width: 100%;
    }

    .form-top::before {
        left: 28.5%;
    }

    .button-container {
        width: 233.99px;
        height: 102px;
    }

    .button-container button {
        width: 209.99px;
        height: 76px;

    }

    .home-banner {
        display: none !important;
    }

    .home-banner2 {
        height: 1200px !important;
        display: block !important;
    }
}

@media screen and (max-width:425px) {
    .home-banner2 {
        height: 1200px !important;
    }

    .banner-slider2 {
        top: 85vh !important;

    }

    .registration {
        width: 395.6px !important;
        height: 327.8px !important;
    }

    .registration-form {
        width: 100% !important;
        height: 100% !important;
    }

    .form-top {
        height: 50px !important;
        align-items: center;
    }

    .form-top::before {
        top: 46px !important;
        left: 10% !important;
    }

    .form-input {
        margin-left: 10px;
        width: 95% !important;
        height: 80% !important;
    }

    .form {
        width: 100% !important;
        height: 100% !important;
        flex-direction: column;
        justify-content: space-between;
    }

    .input-container {
        width: 100% !important;
        height: 50% !important;
        justify-content: center;
    }

    .button-container {
        width: 100% !important;
        height: 69px !important;
        align-items: flex-end;
    }

    .button-container button {
        width: 90% !important;
        height: 70% !important;

    }

    .check-box {
        justify-content: center;
    }
}





</style>