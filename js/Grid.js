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
      <button type="button">Level 4</button>
      </div>
      <div class="grid-layout">
        <Tile
          v-for="(tile, i) of flatTiles" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y + render"
          @testRight="testRight"
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
        gameBoard: 5,
      wallImage: 'css/img/wall.jpg',
      stoneImage: 'css/img/stone.png',
      playerImage: 'css/img/player.png',
      finishImage: 'css/img/finish.png',
      grassImage: 'css/img/grass.png',
      render: 0,
      playerPosition: '',
      render: 0
      }

    },
    /*
    created() {
     
    },
    */
    methods: {
      level1(){
        this.tiles = []
        this.grid = [
          ['W', 'W', 'W', 'W', 'W'],
          ['W', 'P', 'S', 'G', 'W'],
          ['W', 'G', 'S', 'F', 'W'],
          ['W', 'G', 'G', 'G', 'W'],
          ['W', 'W', 'W', 'W', 'W']
        ]
        for(let row = 0; row < 5; row++){
          this.tiles[row] = []
          for(let col = 0; col < 5; col++){
            let position = {
              x: col,
              y: row,
              img: Image,
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
        let player = {
          x: 1,
          y: 1,
        }
        this.flatTiles = this.tiles.flat()

      },
      level2(){
        this.tiles = []
        this.grid = [
          ['W', 'W', 'W', 'W', 'W'],
          ['W', 'G', 'G', 'G', 'W'],
          ['W', 'P', 'S', 'F', 'W'],
          ['W', 'G', 'G', 'G', 'W'],
          ['W', 'W', 'W', 'W', 'W']
        ]
        for(let row = 0; row < 5; row++){
          this.tiles[row] = []
          for(let col = 0; col < 5; col++){
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
        this.tiles = []
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
      testRight(x, y){
        console.log('X is' + x)
        console.log('Y is' + y)
        let onGoal = false
        if (this.tiles[y][x].img != this.wallImage){
         
          if(this.tiles[y][x].img === this.playerImage){
            console.log('This is the player')
          }
          
          //Moving right
          else if(this.playerImage == this.tiles[y][x-1].img){
            //Checking if theres a stone and if it can be moved
            if (this.tiles[y][x].img == this.stoneImage && (this.tiles[y][x+1].img == this.stoneImage)){
              console.log('No')}
            else if(this.tiles[y][x].img == this.stoneImage && (this.tiles[y][x+1].img != this.wallImage)){
              this.tiles[y][x].img = this.playerImage;
              this.tiles[y][x+1].img = this.stoneImage;
              this.tiles[y][x-1].img = this.grassImage;
              console.log('You tried to move the stone')
            }
            //Cant move if thers a wall after
            else if ((this.tiles[y][x].img == this.stoneImage && (this.tiles[y][x+1].img == this.wallImage))){
              console.log('Cant move')}
              else{
                this.tiles[3][7].img = this.finishImage
            this.tiles[y][x].img = this.playerImage;
            this.tiles[y][x-1].img = this.grassImage;
            console.log('Moved right')
            
          }
          }
          //Moving left
          else if(this.playerImage == this.tiles[y][x+1].img){
             //Checking if theres a stone and if it can be moved
             if (this.tiles[y][x].img == this.stoneImage && (this.tiles[y][x-1].img == this.stoneImage)){
              console.log('No')}
             else if(this.tiles[y][x].img == this.stoneImage && (this.tiles[y][x-1].img != this.wallImage)){
              this.tiles[y][x].img = this.playerImage;
              this.tiles[y][x-1].img = this.stoneImage;
              this.tiles[y][x+1].img = this.grassImage;
              console.log('You tried to move the stone')
            }
            //Cant move if theres a wall after
            else if ((this.tiles[y][x].img == this.stoneImage && (this.tiles[y][x-1].img == this.wallImage))){
              console.log('Cant move')}
              else{
                //If theres no stone
                //this.tiles[3][7].img = this.finishImage
            this.tiles[y][x].img = this.playerImage;
            this.tiles[y][x+1].img = this.grassImage;
            if(this.tiles[3][7].img == this.grassImage){
              this.tiles[3][7].img = this.finishImage
            }
            console.log('Moved left')
            
              }
          }
          //Moving down
          else if(this.playerImage == this.tiles[y-1][x].img){
             //Checking if theres a stone and if it can be 
             if (this.tiles[y][x].img == this.stoneImage && (this.tiles[y+1][x].img == this.stoneImage)){
              console.log('No')}
             else if(this.tiles[y][x].img == this.stoneImage && (this.tiles[y+1][x].img != this.wallImage)){
              this.tiles[y][x].img = this.playerImage;
              this.tiles[y+1][x].img = this.stoneImage;
              this.tiles[y-1][x].img = this.grassImage;
              console.log('You tried to move the stone')
            }
            //Cant move if thers a wall after
            else if ((this.tiles[y][x].img == this.stoneImage && (this.tiles[y+1][x].img == this.wallImage)) && (this.tiles[y][x+1].img == this.stoneImage)){
              console.log('Cant move')}
              else{
                //If theres no stone
                this.tiles[3][7].img = this.finishImage
            this.tiles[y][x].img = this.playerImage;
            this.tiles[y-1][x].img = this.grassImage;
            console.log('Moved down')
            
            }
          }
          //Moving up
          else if(this.playerImage == this.tiles[y+1][x].img){
             //Checking if theres a stone and if it can be moved
             if (this.tiles[y][x].img == this.stoneImage && (this.tiles[y-1][x].img == this.stoneImage)){
              console.log('No')}
             else if(this.tiles[y][x].img == this.stoneImage && (this.tiles[y-1][x].img != this.wallImage)){
              this.tiles[y][x].img = this.playerImage;
              this.tiles[y-1][x].img = this.stoneImage;
              this.tiles[y+1][x].img = this.grassImage;
              console.log('You tried to move the stone')
            }
            //Cant move if thers a wall after
            else if ((this.tiles[y][x].img == this.stoneImage && (this.tiles[y-1][x].img == this.wallImage))){
              console.log('Cant move')}
              else{
            //If theres no stone
            this.tiles[3][7].img = this.finishImage
            this.tiles[y][x].img = this.playerImage;
            this.tiles[y+1][x].img = this.grassImage;
            console.log('Moved up')
           
              }
            
          }
          this.flatTiles = this.tiles.flat()
      
        }
        if(this.tiles[3][7].img == this.grassImage){
          this.tiles[3][7].img = this.finishImage
          
        }
        else{
          console.log("Cant move")
        }
      }
    }
  }