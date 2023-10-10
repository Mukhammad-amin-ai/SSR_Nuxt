<template >
    <HeaderComponent :bgColor="bgProp" :bgShadow="shadow" />
    <div class="container">
        <div class="container-content">
            <div class="content-header">
                <h4>Mening Profilim</h4>
            </div>
            <div class="profile">
                <nav>
                    <ul>
                        <li>
                            <button class="link " :class="{ 'active': firstinput }" @click="firstIN">
                                Ism o'zgartirish
                            </button>
                        </li>
                        <li>
                            <button class="link " :class="{ 'active': secinputt }" @click="secInput">
                                Parol o'zgartirish
                            </button>
                        </li>
                        <li>
                            <button class="link" :class="{ 'active': thrdinput }" @click="thirdInp">
                                Obuna
                            </button>
                        </li>
                    </ul>
                </nav>
                <div class="profile-body">
                    <div class="profile-input">
                        <div class="form" v-if="firstinput">
                            <div class="form-item">
                                <div class="elem-item-input">
                                    <div class="elem-suffix ">
                                        <input type="text" autocomplete="off" class="elem-input-inner " @click="inPutClick">
                                        <span class="elem-suffix-inner " :class="{ 'clicked': input }">
                                            Ismingizni kiriting</span>
                                    </div>
                                </div>
                                <div class="button-submit">
                                    <button class="btn">
                                        Saqlash
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="form" v-if="secinputt">
                            <div class="form-item2">
                                <div class="elem-item-input2">
                                    <div class="elem-suffix2 ">
                                        <input type="text" autocomplete="off" class="elem-input-inner " @click="inPutClick">
                                        <span class="elem-suffix-inner " :class="{ 'clicked': input }">
                                            Ismingizni kiriting</span>
                                    </div>
                                </div>
                                <div class="elem-item-input">
                                    <div class="elem-suffix ">
                                        <input type="text" autocomplete="off" class="elem-input-inner " @click="inPutClick">
                                        <span class="elem-suffix-inner " :class="{ 'clicked': input }">
                                            Ismingizni kiriting</span>
                                    </div>
                                </div>
                                <div class="button-submit">
                                    <button class="btn">
                                        Parolni tasdiqlash
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-item3" v-if="thrdinput">
                        <div class="third-cover">
                            <div class="status">
                                <span class="status-succed">
                                    Status: Obuna bo'lgansiz
                                </span>
                            </div>
                            <div class="cards">
                                <div class="cards-list">
                                    <ul>
                                        <li>
                                            <div class="card-item">
                                                <div class="card-pan-number">
                                                    860049******8936
                                                </div>
                                                <label role="radio" tabindex="0" class="el-radio">
                                                    <!-- <span class="el-radio__input">
                                                        <span class="el-radio__inner">
                                                        </span>
                                                     </span> -->
                                                    <input type="radio" class="el-radio__original" value="true">
                                                    <span class="el-radio__label">
                                                        Asosiy karta</span></label>
                                            </div>
                                        </li>
                                    </ul>



                                </div>
                            </div>
                            <div class="pt-3">
                                <button class="btn btn-success btn-sm">Karta qo'shish</button>
                            </div>
                            <div id="tariffs">
                                <h1 class="pageTitle">Obuna turi</h1>
                                <div class="cards-list tariffs-list">
                                    <ul>
                                        <li>
                                            <div class="card-item c-pointer active">
                                                <input type="radio" aria-hidden="true" tabindex="-1" autocomplete="off"
                                                    class="el-radio__original" value="ONEMONTH">
                                                <div class="card-pan-number">
                                                    1 oylik obuna - 97 000 so'm

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="card-item c-pointer">
                                                <input type="radio" aria-hidden="true" tabindex="-1" autocomplete="off"
                                                    class="el-radio__original" value="ONEYEAR">
                                                <div class="card-pan-number">
                                                    1 yillik obuna - 814 800 so'm
                                                    <span>(30% chegirma bilan 349,200 so'm tejab qolasiz)</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="alert">
                                <div class="alert-header">
                                    <div class="alet-icon">
                                        <img src="https://sinfxona.uz/img/icons/warning.svg" alt="#">
                                    </div>
                                    <div class="alert-title">
                                        Obunani bekor qilmoqchimisiz?
                                    </div>
                                </div>
                                <div class="alert-body">
                                    <div class="alert-text">
                                        Obuna bekor qilingandan keyin ham siz pullik davr mobaynida kurslarni
                                        koʻrishingiz mumkin boʻladi. To'langan obuna muddati tugagandan so'ng, siz
                                        yangi obuna sotib olishingiz kerak bo'ladi.
                                    </div>
                                </div>

                            </div>
                            <div class="text-center">
                                <button class="btn btn-success">To'xtatish</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <FooterComponent />
</template>
<script setup>
const shadow = ref('0 6px 34px rgba(73,186,4,.09)')
const bgProp = ref("#fff")

let input = ref(false)
let firstinput = ref(true)
let secinputt = ref(false)
let thrdinput = ref(false)

function inPutClick() {
    input.value = true
}
function firstIN() {
    firstinput.value = true
    secinputt.value = false
    thrdinput.value = false
}
function secInput() {
    secinputt.value = true
    firstinput.value = false
    thrdinput.value = false
}

function thirdInp() {
    firstinput.value = false
    secinputt.value = false
    thrdinput.value = true
}
useHead({
    // title: 'SINFXONA',
    meta: [
        { name: 'SINFXONA', content: 'SINFXONA' }
    ],
})
</script>
<style scoped>
* {
    list-style: none;
    text-decoration: none;
}

.container {
    width: 100%;
    height: auto;
    background-color: #f5f8ff;
}

.container-content {
    max-width: 1230px;
    min-height: 50vh;
    margin: 0 auto;
    padding: 12px 15px 50px;
}

.content-header h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
}

