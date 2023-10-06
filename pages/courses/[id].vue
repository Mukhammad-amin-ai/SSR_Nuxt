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

                            </div>
                            <div class="sidebar-count">

                            </div>
                        </div>
                        <div class="sidebar-list">
                            <ul>
                                <li>
                                    <NuxtLink class="el-tooltip" to="#">
                                        <div class="playIco lock"></div>
                                        <div class="lessonInfo">
                                            <div class="lessonNumber">1-dars</div>
                                            <h3 class="lessonTitle">Kirish</h3>
                                        </div>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar-footer">

                        </div>
                    </div>
                </div>
                <div class="v-player-col2">
                    <div class="v-player-container">
                        <div class="iframe-player">
                            <iframe src="https://sinfxona.uz/api/api/v1/courses/tizervideo/34" frameborder="0" width="100%"
                                height="460px"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
</template>
<script>
export default {
    data() {
        return {
            bgProp: '#fff',
            shadow: "0 6px 34px rgba(73,186,4,.09)",
            dataById: ''
        }
    },
    mounted() {
        this.getCourseById()
    },
    methods: {
        async getCourseById() {
            this.dataById = await $fetch(`https://sinfxona.uz/api/api/v1/customers/${this.$route.params.id}`).catch((error) => error.data)
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
    font-size: 15px;
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
    background-color: aqua;
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
    background: aqua;
    border-top: 1px solid rgba(0, 0, 0, .1);
    bottom: 0;
    padding: 26px;
    position: sticky;
}




/* continue============================== */

.v-player-col2 {
    flex: 0 0 67.6%;
}

.v-player-container {
    width: 100%;
    height: 200vh;
    margin-top: 10px;
    background-color: #fff;
}

.iframe-player {
    margin-bottom: 10px;

}</style>