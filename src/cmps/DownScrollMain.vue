<template>
    <div class="down-scroll-main">
        <a :href="cardId">
            <div class="down-scroll-section">
                <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1710508380/icons/bwudwrzkha2pdcy3ga7q_yxkrvt.svg"
                    alt="">
            </div>
        </a>
    </div>
</template>
<script>
export default {
    props: ['cardId'],
}
</script>
<style lang="scss">
.down-scroll-main {
    position: relative;


    .down-scroll-section {
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border: 2px solid #134869;
        border-radius: 50%;
        // position: relative;
        animation: mainD 2.5s infinite;
        // -webkit-animation: down 1.5s infinite;

        img {
            filter: brightness(0) saturate(100%) invert(24%) sepia(12%) saturate(3227%) hue-rotate(160deg) brightness(94%) contrast(94%);

            &.last {
                transform: rotate(180deg);
            }
        }

        @keyframes mainD {
            0% {
                bottom: -50px;
            }

            20% {
                bottom: -60px;
            }

            100% {
                bottom: -50px;
            }
        }

        @-webkit-keyframes mainD {
            0% {
                transform: translate(0);
            }

            20% {
                transform: translateY(15px);
            }

            40% {
                transform: translate(0);
            }
        }
    }
}
</style>