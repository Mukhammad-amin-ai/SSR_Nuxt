<template >
    <HeaderComponent :bgColor="bgProp" :bgShadow="shadow" />
    <div class="content">
        <div class="content-header">
            <div class="bread-crubs">
                <nuxt-link to="/" class="link nuxt-link-active">Bosh sahifa<i class='bx bx-chevron-right'></i> </nuxt-link>
                <span>Mijozlarga A'lo Darajada Xizmat Ko'rsatishning 11 Texnikalari
                </span>
            </div>
        </div>
        <div class="main-content">
            <div class="content-cover">
                <div class="v-player-col1">
                    <div class="vp-sidebar">
                        <div class="sidebar-header">
                            <div class="sidebar-title">
                                <h2>
                                    <span>
                                        {{ useCourse.state.coursesByid.data?.data.name }}
                                    </span>
                                </h2>
                            </div>
                            <div class="sidebar-count">
                                {{ useCourse.state.coursesByid.data?.data.lessons.length }}
                            </div>
                        </div>
                        <div class="sidebar-list">
                            <ul>
                                <li v-for="lesson in useCourse.state.coursesByid.data?.data.lessons" :key="lesson">
                                    <a class="el-tooltip" @click="videoId(lesson.id)">
                                        <div class="playIco   "
                                            :class="{ 'lock': locked, 'vatched': vatched, 'viewed': viewd }"></div>
                                        <div class="lessonInfo">
                                            <div class="lessonNumber">{{ lesson.order }}-dars</div>
                                            <h3 class="lessonTitle">{{ lesson.theme }}</h3>
                                        </div>
                                        <div role="tooltip" id="el-tooltip-6982" aria-hidden="true" v-if="loginedController"
                                            class="el-tooltip__popper is-dark"
                                            style="transform-origin: center top; z-index: 2063; display: none;">Bu darsni
                                            ochish
                                            uchun tizimga kiring<div class="popper__arrow"
                                                style="left: 171.5px;  top: -5px;">
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar-footer">
                            <nuxt-link to="/#enterForm" v-if="loginedController">
                                Obuna bo'lish
                            </nuxt-link>
                            <div v-if="controller">
                                <button>
                                    <i class='bx bx-arrow-to-left'></i>
                                </button>
                                <button>
                                    <i class='bx bx-arrow-to-right'></i>
                                    Keyingi dars
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu">
                    <button class="btn success" @click="showHidee">
                        <i class='bx bx-menu'></i>
                        <span>
                            Darslar
                        </span>
                    </button>
                    <div class="player-list-menu" v-if="showHide">
                        <div class="playlist-menu-header" @click="showHidee">
                            <h2>
                                <i class='bx bx-chevron-left'></i>
                                Ortga
                            </h2>
                        </div>
                        <div class="playlist-head-title">
                            <h2>
                                <span>
                                    {{ useCourse.state.coursesByid.data?.data.name }}
                                </span>
                            </h2>
                            <div class="sidebar-count">
                                {{ useCourse.state.coursesByid.data?.data.lessons.length }}
                            </div>
                        </div>
                        <!-- play-list -->
                        <div class=" sidebar-list">
                            <ul>
                                <li v-for="lesson in useCourse.state.coursesByid.data?.data.lessons" :key="lesson">
                                    <NuxtLink class="el-tooltip" to="#">
                                        <div class="playIco lock"></div>
                                        <div class="lessonInfo">
                                            <div class="lessonNumber">{{ lesson.order }}-dars</div>
                                            <h3 class="lessonTitle">{{ lesson.theme }}</h3>
                                        </div>
                                        <div role="tooltip" id="el-tooltip-6982" aria-hidden="true" v-if="loginedController"
                                            class="el-tooltip__popper is-dark"
                                            style="transform-origin: center top; z-index: 2063; display: none;">Bu darsni
                                            ochish
                                            uchun tizimga kiring<div class="popper__arrow"
                                                style="left: 171.5px;  top: -5px;">
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar-footer">
                            <nuxt-link to="/login">
                                <button>
                                    Obuna bo'lish
                                </button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="v-player-col2">
                    <div class="v-player-container">
                        <div class="iframe-player">
                            <img :src="'https://sinfxona.uz/api' + useCourse.state.coursesByid.data?.data.image"
                                style="width: 100%;" alt="video" v-if="useCourse.state.successOfvideo">
                            <iframe :src="'https://sinfxona.uz/api/api/v1/courses/tizervideo/' + courseId" frameborder="0"
                                width="100%" height="460px" v-if="defaultVideo && useCourse.state.notSuccess"></iframe>

                            <iframe :src="`https://sinfxona.uz/api/api/v1/get-lesson/video/${cutchId}?token=` + reffedToken"
                                frameborder="0" width="100%" height="460px" v-if="videos"></iframe>
                        </div>
                        <div class="video-info">
                            <div class="v-info-header">
                                <div class="v-head-par">
                                    <i class='bx bx-group'></i> Kursda o'qiyotganlar: {{
                                        useCourse.state.coursesByid.data?.data.customers_count }}
                                </div>
                                <div class="v-head-par">
                                    O'qituvchi: <b>{{ useCourse.state.coursesByid.data?.data.mentor.fullname }}</b>
                                </div>
                            </div>
                            <div class="v-info-body">
                                <h1>
                                    {{ useCourse.state.coursesByid.data?.data.name }}
                                </h1>
                                <div class="v-descrip">
                                    <p v-html="useCourse.state.coursesByid.data?.data.description"> </p>
                                </div>
                            </div>
                            <div id="videoComments">
                                <div class="v-info-body">
                                    <h1>Izohlar</h1>
                                    <div v-if="loginedController">
                                        <div class="text-button">
                                            <p>Izoh qoldirish uchun tizimga kiring</p>
                                            <NuxtLink to="/#enterForm" class="btn btn-success">
                                                Kirish
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div v-if="controller">
                                        <div role="slider" aria-valuetext="" aria-valuemin="0" aria-valuemax="5"
                                            tabindex="0" class="el-rate" aria-valuenow="5">
                                            <span class="el-rate__item" style="cursor: pointer;">
                                                <!-- <i class="el-rate__icon el-icon-star-off"
                                                    style="color: rgb(198, 209, 222);">
                                                  </i> -->
                                                <i class='bx bx-star'></i>

                                            </span>
                                            <span class="el-rate__item" style="cursor: pointer;">
                                                <!-- <i class="el-rate__icon el-icon-star-off"
                                                    style="color: rgb(198, 209, 222);">
                                                    </i> -->
                                                <i class='bx bx-star'></i>
                                            </span>
                                            <span class="el-rate__item" style="cursor: pointer;">
                                                <!-- <i class="el-rate__icon el-icon-star-off"
                                                    style="color: rgb(198, 209, 222);">
                                                    </i> -->
                                                <i class='bx bx-star'></i>
                                            </span>
                                            <span class="el-rate__item" style="cursor: pointer;">
                                                <!-- <i class="el-rate__icon el-icon-star-off"
                                                    style="color: rgb(198, 209, 222);">
                                                </i> -->
                                                <i class='bx bx-star'></i>
                                            </span>
                                            <span class="el-rate__item" style="cursor: pointer;">
                                                <!-- <i class="el-rate__icon el-icon-star-off"
                                                    style="color: rgb(198, 209, 222);">
                                                 </i> -->
                                                <i class='bx bx-star'></i>
                                            </span><!---->
                                        </div>
                                        <div class="el-form-item">
                                            <label for="comment" class="el-form-item__label">Izoh</label>
                                            <div class="el-form-item__content">
                                                <div class="el-textarea">
                                                    <textarea autocomplete="off" class="el-textarea__inner"
                                                        style="min-height: 42.6px; height: 42.6px;"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-end"> <button class="btn btn-success"
                                                style="cursor: pointer;">Yuborish</button></div>
                                    </div>


                                    <div class="comments">
                                        <div class="comment-item" v-for="comment in useComment.state.comments.data?.data"
                                            :key="comment">
                                            <div class="comment-header">
                                                <div class="user-name">
                                                    {{ comment.user_fullname }}
                                                </div>
                                            </div>
                                            <div class="comment-content">
                                                {{ comment.comment }}
                                            </div>
                                            <div class="flex">
                                                <div class="data">
                                                    {{ comment.created_at }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
import { useCourseStore, useCommentStore } from '~/stores';

let token = process.client ? localStorage.getItem("access_token") : null;
let reffedToken = ref(token)
let cutchId = ref()


const bgProp = ref('#fff')
const shadow = ref("0 6px 34px rgba(73,186,4,.09)")
let showHide = ref(false)
let locked = ref(true)
let controller = ref(false)
let loginedController = ref(true)
let defaultVideo = ref(true)
let videos = ref(false)
let vatched = ref(false)
let viewd = ref(false)



const route = useRouter()
let courseId = ref(route.currentRoute.value.params.id)
const useCourse = useCourseStore()
const useComment = useCommentStore()

let useCourseID = () => {
    useCourse.getCourseById(courseId.value)
    console.log(useCourse.state.coursesByid.data);
}
let useCommentId = () => {
    useComment.getAllComments(courseId.value)
}
let videoById = () => {
    useCourse.getVideoByid(courseId.value)
    console.log(useCourse.state.videoById);
}




function showHidee() {
    showHide.value = !showHide.value
}
function lockeded() {
    locked.value = !locked.value
}

function videoId(lessonId) {
    if (controller.value) {
        cutchId.value = lessonId
        defaultVideo.value = false
        videos.value = true
        viewd.value = true
    }
}




onMounted(() => {
    videoById()
    if (token) {
        lockeded()
        vatched.value = true
        controller.value = !controller.value
        loginedController.value = !loginedController.value
    }
    useCourseID()
    useCommentId()
    videoById()
})




</script>
<style scoped>
* {
    list-style: none;
}

.content {
    width: 100vw;
    max-width: 100%;
    height: auto;
    background-color: #f5f8ff;
}

.content-header {
    width: 100%;
    height: 30px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bread-crubs {
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;

}

.link {
    color: rgba(0, 0, 0, .5);
    text-decoration: none;
}

.link span {
    color: rgb(33, 37, 41);
}

.bx {
    font-size: 20px;
    font-weight: 500;
    vertical-align: middle;
}

.main-content {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

}

.content-cover {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
}

.v-player-col1 {
    flex: 0 0 32.4%;
    padding: 0 14px 0 0;
    margin-bottom: 50px;
}

.vp-sidebar {
    background: #fff;
    border-radius: 5px 5px 0 0;
    height: calc(100vh - 70px);
    position: sticky;
    top: 70px;
    margin-top: 10px;
}

.sidebar-header {
    width: 100%;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding: 18px 24px;
}

.sidebar-title {
    width: 80%;
    height: 100%;
}

.sidebar-title h2 {
    margin-bottom: 0;
    max-width: 270px;
}

.sidebar-title span {
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.sidebar-count {
    background: #49ba04;
    border-radius: 50%;
    color: #fff;
    flex: 0 0 40px;
    font-weight: 600;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 40px;
}

.sidebar-list {
    width: 100%;
    height: calc(100% - 185px);
    overflow-y: auto;

}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #49ba04;
}

::-webkit-scrollbar-thumb:hover {
    background: #49ba04;
}

.sidebar-list ul {
    margin: 0;
    padding: 0;
}

.sidebar-list ul li {
    list-style: none;
    transition: .1s all linear;
}

.sidebar-list ul li:hover {
    background-color: #f5f8ff;
}

.el-tooltip {
    color: #000;
    display: block;
    padding: 16px 25px;
    -webkit-text-decoration: none;
    text-decoration: none;
}

.playIco {
    background-position: 50%;
    background-repeat: no-repeat;
    border: 4px solid rgba(0, 0, 0, .25);
    border-radius: 50%;
    float: left;
    height: 26px;
    margin-top: 8px;
    width: 26px;
}

.vatched {
    background-color: #5ec60c !important;
    background-image: url('https://sinfxona.uz/img/icons/play.svg');
    border: none !important;
}

.viewed {
    background-image: url('https://sinfxona.uz/img/icons/checked.svg') !important;
}


.playIco .loc {
    background-color: rgba(0, 0, 0, .25);
    background-image: url('../../assets/svg/lock.svg');
    background-position: center 2px;
    border: none;
}

.lessonInfo {
    overflow: hidden;
    padding: 0 0 0 16px;
}

.lessonNumber {
    color: rgba(0, 0, 0, .35);
    font-size: 14px;
    font-weight: 500;
}

.lessonTitle {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0;
}

.el-tooltip__popper.is-dark {
    background: #303133;
    color: #fff;
}

.el-tooltip:hover .el-tooltip__popper.is-dark {
    display: block !important;
    transition: all .15s ease-in-out;
}

.el-tooltip__popper {
    word-wrap: break-word;
    border-radius: 4px;
    font-size: 12px;
    line-height: 1.2;
    min-width: 10px;
    padding: 10px;
    position: absolute;
    z-index: 2000;
}

.el-tooltip__popper {
    z-index: 9999999 !important;
}

.el-tooltip__popper .popper__arrow {
    border-width: 6px;
}

.el-tooltip__popper .popper__arrow,
.el-tooltip__popper .popper__arrow:after {
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    display: block;
    position: absolute;
    border-color: transparent;
    border-bottom-color: #303133;
    border-top-width: 0;
    margin-left: -5px;
    top: -9px;
    border-width: 5px;
}




.sidebar-footer {
    background: #fff;
    border-top: 1px solid rgba(0, 0, 0, .1);
    bottom: 0;
    padding: 26px;
    position: sticky;
}

.sidebar-footer>* {
    display: flex;
    gap: 10px;
    text-decoration: none;
}

.sidebar-footer button {
    -webkit-text-decoration: none;
    background: none;
    border: 1px solid #49ba04;
    border-radius: 28px;
    color: #49ba04;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    text-decoration: none;
    transition: all .2s;
}

.mobile-menu {
    width: 98%;
    height: auto;
    margin-top: 20px;
    margin-left: 15px;
    display: none;
}

.success {
    width: 100% !important;
    background: #49ba04 !important;
}

.player-list-menu {
    display: none;
    height: 100%;
    left: 0;
    overflow-y: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999999;
    background: #fff;
    border-radius: 5px 5px 0 0;
}

.playlist-menu-header {
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    display: flex;
    height: 76px;
    justify-content: space-between;
    padding: 18px 24px;
}

.playlist-menu-header h2,
.playlist-menu-header i {
    max-width: 270px;
    font-size: 20px;
    font-weight: 600;
}

.playlist-head-title {
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    display: flex;
    height: 76px;
    justify-content: space-between;
    padding: 18px 24px;
}

.playlist-head-title h2 {
    max-width: 270px;
    font-size: 20px;
    font-weight: 600;
}

.playlist-head-title h2 span {
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.play-list {
    width: 100%;
    height: calc(100% - 185px);
    overflow-y: auto;
}

.play {
    background-position: 50%;
    background-repeat: no-repeat;
    border: 4px solid rgba(0, 0, 0, .25);
    border-radius: 50%;
    float: left;
    height: 26px;
    margin-top: 8px;
    width: 26px;
}

.lock {
    background-color: rgba(0, 0, 0, .25);
    background-image: url('https://sinfxona.uz/img/icons/lock-2.svg');
    background-position: center 2px;
    border: none;
}

.v-player-col2 {
    flex: 0 0 67.6%;
    margin-bottom: 50px;

}

.v-player-container {
    width: 100%;
    height: auto;
    margin-top: 10px;
}

.iframe-player {
    margin-bottom: 10px;
}

.video-info {
    width: 100%;
    height: auto;
}

.v-info-header {
    background-color: #e2e6ed;
    border-radius: 10px 10px 0 0;
    padding: 10px 26px;
    display: flex;
    justify-content: space-between !important;
}

.v-head-par {
    color: #696984;
    font-weight: 500;
}

.v-info-body {
    background-color: #fff;
    padding: 20px 26px;
    margin-bottom: 16px;
}

.v-info-body h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}

.el-rate {
    height: 20px;
    line-height: 1;
}

.el-rate__item {
    font-size: 0;
    vertical-align: middle;
}

.el-rate__icon,
.el-rate__item {
    display: inline-block;
    position: relative;
}

.el-rate__item i {
    color: rgb(198, 209, 222);
    font-size: 30px !important;
    margin-right: 6px;
    transition: .3s;
    display: inline-block;
    position: relative;
}

.el-rate__item i:hover {
    color: rgb(247, 186, 42);
}


.el-form-item {
    margin-top: 30px;
}

.el-form-item .el-form-item__label {
    background: #fff !important;
    color: rgba(0, 0, 0, .5);
    font-weight: 500;
    line-height: normal !important;
    margin: -10px 0 -20px 10px;
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

.el-textarea {
    font-size: 14px;
    position: relative;
    vertical-align: bottom;
}

.el-color-picker__icon,
.el-input,
.el-textarea {
    display: inline-block;
    width: 100%;
}

.el-textarea .el-textarea__inner {
    border: 1px solid #b4bfd0;
    border-radius: 10px;
    min-height: 54px !important;
    padding: 10px 15px;
}

.el-textarea__inner {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: block;
    font-size: inherit;
    line-height: 1.5;
    padding: 5px 15px;
    resize: vertical;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
}

.text-end {
    margin-top: 10px;
    text-align: end;
}


.v-descrip {
    color: rgba(0, 0, 0, .6);
    font-weight: 500;
    white-space: pre-line;
}

#videoComments {
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 20px 26px;
}

.text-button {
    width: 100%;
    height: auto;
    text-align: center;
}

.text-button p {
    margin-bottom: 1rem;
    margin-top: 0;
}

.btn {
    border: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    padding: 11px 30px;
    text-decoration: none;
    color: #fff;
}

.btn-success {
    background: #49ba04 !important;
}

.comments {
    margin: 30px 0 0;
}

.comment-item {
    border-top: 1px solid rgba(0, 0, 0, .1);
    padding: 20px 0;
}

.comment-header {
    display: flex;
}

.user-name {
    font-size: 18px;
    font-weight: 600;
}

.comment-content {
    color: #696984;
    font-size: 14px;
    margin-bottom: 4px;
    white-space: pre-line;
}

.flex {
    display: flex !important;
}

.data {
    color: #696984;
    font-size: 14px;
    padding: 5px 0 0;
}


@media screen and (max-width:1230px) {
    .content-cover {
        width: 97% !important;
    }

    .bread-crubs {
        width: 100%;
        margin-left: 15px;
    }
}

@media screen and (max-width:900px) {
    .content-cover {
        width: 100% !important;
        display: inline;
    }

    .v-player-col1 {
        display: none;
    }

    .v-player-col2 {
        flex: 0 0 90%;
        margin-left: 2%;
    }

    .player-list-menu {
        display: block;
    }

    .mobile-menu {
        display: block;
        margin-left: 6px !important;

    }

    .playlist-menu-header,
    .playlist-head-title {
        height: auto;
    }

    .play-list {
        height: auto;
        padding-bottom: 90px;
    }
}

@media screen and (max-width:768px) {
    #videoComments {
        padding: 20px 0px !important;
    }

    .v-info-body {
        padding: 16px 14px !important;

    }
}

@media screen and (max-width:500px) {
    .content-header {
        height: auto;
    }

    .iframe-player iframe {
        height: 250px !important;
    }

    .v-info-header {
        flex-direction: column !important;
    }
    .text-button{
        line-height: 30px;
    }
}




</style>