.profile {
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 20px;
}

nav {
    border-bottom: 1px solid #dadada;
}

nav ul {
    display: flex;
    margin: 0;
    padding: 0 10px;
}

nav ul li {
    padding: 0 20px;
}


.link {
    color: rgba(0, 0, 0, .5);
    cursor: pointer;
    display: block;
    font-weight: 500;
    overflow: hidden;
    padding: 14px 0;
    position: relative;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: none;
    background-color: transparent;
}

.active {
    color: #49ba04;

}

.link.active:after {
    width: 100%;
}

.link:after {
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

.profile-body {
    width: 100%;
    height: auto;
    padding: 30px 20px;
}

.profile-input {
    max-width: 350px;
}

.form {
    width: 100%;
    height: auto;
}

.form-item {
    margin-bottom: 22px;
}

.form-item2 {
    width: 100%;
    height: auto;
    padding-bottom: 20px;
}

.form-item3 {
    width: 100%;
    height: auto;
    padding: 30px 20px;
}

.elem-item-input {
    width: 100%;
    height: auto;
}

.elem-item-input2 {
    width: 100%;
    height: auto;
}

.elem-item-input2::after,
.elem-item-input::before {
    content: "";
    display: table;
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

.elem-suffix2 {
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 14px;
    margin-bottom: 10px;
}


.elem-input-inner {
    width: 100%;
    padding: 0px 15px;
    height: 54px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    border: 1px solid #b4bfd0;
    border-radius: 10px;

}


.elem-suffix-inner {
    position: absolute;
    left: 10px;
    top: 18px;
    background-color: #fff;
    transition: .15s ease-in-out;
}

.clicked {
    top: -10px !important;
}

.button-submit {
    margin-top: 20px;
    text-align: end;

}

.btn {
    background: #49ba04 !important;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    padding: 11px 30px;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.third-cover {
    width: 100%;
    height: auto;
}

.status {
    margin-bottom: 1.5rem !important;
}

.status-succed {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
    font-size: 18px;
    width: auto;
    height: 40px;
    line-height: 40px;
    padding: 10px 10px;
    white-space: nowrap;
    border: 1px solid #d9ecff;
    border-radius: 15px;
}

.cards {
    width: 100%;
    height: auto;
    padding: 10px 0 10px 0;
}

.cards-list {
    padding: 0 0 30px;
}

.cards-list ul {
    margin: -10px;
    padding: 0;
}

.cards-list ul li {
    display: inline-block;
    list-style: none;
    padding: 10px;
    width: 33%;
}

.card-item {
    background: #f6f7fa;
    border-radius: 20px;
    padding: 30px 20px 15px;
}

.card-pan-number {
    color: #a2a2ae;
    font-weight: 500;
    margin-bottom: 15px;
}

.el-radio {
    color: #606266;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    margin-right: 30px;
    outline: 0;
    white-space: nowrap;
}

.el-radio__input {
    cursor: pointer;
    line-height: 1;
    outline: 0;
    vertical-align: middle;
    white-space: nowrap;
}

.el-radio__inner {
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    box-sizing: border-box;
    cursor: pointer;
    height: 14px;
    width: 14px;
}


.radio__label {
    font-size: 14px;
}

.pt-3 {
    padding-top: 1rem !important;
}

.btn-sm {
    font-size: 14px !important;

}

#tariffs {
    margin-top: 20px;
}

.pageTitle {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
}

.tariffs-list ul {
    display: flex;
}

.cards-list ul {
    margin: -10px;
    padding: 0;
}

.tariffs-list ul li {
    flex: 0 0 50%;
}

.tariffs-list ul li {
    flex: 0 0 33%;
}

.cards-list ul li {
    display: inline-block;
    list-style: none;
    padding: 10px;
    width: 33%;
}

.tariffs-list ul li .card-item {
    padding: 10px 15px;
}

.tariffs-list ul li .card-item {
    height: 100%;
}

.card-item.active {
    background: #e9f5e2;
}

.card-item {
    background: #f6f7fa;
    border-radius: 20px;
    padding: 30px 20px 15px;
}

.tariffs-list ul li .card-item .el-radio {
    float: left;
    margin: 0;
}

.el-radio {
    color: #606266;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    margin-right: 30px;
    outline: 0;
    white-space: nowrap;
}

.c-pointer {
    cursor: pointer;
}

.tariffs-list ul li .card-item .card-pan-number {
    margin: 0;
    min-height: 0;
    overflow: hidden;
}

.card-item.active .card-pan-number {
    color: #49ba04;
}

.tariffs-list ul li .card-pan-number {
    color: #000;
    min-height: calc(100% - 40px);
}

.card-pan-number {
    color: #a2a2ae;
    font-weight: 500;
    margin-bottom: 15px;
}

.alert {
    border: none;
    border-radius: 20px;
    padding: 20px 20px 20px 70px;
    width: 100%;
    background-color: #fffbed;

}

.alert-header {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
}

.alet-icon {
    border-radius: 50%;
    float: left;
    height: 36px;
    line-height: 35px;
    margin: 0 0 0 -50px;
    padding: 5px;
    text-align: center;
    width: 36px;
    background-color: rgba(255, 199, 0, .2);
}

.alet-icon img {
    width: 100%;
}

.alert-title {
    color: #000;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
}

.alert-text {
    color: rgba(0, 0, 0, .5);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

.text-center {
    margin-top: 20px;
    text-align: center !important;
}
</style>