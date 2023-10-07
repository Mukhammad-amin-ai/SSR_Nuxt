<template >
    <HeaderComponent :bgColor="bgProp" :bgShadow="shadow" />
    <div class="content">
        <div class="content-header">
            <div class="bread-crubs">
                <nuxt-link to="/" class="link">Bosh sahifa<i class='bx bx-chevron-right'></i> </nuxt-link>
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
                                    <NuxtLink class="el-tooltip" to="#">
                                        <div class="playIco lock"></div>
                                        <div class="lessonInfo">
                                            <div class="lessonNumber">{{ lesson.order }}-dars</div>
                                            <h3 class="lessonTitle">{{ lesson.theme }}</h3>
                                        </div>
                                    </NuxtLink>
                                </li>

                            </ul>
                        </div>
                        <div class="sidebar-footer">
                            <button>
                                Obuna bo'lish
                            </button>
                        </div>
                    </div>
                </div>
                <div class="v-player-col2">
                    <div class="v-player-container">
                        <div class="iframe-player">
                            <iframe :src="'https://sinfxona.uz/api/api/v1/courses/tizervideo/' + this.$route.params.id"
                                frameborder="0" width="100%" height="460px"></iframe>
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
                                    <div>
                                        <div class="text-button">
                                            <p>Izoh qoldirish uchun tizimga kiring</p>
                                            <NuxtLink to="/#enterForm" class="btn btn-success">
                                                Kirish
                                            </NuxtLink>
                                        </div>
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
<script>
import { useCourseStore, useCommentStore } from '~/stores';

export default {
    data() {
        return {
            bgProp: '#fff',
            shadow: "0 6px 34px rgba(73,186,4,.09)",
        }
    },
    setup() {
        const route = useRouter()
        let courseId = ref(route.currentRoute.value.params.id)
        const useCourse = useCourseStore()
        const useComment = useCommentStore()

        let useCourseID = () => {
            useCourse.getCourseById(courseId.value)
        }
        let useCommentId = () => {
            useComment.getAllComments(courseId.value)
        }
        let videoById = () => {
            useCourse.getVideoByid(courseId.value)
            // console.log(useCourse.state.videoById);
        }
        onMounted(() => {
            useCourseID()
            useCommentId()
            videoById()
        })

        return {
            useCourse,
            useComment,
            useCommentId,
            useCourseID,
            videoById
        }
    }
}
</script>
<style scoped>
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
    width: 80%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
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
    /* background-color: aqua; */
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
    /* background-color: #49ba04; */
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


.sidebar-footer {
    background: #fff;
    border-top: 1px solid rgba(0, 0, 0, .1);
    bottom: 0;
    padding: 26px;
    position: sticky;
}

.sidebar-footer button {
    background: none;
    border: 1px solid #49ba04;
    border-radius: 28px;
    color: #49ba04;
    font-weight: 500;
    padding: 16px 24px;
    -webkit-text-decoration: none;
    text-decoration: none;
    transition: all .2s;
}


/* continue============================== */

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
}
</style>