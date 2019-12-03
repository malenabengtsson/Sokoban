import Tile from './Tile.js'

export default {
  components: {
    Tile
  },
    template:`
    <div >
      
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
        gameBoard: 5,
      wallImage: '/css/img/wall.jpg',
      stoneImage: '/css/img/stone.png',
      playerImage: '/css/img/player.png',
      finishImage: '/css/img/finish.png',
      grassImage: '/css/img/grass.png',
      render: 0
      }
    },
    created() {
      /*var gameBoard = 5;
      var wallImage = '/css/img/wall.jpg'
      var stoneImage = '/css/img/stone.png'
      var playerImage = '/css/img/player.png'
      var finishImage = '/css/img/finish.png'
      let grid = [
        ['W', 'W', 'W', 'W', 'W'],
        ['W', ' ', ' ', ' ', 'W'],
        ['W', 'P', 'S', 'F', 'W'],
        ['W', ' ', ' ', ' ', 'W'],
        ['W', 'W', 'W', 'W', 'W']
      ]
      for(let row = 0; row < gameBoard; row++){
        this.tiles[row] = []
        for(let col = 0; col < gameBoard; col++){
          let position = {
            x: col,
            y: row,
            img: Image,
          }
          this.tiles[row].push(position)
          switch (grid[row][col]){
            case "W":
              this.tiles[row][col].img= wallImage;
              console.log("W")
              break;
              case "S":
              this.tiles[row][col].img= stoneImage;
              break;
              case "P":
                  this.tiles[row][col].img= playerImage;
              break;
              case "F":
                  this.tiles[row][col].img= finishImage;
          }
        }
      }*/
  

    },
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
              y: col,
              x: row,
              img: Image,
            }
            this.tiles[row].push(position)
            
            switch (this.grid[row][col]){
              case "W":
                this.tiles[row][col].img= this.wallImage;
                this.flatTiles = this.tiles.flat();
                break;
                case "G":
                this.tiles[row][col].img= this.grassImage;
                this.flatTiles = this.tiles.flat();
                break;
                case "S":
                this.tiles[row][col].img= this.stoneImage;
                this.flatTiles = this.tiles.flat();
                break;
                case "P":
                    this.tiles[row][col].img= this.playerImage;
                    this.flatTiles = this.tiles.flat();
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
      },
      level2(){
        console.log("hello")
        console.log("hello")
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
              img: Image,
            }
            this.tiles[row].push(position)
            
            switch (this.grid[row][col]){
              case "W":
                this.tiles[row][col].img= this.wallImage;
                this.flatTiles = this.tiles.flat();
                break;
                case "G":
                this.tiles[row][col].img= this.grassImage;
                this.flatTiles = this.tiles.flat();
                break;
                case "S":
                this.tiles[row][col].img= this.stoneImage;
                this.flatTiles = this.tiles.flat();
                break;
                case "P":
                    this.tiles[row][col].img= this.playerImage;
                    this.flatTiles = this.tiles.flat();
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
      },
      testRight(x, y){
        if (this.tiles[x][y].img != this.wallImage){
          this.tiles[x][y].img = this.playerImage;
          console.log("worked?")
          this.render++;
  
        }
        else{
          console.log("Cant move")
        }
      }
    },
  }