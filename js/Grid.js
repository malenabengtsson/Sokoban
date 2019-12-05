import Tile from './Tile.js'

export default {
  components: {
    Tile,
  },
    template:`
    <div id="map">
    <label for="level">Choose which level to play!</label>
    <div class="level">
      <button type="button" @click="level1">Level 1</button>
      <button type="button" @click="level2">Level 2</button>
      <button type="button" @click="level3">Level 3</button>
      <button type="button" @click="level4">Level 4</button>
      </div>
      <div class="grid-layout">
        <Tile
          v-for="(tile, i) of flatTiles" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y + render"
          @movePlayer="movePlayer"
          >
        </Tile>
      </div>
      <label for="restart">Are you stuck?</label>
    <div class="restart">
      <button style="button" id="restart">Reset level</button>
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
      render: 0,
      nrStoneOnGoal: 0,
      nrOfGoals: 0
      }

    },
    /*
    created() {
     
    },
    */
    methods: {
      level1(){
        this.nrOfGoals = 1
        this.tiles = []
        this.grid = []
        this.grid = [
          [' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' '],
          [' ', ' ', ' ', 'W', 'P', 'G', 'G', 'W', ' ', ' '],
          [' ', ' ', ' ', 'W', 'G', 'S', 'G', 'W', ' ', ' '],
          [' ', ' ', ' ', 'W', 'G', 'G', 'F', 'W', ' ', ' '],
          [' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ]
        for(let row = 0; row < 10; row++){
          this.tiles[row] = []
          for(let col = 0; col < 10; col++){
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
        this.nrOfGoals = 1
        this.tiles = []
        this.grid = []
        this.grid = [
          [' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' '],
          [' ', ' ', ' ', 'W', 'G', 'G', 'G', 'W', ' ', ' '],
          [' ', ' ', ' ', 'W', 'G', 'S', 'F', 'W', ' ', ' '],
          [' ', ' ', ' ', 'W', 'P', 'G', 'G', 'W', ' ', ' '],
          [' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ]
        for(let row = 0; row < 10; row++){
          this.tiles[row] = []
          for(let col = 0; col < 10; col++){
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
        console.log(this.tiles)
        this.flatTiles = this.tiles.flat()
        //this.render++;
      },
      level3(){
        this.nrOfGoals = 3
        this.tiles = []
        this.grid = []
        this.grid = [
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'P', 'S', 'G', 'W', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'G', 'S', 'G', 'G', 'G', 'G', 'F', 'G', 'W'],
          ['W', 'G', 'S', 'G', 'G', 'G', 'G', 'F', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'F', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ]
        for(let row = 0; row < 10; row++){
          this.tiles[row] = []
          for(let col = 0; col < 10; col++){
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
        this.nrOfGoals = 3
        this.tiles = []
        this.grid = []
        this.grid = [
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'W', 'S', 'G', 'G', 'G', 'W'],
          ['W', 'G', 'S', 'G', 'W', 'G', 'G', 'F', 'G', 'W'],
          ['W', 'G', 'S', 'G', 'G', 'G', 'G', 'F', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'F', 'G', 'W'],
          ['W', 'P', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ]
        for(let row = 0; row < 10; row++){
          this.tiles[row] = []
          for(let col = 0; col < 10; col++){
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

        if (this.tiles[y][x].img != this.wallImage){
         
          if(this.tiles[y][x].img === this.playerImage){
            console.log('This is the player')
          }
          
          //Moving right
          else if(this.playerImage == this.tiles[y][x-1].img){
            //Checking if theres a stone and if it can be moved
            if (this.tiles[y][x].img == 
              (this.stoneImage && this.tiles[y][x+1].img == this.stoneImage) ||
              (this.stoneOnGoal && this.tiles[y][x+1].img == this.stoneOnGoal)||
              (this.stoneOnGoal && this.tiles[y][x+1].img == this.stoneImage)||
              (this.stoneImage && this.tiles[y][x+1].img == this.stoneOnGoal)) {
              console.log('No')}

            else if((this.tiles[y][x].img == this.stoneImage && this.tiles[y][x+1].img != this.wallImage) ||
               (this.tiles[y][x].img == this.stoneOnGoal && (this.tiles[y][x+1].img != this.wallImage))){
              this.tiles[y][x].img = this.playerImage;
              this.tiles[y][x+1].img = this.stoneImage;
              this.tiles[y][x-1].img = this.grassImage;
              console.log('You tried to move the stone')
            }
            //Cant move if thers a wall after
            else if ((this.tiles[y][x].img == this.stoneImage && (this.tiles[y][x+1].img == this.wallImage)) ||
            (this.tiles[y][x].img == this.stoneOnGoal && (this.tiles[y][x+1].img == this.wallImage))){
              console.log('Cant move')}
            
            else{
            this.tiles[y][x].img = this.playerImage;
            this.tiles[y][x-1].img = this.grassImage;
            console.log('Moved right')
            
          }
          }
          //Moving left
          else if(this.playerImage == this.tiles[y][x+1].img){
             //Checking if theres a stone and if it can be moved
             if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y][x-1].img == this.stoneImage) ||
             (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x-1].img == this.stoneImage)||
             (this.tiles[y][x].img == this.stoneImage && this.tiles[y][x-1].img == this.stoneOnGoal)||
             (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x-1].img == this.stoneOnGoal)){
              console.log('No')}

             else if((this.tiles[y][x].img == this.stoneImage && this.tiles[y][x-1].img != this.wallImage)||
             (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y][x-1].img != this.wallImage)){
              this.tiles[y][x].img = this.playerImage;
              this.tiles[y][x-1].img = this.stoneImage;
              this.tiles[y][x+1].img = this.grassImage;
              console.log('You tried to move the stone')
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
            
              }
          }
          //Moving down
          else if(this.playerImage == this.tiles[y-1][x].img){
             //Checking if theres a stone and if it can be 
             if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y+1][x].img == this.stoneImage)||
             (this.tiles[y][x].img == this.stoneImage && this.tiles[y+1][x].img == this.stoneImage)||
             (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y+1][x].img == this.stoneImage)||
             (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y+1][x].img == this.stoneOnGoal)){
              console.log('No')}
             else if((this.tiles[y][x].img == this.stoneImage && this.tiles[y+1][x].img != this.wallImage)||
             (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y+1][x].img != this.wallImage)){
              this.tiles[y][x].img = this.playerImage;
              this.tiles[y+1][x].img = this.stoneImage;
              this.tiles[y-1][x].img = this.grassImage;
              console.log('You tried to move the stone')
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
            
            }
          }
          //Moving up
          else if(this.playerImage == this.tiles[y+1][x].img){
             //Checking if theres a stone and if it can be moved
             if ((this.tiles[y][x].img == this.stoneImage && this.tiles[y-1][x].img == this.stoneImage)||
             (this.tiles[y][x].img == this.stoneImage && this.tiles[y-1][x].img == this.stoneOnGoal)||
             (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y-1][x].img == this.stoneOnGoal) ){
              console.log('No')}
             else if((this.tiles[y][x].img == this.stoneImage && this.tiles[y-1][x].img != this.wallImage)||
             (this.tiles[y][x].img == this.stoneOnGoal && this.tiles[y-1][x].img != this.wallImage)){
              this.tiles[y][x].img = this.playerImage;
              this.tiles[y-1][x].img = this.stoneImage;
              this.tiles[y+1][x].img = this.grassImage;
              console.log('You tried to move the stone')
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
           
              }
            
            }
          
        }
        
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
        
        this.flatTiles = this.tiles.flat()

        if(this.nrStoneOnGoal == this.nrOfGoals){
          console.log('u have won')
          if (confirm('You completed the level! Press OK to continue to next level')) {
            this.level4()
          } else {
            this.level3()
          }
        }
        this.nrStoneOnGoal = 0
        
      }
      
    }
  }
