<template>
    <div class="down-scroll-main last">
        <a @click="scrollToTop()">
            <div class="down-scroll-section last">
                <img class="last"
                    src="https://res.cloudinary.com/dqidhqkor/image/upload/v1710508380/icons/bwudwrzkha2pdcy3ga7q_yxkrvt.svg"
                    alt="">
            </div>
        </a>
    </div>
</template>
<script>
export default {
    props: ['cardId', 'isLast'],
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        }
    }
}
</script>
<style lang="scss">
.down-scroll-main {

    &.last {
        position: relative;



        .down-scroll-section {
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            border: 2px solid #134869;
            border-radius: 50%;
            animation: mainD 2.5s infinite;

            &:hover {
                cursor: pointer;
            }

            img {
                filter: brightness(0) saturate(100%) invert(24%) sepia(12%) saturate(3227%) hue-rotate(160deg) brightness(94%) contrast(94%);
                transform: rotate(180deg);
                
                &:hover {
                    transform: rotate(180deg);
                }
            }



            @keyframes mainD {
                0% {
                    bottom: -50px;
                }

                20% {
                    bottom: -40px;
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
                    transform: translateY(-15px);
                }

                40% {
                    transform: translate(0);
                }
            }

        }
    }
}
</style>