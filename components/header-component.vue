<template>
    <div class="header" :style="{ backgroundColor: bgColor, boxShadow: bgShadow }">
        <div class="header-content">
            <div class="logo">
                <nuxt-link to="/">
                    <img src="https://sinfxona.uz/img/Sinfxona_logo.png" alt="logo">
                </nuxt-link>
            </div>
            <nuxt-link to="/login" class="btn btn-success" v-if="useLogin.state.notLogined">
                <button>
                    SINFXONAGA KIRISH
                </button>
            </nuxt-link>
            <nuxt-link to="/login" class="btn2 btn-success" v-if="useLogin.state.notLogined">
                <button>
                    Kirish
                </button>
            </nuxt-link>
            <button class="user" v-if="useLogin.state.logined">
                <i class='bx bx-user'></i>
                Iskandar
                <div class="profile-drop">
                    <ul>
                        <li>
                            <div class="profileDropDownItem">
                                Status: <div>
                                    <div id="accessDays" class="me-3 success"><span>Obuna bo'lgansiz</span></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <nuxt-link to="/courses" class="profileDropDownItem">
                                <span>Barcha kurslar</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/cabinet/courses" class="profileDropDownItem">
                                <span>Mening kurslarim</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/cabinet/pay-history" class="profileDropDownItem">
                                <span>To'lovlar tarixi</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/cabinet/profile" class="profileDropDownItem">
                                <span>Mening Profilim</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <button class="profileDropDownItem logout" @click="logOut">Chiqish</button>
                        </li>
                    </ul>
                </div>
            </button>
        </div>
    </div>
</template>
<script setup>
import { useLoginStore } from '~/stores';

const { bgColor, bgShadow } = defineProps({
    bgColor: String,
    bgShadow: String
})

const useLogin = useLoginStore()

let checker = () => {
    useLogin.check()
}

let logOut = () => {
    useLogin.logOut()
}



onMounted(() => {
    checker()
})



</script>
<style scoped>
* {
    list-style: none;
    text-decoration: none;
}

.header {
    width: 100%;
    height: 70px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 99;
}

.header-content {
    width: 79.5%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn {
    width: 253.49px;
    height: 49px;
    border: none;
    border-radius: 50px;
    overflow: hidden;
}

.btn2 {
    display: none;
    width: 112.43px;
    height: 49px;
    border: none;
    border-radius: 50px;
    overflow: hidden;
    margin-right: 15px;
}

.btn2 button {
    width: 100%;
    height: 100%;
    border: none;
    background: #49ba04 !important;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}

.btn button {
    width: 100%;
    height: 100%;
    border: none;
    background: #49ba04 !important;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}

.logo {
    width: 147px;
    height: 29.4px;
}

.logo img {
    width: 100%;
}

.user {
    font-size: 16px;
    color: rgb(33, 37, 41);
    font-weight: 500;
    position: relative;
    border: none;
    background: transparent;
    cursor: pointer;
}

.user:hover {
    .profile-drop {
        display: block;
    }
}

.bx-user {
    color: #49ba04;
    font-size: 20px;
}


.profile-drop {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 6px 34px rgba(73, 186, 4, .12);
    display: none;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 999;
    text-align: start;
}

.profile-drop ul li {
    list-style: none;
    margin-bottom: 5px;
    padding: auto;

}

.profileDropDownItem {
    display: block;
    padding: 5px 10px;
    white-space: nowrap;
    color: #000;
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: rgb(33, 37, 41);
    font-weight: 500;
    cursor: pointer;
}

.logout {
    color: red;
}

#accessDays {
    background: #49ba04;
    color: #fff;
    padding: 5px;
    font-size: 15px !important;
    border-radius: 15px;
}

.me-3 {
    margin-right: 1.35rem;
}

@media screen and (max-width:1230px) {
    .header-content {
        width: 100% !important;
        margin: 0 15px;
    }

}

@media screen and (max-width:768px) {
    .btn {
        display: none;
    }

    .btn2 {
        display: block !important;
    }

    .header {
        position: relative !important;
    }
}

@media screen and (max-width:768px) {
    .btn2 {
        margin-right: 0px !important;
    }
}
</style>