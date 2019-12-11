import Tile from './Tile.js'

export default {
  components: {
    Tile,
  },
    template:`
    <div id="map">
    <label for="level">Choose which level to play!</label>
    <div class="level">
    <button style="button" id="reset" @click="resetLevel">Reset</button>
      <button type="button" @click="level1">Level 1</button>
      <button type="button" @click="level2">Level 2</button>
      <button type="button" @click="level3">Level 3</button>
      <button type="button" @click="level4">Level 4</button>
      <button type="button" @click="power">Powerup</button>
      </div>
      <div class="outside">
      <div class="grid-layout">
        <Tile
          v-for="(tile, i) of flatTiles" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y"
          @movePlayerOnClick="movePlayerOnClick"
          >
        </Tile>
      </div>
      </div>
      </div>
    `,
    data(){
      return{
        tiles: [],
        grid: [],
        flatTiles: [],
        gameBoard: 10,
      backgroundImage: '#673AB7',
      wallImage: 'css/img/wall.jpg',
      stoneImage: 'css/img/stone.png',
      playerImage: 'css/img/player.png',
      finishImage: 'css/img/finish.png',
      grassImage: 'css/img/grass.png',
      stoneOnGoal: 'css/img/stoneOnGoal.png',
      bgImage: 'css/img/bgimage.png',
      powerUpImage: 'css/img/powerup.jpg',
      nrStoneOnGoal: 0,
      nrOfGoals: 0,
      moves: 0,
      remainingPowerups: 0,
      level: 1,
      xValue: 0,
      yValue: 0,
      usePowerup: false,
      powerUp: ''
      }

    },
    
    created() {
      window.onkeydown = this.checkKey
    },
    
    methods: {
      level1(){
        this.level = 1
        this.remainingPowerups = 1
        this.powerUp = 'Strength'
        this.nrOfGoals = 3
        this.tiles = []
        this.grid = []
        this.grid = [
          [' ', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' '],
          [' ', 'W', 'F', 'W', 'W', 'W', 'W', 'W', ' ', ' '],
          [' ', 'W', 'F', 'F', 'G', 'W', 'W', 'W', ' ', ' '],
          [' ', 'W', 'G', 'G', 'G', 'G', 'G', 'W', ' ', ' '],
          [' ', 'W', 'G', 'G', 'G', 'G', 'G', 'W', ' ', ' '],
          [' ', 'W', 'U', 'S', 'S', 'S', 'P', 'W', ' ', ' '],
          [' ', 'W', 'G', 'G', 'G', 'G', 'W', 'W', ' ', ' '],
          [' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ]
        for(let row = 0; row <this.gameBoard; row++){
          this.tiles[row] = []
          for(let col = 0; col <this.gameBoard; col++){
            let position = {
              x: col,
              y: row,
              img: '',
              color: ''
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
                    case " ":
                      this.tiles[row][col].img = this.bgImage;
                    break;
                    case "U":
                      this.tiles[row][col].img = this.powerUpImage;
                    break;
            }
  
          }
        }
        this.flatTiles = this.tiles.flat()

      },
      level2(){
        this.level = 2
        this.remainingPowerups = 1
        this.powerUp = 'Strength'
        this.nrOfGoals = 4
        this.tiles = []
        this.grid = []
        this.grid = [
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'G', 'G', 'P', 'G', 'G', 'G', 'W', 'G', 'W'],
          ['W', 'G', 'W', 'F', 'W', 'G', 'G', 'W', 'S', 'W'],
          ['W', 'G', 'S', 'S', 'F', 'S', 'G', 'W', 'S', 'W'],
          ['W', 'G', 'W', 'F', 'W', 'W', 'G', 'W', 'F', 'W'],
          ['W', 'G', 'G', 'G', 'W', 'W', 'G', 'G', 'U', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
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
                case "U":
                      this.tiles[row][col].img = this.powerUpImage;
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
          ['W', 'W', 'W', 'W', 'F', 'G', 'P', 'W', 'W', 'W'],
          ['W', 'F', 'G', 'F', 'G', 'W', 'G', 'W', 'W', 'W'],
          ['W', 'G', 'W', 'G', 'G', 'G', 'F', 'G', 'G', 'W'],
          ['W', 'G', 'W', 'G', 'S', 'F', 'S', 'G', 'G', 'W'],
          ['W', 'S', 'W', 'G', 'W', 'W', 'G', 'W', 'G', 'W'],
          ['W', 'G', 'G', 'S', 'W', 'W', 'S', 'S', 'G', 'W'],
          ['W', 'W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
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
            this.flatTiles = this.tiles.flat()
          }
        }
      },
      movePlayerOnClick(x, y){
        this.xValue = x;
        this.yValue = y;

        if(this.powerUp == 'Wallbreaker'){
          if (this.usePowerup == true && (this.tiles[y][x].img == this.wallImage)){
          this.tiles[y][x].img = this.grassImage
          this.remainingPowerups--
          this.usePowerup = false;
          return
          }
        else if(this.powerUp == 'Strength'){
            console.log('Super strong')
          }
        }
        else{
          console.log("nothing")
        }
          //Moving right
          if(this.playerImage == this.tiles[y][x-1].img){
          moveRight(this.xValue, this.yValue, this)
          }
          //Moving left
          else if(this.playerImage == this.tiles[y][x+1].img){
            moveLeft(this.xValue, this.yValue, this)
          }
          //Moving down
          else if(this.playerImage == this.tiles[y-1][x].img){
            moveDown(this.xValue, this.yValue, this)
          }
          //Moving up
          else if(this.playerImage == this.tiles[y+1][x].img){
          moveUp(this.xValue, this.yValue, this)
            }
            checkAndPlaceGoals(this)
            checkIfCompleted(this)
       
            
          },

      reset(){
        window.location.reload()
    },
    power(){
      if(this.remainingPowerups > 0){
        this.usePowerup = true;
      }
    },
  
    resetLevel(){
        if(this.level == 1){
          this.level1()
        }
        else if(this.level == 2){
          this.level2()
        }
        else if(this.level == 3){
          this.level3()
        }
        else if(this.level == 4){
          this.level4()
        }
    },

    checkKey(e) {

      e = e || window.event;

      for (let i = 0; i <this.tiles.length; i++){
        for (let j = 0; j <this.tiles[i].length; j++){
          if(this.tiles[i][j].img == this.playerImage){
            this.xValue = j;
            this.yValue = i;
          }
        }
      }
  
      if (e.keyCode == '38') {
          // up arrow
          moveUp(this.xValue, this.yValue-1, this)
          
      }
      else if (e.keyCode == '40') {
          // down arrow
          moveDown(this.xValue, this.yValue+1, this)
         
      }
      else if (e.keyCode == '37') {
         // left arrow
         moveLeft(this.xValue-1, this.yValue, this)
        
      }
      else if (e.keyCode == '39') {
         // right arrow
         moveRight(this.xValue+1, this.yValue, this) 
      } 
      else if (e.keyCode == '82') {
        // r key
        this.resetLevel()
     }
      else {
         
          return
      }
      checkAndPlaceGoals(this)
      checkIfCompleted(this)
  
  }
}
}