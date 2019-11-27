import Block from './Block.js'
export default{
    components:{
  
    },
    template:`
    <div id="board">
        <div class="x"v-for="test in x">
            <div class="y" v-for="test in x">
                <img src="block.picture" width=30 height=30>
            </div>
        </div>
        
</div>
    `,
    data(){
        return{
            x: new Array(20),
            y: new Array(20)

        }
    },
    methods:{
        addToArray: function(){
            for(let i = 0; i<21; i++){
                let block = new Block(i, i, i, "https://i.ytimg.com/vi/TVKOjnPJtNQ/maxresdefault.jpg")
                this.x.push(block)
                this.y.push(block)
            }
        }
    }

    /*template:`
    <div class="container">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">three</div>
    <div class="four">four</div>
    <div class="five">five</div>
    <div class="six">six</div>
    </div>
    `*/
}