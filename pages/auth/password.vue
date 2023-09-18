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
                        <div class="box-body-container">
                            <div class="box-form">
                                <h3>Set up your own password</h3>
                                <p>Your current password is what you’ve received on your email.</p>
                                <p>You can keep it or change now (or any time you want)</p>
                                <div class="password">
                                    <label for="password">New password</label>
                                    <div class="password-input">
                                        <input type="password" name="password" placeholder="New password">
                                        <button class="conf-show">
                                            <i class='bx bx-show'></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="password">
                                    <label for="password">Confirm new password</label>
                                    <div class="password-input">
                                        <input type="password" name="password" placeholder="Confirm new password">
                                        <button class="conf-show">
                                            <i class='bx bx-show'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="route-buttons">
                                <nuxt-link to="/">
                                    <button class="transparent">
                                        Skip for now
                                    </button>
                                </nuxt-link>
                                <nuxt-link to="/auth/general-info">
                                    <button class="next-step">
                                        Next step
                                    </button>
                                </nuxt-link>
                            </div>
                        </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-family: 'Figtree', ;
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
    border: 2px solid #CECECE;

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
    font-family: 'Figtree', ;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
}

.second-step p {
    color: #999;
    font-family: 'Figtree', ;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
}

.box-body-container {
    width: 96%;
    height: 88%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.box-form {
    width: 481px;
    height: 297px;
}

.box-form h3 {
    color: #000;
    font-family: 'Figtree', ;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 24px;
}

.box-form p {
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Figtree', ;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.password {
    width: 321px;
    height: 71px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

label {
    color: #000;
    font-family: 'Figtree', ;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}

.password-input {
    width: 420px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    overflow: hidden;
    display: flex;
}

.password-input input[type='password'] {
    padding: 14px 200px 14px 16px;
    color: #000;
    font-family: 'Figtree', ;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.password-input input[type='password']:focus {
    outline: none;
}

.conf-show {
    width: auto;
    height: 100%;
    font-size: 25px;
}

.route-buttons {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
}

.transparent,
.next-step {
    width: 280px;
    height: 100%;
    text-align: center;
    font-family: 'Figtree', ;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.transparent {
    color: #027DFC;
    height:46px;
}

.next-step {
    border-radius: 10px;
    background: #027DFC;
    color: #FFF;
    height:46px;
}
</style>