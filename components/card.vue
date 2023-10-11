<template >
    <div>
        <div class="courses-cards">
            <ul>
                <li v-for="card in useAuth.state?.courses?.data?.data" :key="card">
                    <div class="courseItem">
                        <div class="course-image c-pointer"
                            :style="{ backgroundImage: `url(https://sinfxona.uz/api${card?.course.image})` }"
                            v-if="notLogined">
                            <div class="course-category">
                                {{ card?.course.category.name }}
                            </div>
                        </div>
                        <nuxt-link class="link" :to="'/courses/' + card?.course.id" v-if="logined">
                            <div class="course-image c-pointer"
                                :style="{ backgroundImage: `url(https://sinfxona.uz/api${card?.course.image})` }">
                                <div class="course-category">
                                    {{ card?.course.category.name }}
                                </div>
                            </div>
                        </nuxt-link>

                        <div class="course-mentor">
                            <div class="course-mentor-photo"
                                :style="{ backgroundImage: `url(https://sinfxona.uz/api${card?.course.mentor.image})` }">
                            </div>
                            <div class="course-mentor-fullname">
                                {{ card?.course.mentor.fullname }}
                            </div>
                        </div>
                        <div class="course-name c-pointer">
                            {{ card?.course.name }}
                        </div>
                        <div class="course-desc">
                            <p v-html="card?.course.description"></p>
                        </div>
                        <div class="courseItemFooter" v-if="notLogined">
                            <div class="courseUsers">
                                <i class='bx bx-group'></i>
                                O`quvchilar: {{ card?.course.customers_count }}
                            </div>
                            <nuxt-link :to="'/courses/' + card?.course.id" class="btn btn-primary">Ko'rish</nuxt-link>
                        </div>
                        <div class="courseItemProcess" v-if="logined">
                            <div class="courseItemProcessSlide">
                                <span :style="{
                                    width: (card?.lessons.length / card?.course.lessons_count) * 100+'%'
                                }"></span>
                            </div>
                            <div class="courseItemProcessPercent">
                                <span>{{ card?.lessons.length }} ta dars</span> / {{ card?.course.lessons_count }} tadan
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { useCourseStore } from '~/stores';
let token = process.client ? localStorage.getItem("access_token") : null;

let notLogined = ref(true)
let logined = ref(false)

const useAuth = useCourseStore()
// const getAllCourses = async () => {
//     await useAuth.getAllCourses();
//     console.log(useAuth.state?.courses?.data);
// };

const getMyCourses = async () => {
    await useAuth.myCourse()
    console.log(useAuth.state?.courses?.data?.data);
}



onMounted(() => {
    const route = useRoute()
    if (route.href === '/cabinet/courses') {
        getMyCourses()
    }
    if (token) {
        notLogined.value = false
        logined.value = true
    }


})



</script>
<style scoped>
* {
    text-decoration: none;
}

.courses-cards ul {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
    padding: 0;
}

.courses-cards ul li {
    flex: 0 0 33.3333333333%;
    list-style: none;
    padding: 10px;
}


.courseUsers {
    color: #696984;
    font-size: 14px;
    display: flex;
    align-items: center;
}

.courseItemFooter {
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, .1);
    display: flex;
    font-weight: 500;
    justify-content: space-between;
    margin-top: 10px;
    padding-top: 12px;
}

.course-desc {
    color: #696984;
    font-size: 14px;
    white-space: pre-line;
}

.c-pointer {
    cursor: pointer;
}

.course-name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
}

.course-mentor-fullname {
    font-size: 14px;
    font-weight: 500;
    padding-left: 5px;
}

.course-mentor-photo {
    background-size: cover;
    border-radius: 50%;
    flex: 0 0 30px;
    height: 30px;
    width: 30px;
}


.course-mentor {
    align-items: center;
    display: flex;
    margin-bottom: 10px;
}

.course-category {
    background: hsla(0, 0%, 100%, .5);
    border-radius: 5px;
    font-weight: 500;
    left: 10px;
    line-height: 34px;
    padding: 0 10px;
    position: absolute;
    text-transform: uppercase;
    top: 10px;
}
.link{
    text-decoration: none;
    color: #000;
}
.c-pointer {
    cursor: pointer;
}

.course-image {
    background-position: center 30%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
    height: 200px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
}

.courseItem {
    background: #fff;
    border-radius: 10px;
    padding: 12px;
}

.btn-primary {
    background: #ebf8e1 !important;
    color: #49ba04 !important;
}

.btn {
    border: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    padding: 11px 30px;
}

.bx {
    font-size: 20px;
}


.courseItemProcess {
    padding: 18px 0 0;
}

.courseItemProcessSlide {
    background: #ebebeb;
    border-radius: 5px;
    height: 5px;
    margin-bottom: 8px;
    position: relative;
}

.courseItemProcessSlide span {
    background: #49ba04;
    border-radius: 5px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
}

.courseItemProcessPercent {
    color: #696984;
    font-weight: 500;
    text-align: right;
}

.courseItemProcessPercent span {
    color: #000;
}



@media screen and (max-width: 1100px) {
    .courses-cards ul li {
        flex: 0 0 33.33333333%;
    }
}

@media screen and (max-width:1024px) {
    .courses-content {
        width: 100% !important;
        margin-left: 15px;
    }
}

@media screen and (max-width: 900px) {
    .courses-heading h2 {
        text-align: center;
    }

    .courses-content {
        margin-left: 0px !important;
    }

    .courses-cards ul li {
        flex: 0 0 50%;
    }
}

@media screen and (max-width: 600px) {
    .courses-cards ul li {
        flex: 0 0 100%;
    }

    .courses-heading {
        height: 150px !important;
    }
}

@media screen and (max-width: 400px) {
    .courses-heading {
        height: 200px !important;
    }
}
</style>