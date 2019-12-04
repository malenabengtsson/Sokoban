export default {
    template: `
    <div></div>
    `,
    data(){
        return {
            
        }
    },
    created() {
        document.onkeydown = checkKey
    },
methods: {
    checkKey(e) {

        e = e || window.event;
    
        if (e.keyCode == '38') {
            // up arrow
            console.log("u pressed up")
            this.$emit('keyUp')
        }
        else if (e.keyCode == '40') {
            // down arrow
            console.log("u pressed down")
            //if(this.position)
        }
        else if (e.keyCode == '37') {
           // left arrow
           console.log("u pressed left")
        }
        else if (e.keyCode == '39') {
           // right arrow
           console.log("u pressed right")
        } else {
            console.log("u pressed something else")
        }
    
    }
}
}


