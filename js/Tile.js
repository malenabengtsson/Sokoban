export default {
    props: ['position'],
    template:`
        <span ref="tile" class="tile" @click="logPosition" ></span>
    `,
    methods: {
        logPosition() {
            console.log(this.position.x, this.position.y)
            let x = this.position.x
            let y = this.position.y
            this.$emit('testRight', x, y)
        }
    },
    mounted() {
     this.$refs.tile.style.setProperty('background-image', `url(${this.position.img})`)
    }
}