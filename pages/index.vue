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
            <div id="enterForm" class="">
                <div class="enterFormSteps">
                    <ul>
                        <li><a class="active">Aloqa ma'lumotlari</a></li>
                        <li><a class="">To'lov formasi</a></li>
                    </ul>
                </div>
                <div class="enter-body">
                    <form class="el-form">
                        <div class="row">
                            <div class="column-1">
                                <div class="row">
                                    <div class="column-2">
                                        <div class="elem-item">
                                            <div class="elem-item-input">
                                                <div class="elem-suffix ">
                                                    <input type="text" autocomplete="off" class="elem-input-inner ">
                                                    <!-- fill -->
                                                    <span class="elem-suffix-inner ">
                                                        Ismingizni kiriting</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column-2">
                                        <div class="elem-item">
                                            <div class="elem-item-input">
                                                <div class="elem-suffix">
                                                    <input type="text" autocomplete="off" class="elem-input-inner"
                                                        placeholder="+998">
                                                    <span class="elem-suffix-inner fill">
                                                        Telefon raqam</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="el-form-item-check">
                                        <div class="el-form-item-check-content">
                                            <label class="agree-checkbox">
                                                <span class="el-checkbox-input">
                                                    <input type="checkbox" class="el-checkbox-original" value="">
                                                </span>
                                                <span class="el-checkbox-label">
                                                    <nuxt-link to="#" class="link">
                                                        Offerta
                                                    </nuxt-link>
                                                    shartlariga roziman
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column-button">
                                <button class="btn w-100">
                                    <span class="fs14">SINFXONAGA QO’SHILISH</span>
                                </button>
                            </div>
                        </div>

                    </form>
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
    background: #f5f8ff;
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

#enterForm {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 25px 25px hsla(214, 4%, 65%, .06);
    margin: -100px auto 0;
    max-width: 950px;
    padding: 0 40px 20px;
    position: relative;
}

.enterFormSteps {
    border-bottom: 1px solid #dadada;
}

.enterFormSteps ul {
    margin: 0;
    padding: 0;
    text-align: center;
}

.enterFormSteps ul li {
    display: inline-block;
    list-style: none;
    padding: 0 20px;
}

.enterFormSteps ul li a.active {
    color: #49ba04 !important;
}

.enterFormSteps ul li a {
    color: rgba(0, 0, 0, .5) !important;
    display: block;
    font-weight: 600;
    padding: 12px 0 14px;
    position: relative;
    -webkit-text-decoration: none;
    text-decoration: none;
}

a {
    color: #0d6efd;
    color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
    -webkit-text-decoration: underline;
    text-decoration: underline;
}

.enterFormSteps ul li a.active:after {
    width: 100%;
}

.enterFormSteps ul li a:after {
    background: #49ba04;
    content: "";
    height: 2px;
    left: 0;
    margin-top: -1px;
    position: absolute;
    top: 100%;
    transition: all .2s;
    width: 0;
}

.enter-body {
    padding: 25px 30px 0;
}

.el-form {
    width: 100%;
}

.row {
    /* width: 100%;
    height: 102px;
    display: flex;
    flex-wrap: wrap; */
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.75rem;
    margin-left: calc(var(--bs-gutter-x)*-.5);
    margin-right: -0.75rem;
    margin-right: calc(var(--bs-gutter-x)*-.5);
    margin-top: 0;
    margin-top: calc(var(--bs-gutter-y)*-1);
}

.column-1 {
    width: 66.66666667%;
    padding: 0 12px;
}

.column-button {
    width: 33.33333333%;
}

.column-2 {
    width: 50%;
    padding: 0 12px;
}

.elem-item {
    width: 100%;
    margin-bottom: 22px;
}

.elem-item::before {
    content: "";
    display: table;
}

.elem-item-input {
    width: 100%;
    height: auto;

}

.elem-item-input::after,
.elem-item-input::before {
    content: "";
    display: table;
}

.elem-suffix {
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 14px;
}

.elem-input-inner {
    width: 90%;
    padding: 0 15px;
    height: 54px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    border: 1px solid #b4bfd0;
    border-radius: 10px;
    position: absolute;

}

.elem-suffix-inner {
    position: absolute;
    left: 10px;
    top: 18px;
    background-color: #fff;
}

