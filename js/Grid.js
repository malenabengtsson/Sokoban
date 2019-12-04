import Tile from './Tile.js'
//import PlayerMove from './PlayerMove.js'

document.onkeydown = checkKey;

export default {
  components: {
    Tile,
    //PlayerMove
  },
    template:`
    <div>
    <label for="level">Choose which level to play!</label>
    <div class="level">
      <button type="button" @click="level1">Level 1</button>
      <button type="button" @click="level2">Level 2</button>
      <button type="button">Level 3</button>
      <button type="button">Level 4</button>
      </div>
      <div class="grid-layout">
        <Tile
          v-for="(tile, i) of flatTiles" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y"
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
          ['W', 'P', 'G', 'G', 'W'],
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
      testRight(x, y){
        console.log('X is' + x)
        console.log('Y is' + y)
        if (this.tiles[y][x].img != this.wallImage){
          this.tiles[y][x].img = this.playerImage;
          this.tiles[y][x+1].img = this.grassImage;
          this.flatTiles = this.tiles.flat()
          //playerPosition = this.tiles[x][y].img
          //this.render++
          
        }
        else{
          console.log("Cant move")
        }
      }
    }
  }