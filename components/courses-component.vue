<template >
    <div class="courses">
        <div class="courses-content">
            <div class="courses-heading">
                <h2>Bugunoq O’rganishni Boshlashingiz Mumkin Bo’lgan Darslar:</h2>
            </div>
            <CardCourses/>
        </div>
    </div>
</template>
<script >
import { useCourseStore } from '~/stores';
import { onMounted } from 'vue'
export default {
    setup() {
        const useAuth = useCourseStore()
        const getAllCourses = async () => {
            await useAuth.getAllCourses();
        };

        onMounted(getAllCourses)
        return {
            useAuth,
            getAllCourses
        }
    }

}

</script>
<style scoped>
.courses {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

.courses-content {
    width: 80%;
    height: auto;

}

.courses-heading {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.courses-heading h2 {
    font-size: 26px;
    font-weight: 700;
}

.courseItemFooter .btn {
    padding-left: 18px;
    padding-right: 18px;
    text-decoration: none;
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

@media screen and (max-width:1230px) {
    .courses-content {
        width: 98% !important;
    }
}

@media screen and (max-width: 1100px) {
    .courses ul li {
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
    .courses-heading h2{
        text-align: center;
    }
    .courses-content {
        margin-left: 0px !important;
    }
    .courses ul li {
        flex: 0 0 50%;
    }
}

@media screen and (max-width: 600px) {
    .courses ul li {
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