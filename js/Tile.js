export default {
    props: ['position'],
    template:`
        <span ref="tile" class="tile" @click="logPosition"></span>
        
    `,
    methods: {
        logPosition() {
            let x = this.position.x
            let y = this.position.y
            this.$emit('movePlayerOnClick', x, y)
        }
    },mounted() {
      this.$refs.tile.style.setProperty('background-image', `url(${this.position.img})`)
     },
     watch:{
      position:{
        deep: true,
        handler(val){
          this.$refs.tile.style.setProperty('background-image', `url(${this.position.img})`)
        }
      }
    }

}