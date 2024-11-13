<template>
    <section className="side-bar">
        <ul>
            <li>
                <a href="#card1" :class="{ active: currCard('card1') }">אריג מצדה</a>
            </li>
            <li>
                <a href="#card2" :class="{ active: currCard('card2') }">נירון קיסר</a>
            </li>
            <li>
                <a href="#card3" :class="{ active: currCard('card3') }">חורבן בית שני</a>
            </li>
            <li>
                <a href="#card4" :class="{ active: currCard('card4') }">מרד התפוצות</a>
            </li>
            <li>
                <a href="#card5" :class="{ active: currCard('card5') }">ר' יוסי גלילי</a>
            </li>
            <li>
                <a href="#card6" :class="{ active: currCard('card6') }">אריג ואדי מרובעת</a>
            </li>
            <li>
                <a href="#card7" :class="{ active: currCard('card7') }">גזירות אדריאנוס - דורו של שמד</a>
            </li>
            <li>
                <a href="#card8" :class="{ active: currCard('card8') }">ר' מאיר</a>
            </li>
            <li>
                <a href="#card9" :class="{ active: currCard('card9') }">אנטונינוס (קרקלה)</a>
            </li>
            <li>
                <a href="#card10" :class="{ active: currCard('card10') }">ר' יהודה הנשיא</a>
            </li>
            <li>
                <a href="#card11" :class="{ active: currCard('card11') }">"פרגמטיא" בעיר צור</a>
            </li>
            <li>
                <a href="#card12" :class="{ active: currCard('card12') }">אביי</a>
            </li>
            <li>
                <a href="#card13" :class="{ active: currCard('card13') }">רבא</a>
            </li>
            <li>
                <a href="#card14" :class="{ active: currCard('card14') }">רב אחאי</a>
            </li>
            <li>
                <a href="#card15" :class="{ active: currCard('card15') }">יוסטיניאנוס</a>
            </li>
            <li>
                <a href="#card16" :class="{ active: currCard('card16') }">עריכת הבבלי</a>
            </li>
            <li>
                <a href="#card17" :class="{ active: currCard('card17') }">מלחמות הפרסים והביזנטיים</a>
            </li>
            <li>
                <a href="#card18" :class="{ active: currCard('card18') }">מדרש תנחומא</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeLink: null
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const card2 = document.getElementById('card2')
            const card3 = document.getElementById('card3')
            const card4 = document.getElementById('card4')
            const card5 = document.getElementById('card5')
            const card6 = document.getElementById('card6')
            const card7 = document.getElementById('card7')
            const card8 = document.getElementById('card8')
            const card9 = document.getElementById('card9')
            const card10 = document.getElementById('card10')
            const card11 = document.getElementById('card11')
            const card12 = document.getElementById('card12')
            const card13 = document.getElementById('card13')
            const card14 = document.getElementById('card14')
            const card15 = document.getElementById('card15')
            const card16 = document.getElementById('card16')
            const card17 = document.getElementById('card17')
            const card18 = document.getElementById('card18')

            if (window.scrollY < card2.offsetTop - 100) {
                this.activeLink = 'card1'
            } else if (window.scrollY < card3.offsetTop - 100) {
                this.activeLink = 'card2'
            } else if (window.scrollY < card4.offsetTop - 100) {
                this.activeLink = 'card3'
            } else if (window.scrollY < card5.offsetTop - 100) {
                this.activeLink = 'card4'
            } else if (window.scrollY < card6.offsetTop - 100) {
                this.activeLink = 'card5'
            } else if (window.scrollY < card7.offsetTop - 100) {
                this.activeLink = 'card6'
            } else if (window.scrollY < card8.offsetTop - 100) {
                this.activeLink = 'card7'
            } else if (window.scrollY < card9.offsetTop - 100) {
                this.activeLink = 'card8'
            } else if (window.scrollY < card10.offsetTop - 100) {
                this.activeLink = 'card9'
            } else if (window.scrollY < card11.offsetTop - 100) {
                this.activeLink = 'card10'
            } else if (window.scrollY < card12.offsetTop - 100) {
                this.activeLink = 'card11'
            } else if (window.scrollY < card13.offsetTop - 100) {
                this.activeLink = 'card12'
            } else if (window.scrollY < card14.offsetTop - 100) {
                this.activeLink = 'card13'
            } else if (window.scrollY < card15.offsetTop - 100) {
                this.activeLink = 'card14'
            } else if (window.scrollY < card16.offsetTop - 100) {
                this.activeLink = 'card15'
            } else if (window.scrollY < card17.offsetTop - 100) {
                this.activeLink = 'card16'
            } else if (window.scrollY < card18.offsetTop - 100) {
                this.activeLink = 'card17'
            }
            else {
                this.activeLink = 'card18'
            }
        },
        currCard(card) {
            return this.activeLink === card
        }
    }
}
</script>

<style lang="scss">
.side-bar {
    // height: 100%;

    ul {
        padding-inline-start: 0;
        margin: 0;

        li {
            list-style: none;
            margin-inline-start: 0;
            margin-bottom: .5rem;

            a {
                font-size: 20px;
                color: white;

                &.active {
                    font-size: 32px;
                    font-weight: bold;
                    line-height: 36px;
                }

                &:hover {
                    color: #e6f4e9;
                }
            }
        }
    }

    @media (max-width: 500px) {
        display: none;
    }
}
</style>