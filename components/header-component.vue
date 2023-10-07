<template>
    <div class="header" :style="{ backgroundColor: bgColor, boxShadow: bgShadow }">
        <div class="header-content">
            <div class="logo">
                <nuxt-link to="/">
                    <img src="https://sinfxona.uz/img/Sinfxona_logo.png" alt="logo">
                </nuxt-link>
            </div>
            <nuxt-link to="/login" class="btn btn-success">
                <button>
                    SINFXONAGA KIRISH
                </button>
            </nuxt-link>
            <nuxt-link to="/login" class="btn2 btn-success">
                <button>
                    Kirish
                </button>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        bgColor: String,
        bgShadow: String
    }
}
</script>
<style scoped>
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
    .header{
        position: relative !important;
    }
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
}</style>