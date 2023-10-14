<template >
    <div class="footer">
        <div class="footer-wrapper">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="https://sinfxona.uz/img/Sinfxona_logo.png" alt="footer-logo"
                        style="width: 100%; height: 100%">
                </div>
                <p>Copyright 2023® – SINFXONA</p>
                <div class="f-txt-two">
                    <p>“SINFXONA” MCHJ, STIR: 310 329 074, Guvohnoma raqami: 2116426, Manzil: Yakkasaroy tumani, Shoxjaxon
                        MFY,
                        Imom At-Termeziy ko’chasi, 29-uy 31, H/R: 2020 8000 6056 2711 3001, MFO: 01183, Email:
                        <nuxt-link to="mailto:support@sinfxona.uz" style=" color: #6D737A;">support@sinfxona.uz</nuxt-link>
                    </p>
                </div>
                <div class="f-txt-three">
                    <p>
                        This site or product is not part of or endorsed by Facebook or any social media platform in any way.
                    </p>
                </div>
                <p>
                    FACEBOOK is a trademark of META PLATFORMS.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.footer {
    width: 100%;
    height: 400px;
    background: linear-gradient(180deg, #e2ebdb, #fff);
    display: flex;
    justify-content: center;
}

.footer-wrapper {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
}

.footer-content {
    width: 792px;
    height: 324px;
}

.footer-logo {
    width: 18%;
    height: 29.4px;
    margin-bottom: 20px;
}

.footer-logo img {
    width: 149px
}

.footer-content p {
    font-size: 16px;
    font-weight: 400;
    color: #6D737A;
}

.f-txt-two {
    width: 100%;
    height: 72px;
    margin: 20px 0;
}

.f-txt-three {
    width: 100%;
    height: 48px;
    margin-bottom: 10px;

}

@media screen and (max-width:1230px) {
    .footer-wrapper {
        width: 100% !important;
        margin-left: 15px;
    }
}


@media screen and (max-width: 768px) {

    .f-txt-two,
    .f-txt-three {
        height: auto !important;
    }


}
</style>