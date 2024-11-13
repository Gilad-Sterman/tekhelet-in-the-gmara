<template>
    <a :href="cardId">
        <div class="down-scroll"></div>
    </a>
</template>
<script>
export default {
    props: ['cardId'],
}
</script>
<style lang="scss">
.down-scroll {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border: 2px solid #cde1ee;
    border-radius: 50%;
    // position: relative;
    animation: down 2.5s infinite;
    // -webkit-animation: down 1.5s infinite;

    &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: 18px;
        width: 18px;
        height: 18px;
        border-left: 2px solid #cde1ee;
        border-bottom: 2px solid #cde1ee;
        transform: rotate(-45deg);
    }

    @keyframes down {
        0% {
            bottom: 20px;
        }

        20% {
            bottom: 10px;
        }

        40% {
            transform: 20px;
        }
    }

    @-webkit-keyframes down {
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
</style>