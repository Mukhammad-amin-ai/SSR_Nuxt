
<template >
    <div id="loginpage">
        <div class="loginPageContent">
            <div class="loginPageColForm loginPageCol">
                <div class="loginPageColFormHead">
                    <h1>Parolingizni unutdingizmi?</h1>
                    <span>
                        Parolingizni tiklash uchun telefon raqamingizni kiriting
                    </span>
                </div>
                <form class="el-form el-form--label-top">
                    <div class="el-form-item">
                        <label for="username" class="el-form-item__label">Telefon raqam</label>
                        <div class="el-form-item__content">
                            <div class="v-input el-input fulled ">
                                <input type="tel" autocomplete="off" placeholder="+998" class="el-input__inner">
                            </div>
                        </div>
                    </div>
                    <!-- <div class="el-form-item">
                        <label for="password" class="el-form-item__label">Parol</label>
                        <div class="el-form-item__content">
                            <div class="el-input">
                                <input type="password" autocomplete="off" placeholder="Parolingizni kiriting"
                                    class="el-input__inner">
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="text-end">
                        <nuxt-link to="/reset-password" class="link">Parolingizni unutdingizmi?</nuxt-link>
                    </div> -->
                    <div class="loginPageColFormFooter">
                        <button class="btn btn-success w-100">Kod jo'natish</button>
                    </div>
                    <div class="text-center pt-4">
                         <nuxt-link to="/login" class="link">Orqaga</nuxt-link></div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#loginpage {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px, 15px;
    background-color: #f5f8ff;
}

.loginPageContent {
    justify-content: space-between;
    max-width: 100%;
    width: 1210px;
}

.loginPageColForm {
    padding: 68px;
}

.loginPageCol {
    background: #fff;
    border-radius: 40px;
    box-shadow: 0 18px 38px rgba(3, 159, 0, .08);
    margin: 0 auto;
    max-width: 580px;
}

.loginPageColFormHead {
    margin-bottom: 50px;
    text-align: center;
}

.loginPageColFormHead h1 {
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
}

.loginPageColFormHead span {
    color: #696984;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat';

}

.el-form-item {
    margin-bottom: 22px;
}

.loginPageColForm .el-form-item .el-form-item__label {
    font-family: 'Montserrat';
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding: 0 !important;
}

.el-form-item__content {
    font-size: 14px;
    line-height: 40px;
    position: relative;
}

.el-input {
    font-size: 14px;
    position: relative;
}

.v-input .el-input__inner {
    background: none;
}

.el-input .el-input__inner {
    border: 1px solid #b4bfd0;
    border-radius: 10px;
    height: 54px;
}

.el-input__inner {
    /* -webkit-appearance: none; */
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
    font-family: 'Montserrat';
}

.el-form-item {
    margin-bottom: 22px;
}

.loginPageColForm .el-form-item .el-form-item__label {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding: 0 !important;
}

.el-form--label-top .el-form-item__label {
    display: inline-block;
    float: none;
    padding: 0 0 10px;
    text-align: left;
}

.el-form-item .el-form-item__label {
    background: #fff !important;
    color: rgba(0, 0, 0, .5);
    font-weight: 500;
    line-height: normal !important;
    margin: 0 0 -20px 10px;
    padding: 0 10px !important;
    position: relative;
    z-index: 1;
}

.el-form-item__label {
    box-sizing: border-box;
    color: #606266;
    float: left;
    font-size: 14px;
    line-height: 40px;
    padding: 0 12px 0 0;
    text-align: right;
    vertical-align: middle;
}

.el-form-item__content {
    font-size: 14px;
    line-height: 40px;
    position: relative;
}

.el-input {
    font-size: 14px;
    position: relative;
    font-family: 'Montserrat';
}

.el-input .el-input__inner {
    border: 1px solid #b4bfd0;
    border-radius: 10px;
    height: 54px;
}

.text-end {
    text-align: right !important;
}

.link {
    color: #006aff;
    -webkit-text-decoration: none;
    text-decoration: none;
}

.loginPageColFormFooter {
    padding: 50px 0 0;
}

button:not(:disabled) {
    cursor: pointer;
}

.btn-success {
    background: #49ba04 !important;
    color: #fff;
    font-family: "Montserrat";
}

.btn {
    border: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    padding: 11px 30px;
}

.w-100 {
    width: 100% !important;
}

.text-center {
    text-align: center !important;
}

.pt-4 {
    padding-top: 3rem !important;
}

@media screen and (max-width: 700px) {
    .loginPageColForm {
        padding: 38px;
    }
}

@media screen and (max-width: 1000px) {
    .loginPageColForm {
        padding: 60px 38px;
    }
}
</style>