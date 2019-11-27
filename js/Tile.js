export default {
    props: ['position'],
    template:`
        <span class="tile" @click="logPosition"></span>
    `,
    methods: {
        logPosition() {
            console.log(this.position.x, this.position.y)
        }
    }
}