.fill {
    top: -10px !important;
}

.el-form-item-check {
    width: 100%;
    height: auto;
    padding: 30px 12px 0;
    margin-top: 1rem;
}

.el-form-item-check-content {
    width: 100%;
    position: relative;
}

.agree-checkbox {
    color: #606266;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
}

.el-checkbox-input {
    cursor: pointer;
    line-height: 1;
    outline: 0;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    white-space: nowrap;
}

.el-checkbox-original {
    border: 2px solid rgba(0, 0, 0, .3) !important;
    border-radius: 5px;
    height: 24px !important;
    width: 24px !important;
}

.el-checkbox-label {
    color: rgba(0, 0, 0, .5) !important;
    display: inline-block;
    font-size: 14px;
    line-height: 19px;
    padding-left: 10px;
}

.link {
    text-decoration: none !important;
    color: #006aff !important;
}

.btn {
    border: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    padding: 11px 30px;
    background: #49ba04 !important;
}

.w-100 {
    width: 100%;

}

.fs14 {
    font-size: 14px !important;
    color: #fff;
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
    margin-bottom: 30px;
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

@media screen and (max-width:1230px) {

    .banner-text-cover {
        width: 100% !important;
        margin-left: 15px;
    }

    .text-section-cover {
        width: 100% !important;
        margin-left: 15px;
    }

    .faq-cover {
        width: 100% !important;
        margin-left: 15px;

    }
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

@media screen and (max-width : 900px) {
    #enterForm {
        padding: 0 30px 20px;
    }

    .enterFormBody {
        padding: 25px 0 0;
    }

    .main-content {
        padding: 0 15px;
    }

    .home-banner {
        display: none !important;
    }

    .home-banner2 {
        height: 800px !important;
        display: block !important;
    }

    .banner-text-one2,
    .banner-text-two2,
    .banner-text-three2 {
        text-align: center;
        line-height: normal;
    }
}


@media screen and (max-width: 670px) {
    .text-section {
        height: 900px !important;
    }
    .faq-header{
        font-size: 36px;
    }
}


@media screen and (max-width: 600px) {
    #enterForm {
        padding: 0;
    }
    .text-section {
        height: 950px !important;
    }
    .enter-body {
        padding: 15px 20px;
    }

    .column-1 {
        width: 100% !important;
    }

    .row {
        gap: 50px !important;
    }

    .column-2 {
        width: 100% !important;
    }

    .elem-input-inner {
        width: 100% !important;
    }

    .el-form-item-check {
        padding: 10px 62px 0;
    }

    .column-button {
        width: 100%;
    }

    .banner-text-one2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .banner-text-two2 {
        font-size: 16px;
        margin-bottom: 10px;

    }

    .banner-text-three2 {
        font-size: 12px;
        margin-bottom: 10px;
    }
}
@media screen and (max-width: 670px) {
    .faq-header{
        font-size: 30px;
    }
}



@media screen and (max-width:425px) {
    .home-banner2 {
        height: 800px !important;
    }

    .banner-text2 {
        width: 95%;
    }

    .banner-text-two2 {
        font-size: 16px;
    }

    .banner-text-one2 {
        font-size: 20px;

    }
    
    .banner-text-three2 {
        font-size: 12px;
    }

    .banner-slider2 {
        top: 75vh !important;
    }

    .el-form-item-check {
        padding: 10px 40px 0;

    }
    .text-section {
        height: 1000px !important;
    }
    .faq-header{
        font-size: 25px;
    }
}

@media screen and (max-width:375px) {
    .home-banner2 {
        height: 700px !important;
    }

    .banner-slider2 {
        top: 60vh !important;
    }

    .el-form-item-check {
        padding: 10px 30px 0;

    }
    .text-section {
        height: 1100px !important;
    }
    .faq-header{
        font-size: 20px;
    }
}

@media screen and (max-width:320px) {
    .banner-main-container2 {
        padding-top: 20px;
    }

    .banner-slider2 {
        top: 67vh !important;
    }

    .banner-text-two2 {
        font-size: 15px;
    }

    .el-form-item-check {
        padding: 10px 20px 0;

    }
    .text-section {
        height: 1200px !important;
    }

}

</style>