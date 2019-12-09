import Tile from './Tile.js'

export default {
  components: {
    Tile,
  },
    template:`
    <div id="map">
    <label for="level">Choose which level to play!</label>
    <div class="level">
    <button style="button" id="reset" @click="reset">Reset</button>
      <button type="button" @click="level1">Level 1</button>
      <button type="button" @click="level2">Level 2</button>
      <button type="button" @click="level3">Level 3</button>
      <button type="button" @click="level4">Level 4</button>
      </div>
      <div class="grid-layout">
        <Tile
          v-for="(tile, i) of flatTiles" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y"
          @movePlayer="movePlayer"
          >
        </Tile>
      </div>
      </div>
    `,
    data(){
      return{
        tiles: [],
        grid: [],
        flatTiles: [],
        gameBoard: 10,
      wallImage: 'css/img/wall.jpg',
      stoneImage: 'css/img/stone.png',
      playerImage: 'css/img/player.png',
      finishImage: 'css/img/finish.png',
      grassImage: 'css/img/grass.png',
      stoneOnGoal: 'css/img/stoneOnGoal.png',
      nrStoneOnGoal: 0,
      nrOfGoals: 0,
      moves: 0,
      level: 1,
      xValue: 0,
      yValue: 0,
      }

    },
    
    created() {
      window.onkeydown = this.checkKey
    },
    
    methods: {
      level1(){
        this.level = 1
        this.nrOfGoals = 3
        this.tiles = []
        this.grid = []
        this.grid = [
          [' ', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' '],
          [' ', 'W', 'F', 'W', 'W', 'W', 'W', 'W', ' ', ' '],
          [' ', 'W', 'F', 'F', 'G', 'W', 'W', 'W', ' ', ' '],
          [' ', 'W', 'G', 'G', 'G', 'G', 'G', 'W', ' ', ' '],
          [' ', 'W', 'G', 'S', 'S', 'S', 'P', 'W', ' ', ' '],
          [' ', 'W', 'G', 'G', 'G', 'G', 'W', 'W', ' ', ' '],
          [' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ]
        for(let row = 0; row <this.gameBoard; row++){
          this.tiles[row] = []
          for(let col = 0; col <this.gameBoard; col++){
            let position = {
              x: col,
              y: row,
              img: '',
            }
            this.tiles[row].push(position)
            
            switch (this.grid[row][col]){
              case "W":
                this.tiles[row][col].img= this.wallImage;
                break;
                case "S":
                this.tiles[row][col].img= this.stoneImage;
                break;
                case "P":
                    this.tiles[row][col].img= this.playerImage;
                break;
                case "F":
                    this.tiles[row][col].img= this.finishImage;
                    break;
                case "G":
                      this.tiles[row][col].img = this.grassImage;
                    break;
            }
  
          }
        }
        this.flatTiles = this.tiles.flat()

      },
      level2(){
        this.level = 2
        this.nrOfGoals = 3
        this.tiles = []
        this.grid = []
        this.grid = [
          [' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' '],
          [' ', 'W', 'G', 'G', 'G', 'W', 'W', 'W', 'W', ' '],
          [' ', 'W', 'G', 'G', 'G', 'W', 'G', 'G', 'W', ' '],
          [' ', 'W', 'W', 'G', 'G', 'G', 'G', 'F', 'W', ' '],
          ['W', 'W', 'W', 'G', 'W', 'W', 'W', 'F', 'W', ' '],
          ['W', 'G', 'S', 'G', 'W', ' ', 'W', 'F', 'W', ' '],
          ['W', 'G', 'S', 'S', 'W', ' ', 'W', 'W', 'W', ' '],
          ['W', 'P', 'G', 'G', 'W', ' ', '', ' ', ' ', ' '],
          ['W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ]
        for(let row = 0; row <this.gameBoard; row++){
          this.tiles[row] = []
          for(let col = 0; col <this.gameBoard; col++){
            let position = {
              x: col,
              y: row,
              img: '',
            }
            this.tiles[row].push(position)
            
            switch (this.grid[row][col]){
              case "W":
                this.tiles[row][col].img= this.wallImage;
                break;
                case "S":
                this.tiles[row][col].img= this.stoneImage;
                break;
                case "P":
                    this.tiles[row][col].img= this.playerImage;
                break;
                case "F":
                    this.tiles[row][col].img= this.finishImage;
               break;
                case "G":
                      this.tiles[row][col].img = this.grassImage;
                      break;
            }
          }
        }
        this.flatTiles = this.tiles.flat()
        //this.render++;
      },
      level3(){
        this.level = 3
        this.nrOfGoals = 4
        this.tiles = []
        this.grid = []
        this.grid = [
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'G', 'G', 'G', 'F', 'G', 'S', 'P', 'W', 'W'],
          ['W', 'F', 'W', 'W', 'W', 'G', 'G', 'S', 'G', 'W'],
          ['W', 'G', 'G', 'W', 'W', 'G', 'W', 'G', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'S', 'G', 'W', 'G', 'G', 'W'],
          ['W', 'G', 'G', 'S', 'W', 'G', 'W', 'G', 'G', 'W'],
          ['W', 'W', 'W', 'G', 'G', 'G', 'F', 'G', 'W', 'W'],
          ['W', 'W', 'W', 'F', 'G', 'G', 'G', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ]
        for(let row = 0; row <this.gameBoard; row++){
          this.tiles[row] = []
          for(let col = 0; col <this.gameBoard; col++){
            let position = {
              x: col,
              y: row,
              img: '',
            }
            this.tiles[row].push(position)
            
            switch (this.grid[row][col]){
              case "W":
                this.tiles[row][col].img= this.wallImage;
                break;
                case "S":
                this.tiles[row][col].img= this.stoneImage;
                break;
                case "P":
                    this.tiles[row][col].img= this.playerImage; 
                break;
                case "F":
                    this.tiles[row][col].img= this.finishImage;
               break;
                case "G":
                      this.tiles[row][col].img = this.grassImage;
                      break;
            }
            this.flatTiles = this.tiles.flat()
          }
        }
      },
      level4(){
        this.level = 4
        this.nrOfGoals = 5
        this.tiles = []
        this.grid = []
        this.grid = [
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'F', 'G', 'P', 'W', 'W', 'W'],
          ['W', 'F', 'G', 'F', 'G', 'W', 'G', 'W', 'W', 'W'],
          ['W', 'G', 'W', 'G', 'G', 'G', 'F', 'G', 'G', 'W'],
          ['W', 'G', 'W', 'G', 'S', 'F', 'S', 'G', 'G', 'W'],
          ['W', 'S', 'W', 'G', 'W', 'W', 'G', 'W', 'G', 'W'],
          ['W', 'G', 'G', 'S', 'W', 'W', 'S', 'S', 'G', 'W'],
          ['W', 'W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ]
        for(let row = 0; row <this.gameBoard; row++){
          this.tiles[row] = []
          for(let col = 0; col <this.gameBoard; col++){
            let position = {
              x: col,
              y: row,
              img: '',
            }
            this.tiles[row].push(position)
            
            switch (this.grid[row][col]){
              case "W":
                this.tiles[row][col].img= this.wallImage;
                break;
                case "S":
                this.tiles[row][col].img= this.stoneImage;
                break;
                case "P":
                    this.tiles[row][col].img= this.playerImage; 
                break;
                case "F":
                    this.tiles[row][col].img= this.finishImage;
               break;
                case "G":
                      this.tiles[row][col].img = this.grassImage;
                      break;
            }
            this.flatTiles = this.tiles.flat()
          }
        }
      },
      movePlayer(x, y){
        console.log('X is' + x)
        console.log('Y is' + y)
        this.xValue = x;
        this.yValue = y;
          //Moving right
          if(this.playerImage == this.tiles[y][x-1].img){
          this.moveRight(this.xValue, this.yValue)
          }
          //Moving left
          else if(this.playerImage == this.tiles[y][x+1].img){
            this.moveLeft(this.xValue, this.yValue)
          }
          //Moving down
          else if(this.playerImage == this.tiles[y-1][x].img){
            this.moveDown(this.xValue, this.yValue)
          }
          //Moving up
          else if(this.playerImage == this.tiles[y+1][x].img){
          this.moveUp(this.xValue, this.yValue)
            
            }
        
        //Loop to set goal-image when player is not on that tile
        for (let i = 0; i <this.tiles.length; i++){
          for (let j = 0; j <this.tiles[x].length; j++){
            if (this.tiles[i][j].img != this.playerImage){

            if (this.tiles[i][j].img == this.stoneOnGoal){
                console.log('Stone in right position')
                this.nrStoneOnGoal++
            }
            else if (this.grid[i][j] == 'F' && this.tiles[i][j].img == this.stoneImage){
              this.tiles[i][j].img = this.stoneOnGoal
              console.log('Stone on goal')
              
            }
            else if (this.grid[i][j] == 'F' && this.tiles[i][j].img != this.finishImage){
              this.tiles[i][j].img = this.finishImage
              console.log('Set goal image')
            }
          }
            else{
              console.log('Do nothing')
            }
            
          }
        }
        console.log('Number of stones in right position: ' + this.nrStoneOnGoal)
        this.flatTiles = this.tiles.flat()

        // Check if all stones are on the goal-images
        if(this.nrStoneOnGoal == this.nrOfGoals){
          console.log(`You cleared the stage with ${this.moves} moves!`)
          if (confirm('You completed the level! Press OK to continue to next level')) {
            if(this.level == 1){
              console.log("you are on level 1")
              this.level2()
            }
            else if(this.level == 2){
              console.log("you are on level 2")
              this.level3()
            }
            else if(this.level == 3){
              console.log("you are on level 3")
              this.level4()
            }
          } else {
           this.reset()
          }
        }
        this.nrStoneOnGoal = 0
        
      },
      reset(){
        window.location.reload()
    },
    moveRight(x,y){
      if (this.tiles[y][x].img != this.wallImage){
        //Checking if theres a stone and if it can be moved
        if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y][x+1].img == this.stoneImage) ||
        (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x+1].img == this.stoneOnGoal)||
        (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x+1].img == this.stoneImage)||
        ( this.tiles[y][x].img == this.stoneImage && this.tiles[y][x+1].img == this.stoneOnGoal)) {
        console.log('Cant move stone into stone')}

      else if((this.tiles[y][x].img == this.stoneImage && this.tiles[y][x+1].img != this.wallImage) ||
         (this.tiles[y][x].img == this.stoneOnGoal && (this.tiles[y][x+1].img != this.wallImage))){
        this.tiles[y][x].img = this.playerImage;
        this.tiles[y][x+1].img = this.stoneImage;
        this.tiles[y][x-1].img = this.grassImage;
        console.log('You tried to move the stone')
        this.moves++
      }
      //Cant move if thers a wall after
      else if ((this.tiles[y][x].img == this.stoneImage && (this.tiles[y][x+1].img == this.wallImage)) ||
      (this.tiles[y][x].img == this.stoneOnGoal && (this.tiles[y][x+1].img == this.wallImage))){
        console.log('Cant move')}
      
      else{
      this.tiles[y][x].img = this.playerImage;
      this.tiles[y][x-1].img = this.grassImage;
      console.log('Moved right')
      this.moves++
    }
    }},
    moveLeft(x, y){
      if (this.tiles[y][x].img != this.wallImage){
       //Checking if theres a stone and if it can be moved
       if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y][x-1].img == this.stoneImage) ||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x-1].img == this.stoneImage)||
       (this.tiles[y][x].img == this.stoneImage && this.tiles[y][x-1].img == this.stoneOnGoal)||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x-1].img == this.stoneOnGoal)){
        console.log('Cant move stone into stone')}

       else if((this.tiles[y][x].img == this.stoneImage && this.tiles[y][x-1].img != this.wallImage)||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x-1].img != this.wallImage)){
        this.tiles[y][x].img = this.playerImage;
        this.tiles[y][x-1].img = this.stoneImage;
        this.tiles[y][x+1].img = this.grassImage;
        console.log('You tried to move the stone')
        this.moves++
      }
      //Cant move if theres a wall after
      else if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y][x-1].img == this.wallImage)||
      (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x-1].img == this.wallImage)){
        console.log('Cant move')}
        else{
          //If theres no stone
        
      this.tiles[y][x].img = this.playerImage;
      this.tiles[y][x+1].img = this.grassImage;
      console.log('Moved left')
      this.moves++
        }
    }},
    moveDown(x,y){
      if (this.tiles[y][x].img != this.wallImage){
       //Checking if theres a stone and if it can be 
       if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y+1][x].img == this.stoneImage)||
       (this.tiles[y][x].img == this.stoneImage && this.tiles[y+1][x].img == this.stoneOnGoal)||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y+1][x].img == this.stoneImage)||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y+1][x].img == this.stoneOnGoal)){
        console.log('Cant move stone into stone')}

       else if((this.tiles[y][x].img == this.stoneImage && this.tiles[y+1][x].img != this.wallImage)||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y+1][x].img != this.wallImage)){
        this.tiles[y][x].img = this.playerImage;
        this.tiles[y+1][x].img = this.stoneImage;
        this.tiles[y-1][x].img = this.grassImage;
        console.log('You tried to move the stone')
        this.moves++
      }
      //Cant move if thers a wall after
      else if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y+1][x].img == this.wallImage)||
      (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y+1][x].img == this.wallImage)){
        console.log('Cant move')}
        else{
          //If theres no stone
      this.tiles[y][x].img = this.playerImage;
      this.tiles[y-1][x].img = this.grassImage;
      console.log('Moved down')
      this.moves++
      
      }
    }},
    moveUp(x,y){
      if (this.tiles[y][x].img != this.wallImage){
       //Checking if theres a stone and if it can be moved
       if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y-1][x].img == this.stoneImage)||
       (this.tiles[y][x].img == this.stoneImage && this.tiles[y-1][x].img == this.stoneOnGoal)||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y-1][x].img == this.stoneOnGoal)||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y-1][x].img == this.stoneImage) ){
        console.log('Cant move stone into stone')}

       else if((this.tiles[y][x].img == this.stoneImage && this.tiles[y-1][x].img != this.wallImage)||
       (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y-1][x].img != this.wallImage)){
        this.tiles[y][x].img = this.playerImage;
        this.tiles[y-1][x].img = this.stoneImage;
        this.tiles[y+1][x].img = this.grassImage;
        console.log('You tried to move the stone')
        this.moves++
      }
      //Cant move if thers a wall after
      else if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y-1][x].img == this.wallImage)||
      (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y-1][x].img == this.wallImage)){
        console.log('Cant move')}

        else{
      //If theres no stone
      this.tiles[y][x].img = this.playerImage;
      this.tiles[y+1][x].img = this.grassImage;
      console.log('Moved up')
      this.moves++
     
        }
    },
    checkKey(e) {

      e = e || window.event;
  
      if (e.keyCode == '38') {
          // up arrow
          console.log("u pressed up")
          this.moveUp(this.xValue, this.yValue)
      }
      else if (e.keyCode == '40') {
          // down arrow
          console.log("u pressed down")
          this.moveDown()
      }
      else if (e.keyCode == '37') {
         // left arrow
         console.log("u pressed left")
         this.moveLeft()
      }
      else if (e.keyCode == '39') {
         // right arrow
         console.log("u pressed right")
         this.moveRight()
      } else {
          console.log("u pressed something else")
      }
  
  }
  }
}
}