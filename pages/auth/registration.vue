<template >
    <div class="w-screen h-screen flex justify-center items-center bg-[#EEEDF2]">
        <div class="w-[95%] flex-col h-[90%] flex  justify-center items-start  gap-10">
            <h1>DLA</h1>
            <div class="w-full h-[800px] flex justify-center items-center bg-[#FFF] boxBorder">
                <div class="cover">
                    <div class="box-head">
                        <h3>Your account</h3>
                        <div class="box-head-progress">
                            <div class="first-step">
                                <div class="one">
                                    1
                                </div>
                                <p>password</p>
                            </div>
                            <div class="mid-line">
                                <div class="line"></div>
                            </div>
                            <div class="second-step">
                                <div class="second">
                                    2
                                </div>
                                <p>general info</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-body">

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
h1 {
    color: #000;
    font-family: 'Figtree', ;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.boxBorder {
    border-radius: 40px;
    position: relative;
}

.cover {
    width: 95%;
    height: 85%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.box-head {
    width: 100%;
    height: 86px;
}

h3 {
    color: #000;
    font-family: "Figtree", ;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.box-body {
    width: 100%;
    height: 85%;
    flex-shrink: 0;
    border-radius: 12px;
    background: #F4F3F9;
}

.box-head-progress {
    width: 400px;
    height: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.first-step {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
}

.one {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    background-color: #027DFC;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: Figtree;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;

}

.first-step p {
    color: #000;
    font-family: "Figtree", ;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase
}

.mid-line {
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
}

.line {
    width: 150px;
    border: 1px solid #CECECE;
}

.second-step {
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
}

.second {
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-family: Figtree;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
}

.second-step p {
    color: #999;
    font-family: Figtree;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
}
</style>