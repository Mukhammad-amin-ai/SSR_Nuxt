<template>
    <div id="bannerSlider">
        <div class="bannerSliderContainer" :style="{ animationPlayState: control }">
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
        </div>
        <button class="sliderToggleBtn" @click="playBtn" v-if="showHide">
            <img src="https://sinfxona.uz/img/icons/play2.svg" alt="play-pause-button">
        </button>
        <button class="sliderToggleBtn" @click="pauseBtn" v-else>
            <img src="https://sinfxona.uz/img/icons/pause.svg" alt="play-pause-button">
        </button>
    </div>
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
@media screen and (max-width: 1550px) {
    .bannerSliderItem-image {
        height: auto;
        padding: 56% 0 0;
    }
}

@media screen and (max-width: 900px) {

    #bannerSlider {
        position: relative;
        top: 5vh;
    }
}
@media screen and (max-width: 768px) {
    #bannerSlider{
        top:70vh !important;
    }
    #bannerSlider:after{
        display: none !important;
    }
}
.sliderToggleBtn {
    background: none;
    border: none;
    bottom: 0;
    padding: 5px;
    position: absolute;
    right: 0;
    z-index: 99;
    cursor: pointer;
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

.bannerSliderItem-bottom {
    transform: translateX(-50%);
}

.bannerSliderItem-top {
    margin-bottom: 16px;
}

.bannerSliderItem {
    flex: 0 0 320px;
    margin: 0 8px;
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
}

@keyframes scrollingXXL {

    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-126vw);
    }

}

#bannerSlider,
#bannerSlider:after {
    left: 0;
    position: absolute;
    width: 100%;
}

#bannerSlider {
    overflow: hidden;
    top: 10px;
}

#bannerSlider:after {
    background: linear-gradient(78.83deg, #eef1e8 40.15%, transparent 66.93%);
    bottom: -5px;
    content: "";
    top: -5px;
}

#bannerSlider,
#bannerSlider:after {
    left: 0;
    position: absolute;
    width: 100%;
}
</style>