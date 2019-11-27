export default {
    props: ['position'],
    template:`
        <span ref="tile" class="tile" @click="logPosition"></span>
    `,
    methods: {
        logPosition() {
            console.log(this.position.x, this.position.y)
        }
    },
    mounted() {
       //this.$refs.tile.style.setProperty('background-image', `url(${this.position.img})`)
    }
}