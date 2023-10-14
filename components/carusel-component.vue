<template>
    <div id="bannerSlider">
        <div class="bannerSliderContainer" :style="{ animationPlayState: control }">
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/1.png')">
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/2.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/3.png')">
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/4.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/5.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/6.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/7.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/8.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/9.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/10.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/13.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/12.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/1.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/14.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/3.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/2.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/5.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/4.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/7.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/6.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/9.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/8.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/10.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/12.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/13.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/14.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/1.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/2.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/3.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/4.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/5.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/6.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/7.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/8.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/9.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/10.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/13.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/12.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/1.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/14.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/3.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/2.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/5.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/4.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/7.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/6.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/9.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/8.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/10.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/12.png')"></div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top"
                    style="background-image: url('https://sinfxona.uz/img/slider/13.png')"></div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom"
                    style="background-image: url('https://sinfxona.uz/img/slider/14.png')"></div>
            </div>
            <!-- <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/1.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/2.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/3.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/4.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/5.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/6.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/7.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/8.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/9.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/10.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/13.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/12.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/1.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/14.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/3.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/2.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/5.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/4.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/7.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/6.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/9.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/8.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/10.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/12.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/13.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/14.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/1.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/2.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/3.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/4.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/5.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/6.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/7.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/8.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/9.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/10.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/13.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/12.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/1.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/14.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/3.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/2.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/5.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/4.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/7.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/6.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/9.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/8.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/10.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/12.webp" width="100%" height="180px" />
                </div>
            </div>
            <div class="bannerSliderItem">
                <div class="bannerSliderItem-image bannerSliderItem-top">
                    <NuxtImg format="webp" src="../public/images/13.webp" width="100%" height="180px" />
                </div>
                <div class="bannerSliderItem-image bannerSliderItem-bottom">
                    <NuxtImg format="webp" src="../public/images/14.webp" width="100%" height="180px" />
                </div>
            </div> -->
        </div>
    </div>
    <button class="sliderToggleBtn" @click="playBtn" v-if="showHide">
        <img src="https://sinfxona.uz/img/icons/play2.svg" alt="play-pause-button" style="width: 100%; height: 100%">
    </button>
    <button class="sliderToggleBtn" @click="pauseBtn" v-else>
        <img src="https://sinfxona.uz/img/icons/pause.svg" alt="play-pause-button" style="width: 100%; height: 100%">
    </button>
</template>
<script>
export default {
    data() {
        return {
            control: 'running',
            showHide: true
        }
    },
    methods: {
        playBtn() {
            this.control = 'paused'
            this.showHide = false
        },
        pauseBtn() {
            this.control = 'running'
            this.showHide = true
        }
    }
}
</script>
<style scoped>
#bannerSlider {
    overflow: hidden;
    top: 10px;
}

#bannerSlider,
#bannerSlider:after {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    bottom: -5px;
    width: 100%;
    background: linear-gradient(78.83deg, #eef1e8 40.15%, transparent 66.93%);
}

.bannerSliderContainer {
    animation-delay: 0s;
    animation-direction: normal;
    animation-duration: 50s;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-name: scrollingXXL;
    animation-play-state: running;
    animation-timing-function: linear;
    display: flex;
    padding-top: 10px;
}


.bannerSliderItem {
    flex: 0 0 320px;
    margin: 0 8px;
}

.bannerSliderItem-image {
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% auto;
    border-radius: 10px;
    height: 180px;
    max-width: 320px;
    width: 100%;
}


.bannerSliderItem-top {
    margin-bottom: 16px;
}

.bannerSliderItem-bottom {
    transform: translateX(-50%);
}



.sliderToggleBtn {
    background: none;
    border: none;
    top: 170px;
    padding: 5px;
    position: absolute;
    right: 0;
    z-index: 99;
    cursor: pointer;
}

@keyframes scrollingXXL {

    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-126vw);
    }

}

@media screen and (max-width: 1550px) {
    .bannerSliderItem-image {
        height: auto;
        padding: 56% 0 0 !important;
    }
}




@media screen and (max-width: 900px) {

    #bannerSlider {
        position: relative !important;
        top: -20vh !important;
    }

    #bannerSlider:after {
        display: none !important;
    }

    .bannerSliderItem {
        flex: 0 0 30vw !important;
        margin: 0 5px !important;
    }

    .bannerSliderItem-top {
        margin-bottom: 10px !important;
    }

    

    #bannerSlider {
        position: relative !important;
        top: -50px !important
    }
}

@media screen and (max-width: 800px) {

    .bannerSliderItem {
        flex: 0 0 40vw !important;
    }
}

@media screen and (max-width: 768px) {

    #bannerSlider:after {
        display: none !important;
    }

}



@media screen and (max-width: 600px) {

    .bannerSliderItem {
        flex: 0 0 50vw !important;
    }

}

@media screen and (max-width:425px) {

    #bannerSlider {
        position: relative !important;
        top: -150px !important
    }


}

@media screen and (max-width:375px) {

    #bannerSlider {
        position: relative !important;
        top: -20% !important;

    }


}
</style>