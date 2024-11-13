<template>
    <section class="app-header">
        <div class="lng-select">
            <button @click="nav('/')">
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700476247/eng1_rpfhk8.png" alt="">
            </button>
            <button @click="nav('/heb')">
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700476247/heb1_rmybm6.png" alt="">
            </button>
        </div>
        <button @click="scrollToTop()">
            <img src="https://res.cloudinary.com/dollaguij/image/upload/v1703232276/WhatsApp_Image_2023-12-21_at_17.15.46_tuubbf.jpg"
                alt="">
        </button>
    </section>
</template>

<script>
export default {
    methods: {
        nav(to) {
            this.$router.push(to)
            window.scrollTo(0, 0)
        },
        scrollToTop() {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style lang="scss">
.app-header {
    position: sticky;
    top: 1rem;
    padding: .5rem;
    margin: 1rem;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    z-index: 10;
    height: 90px;
    background-color: #ffffffab;
    // box-shadow: 0px 1px 4px rgba(154, 154, 154, 0.779);

    .lng-select {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    button {
        background-color: transparent;
        border: none;

        &:hover {
            scale: 1.05;
        }
    }

    img {
        width: 60px;
        border-radius: .25rem;
    }
}
</style>