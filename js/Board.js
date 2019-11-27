export default{
    template:`
    <div id="board">
        <div class="x"v-for="test in x">
            <div class="y" v-for="test in y">
                <img src="https://i.ytimg.com/vi/TVKOjnPJtNQ/maxresdefault.jpg" width=30 height=30>
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