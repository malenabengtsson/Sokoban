export default {
    props: ['position'],
    template:`
        <button class="tile" @click="logPosition">X</button>
    `,
    methods: {
        logPosition() {
            console.log(this.position.x, this.position.y)
        }
    }
}