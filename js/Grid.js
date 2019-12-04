import Tile from './Tile.js'

export default {
  components: {
    Tile
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
      wallImage: '/css/img/wall.jpg',
      stoneImage: '/css/img/stone.png',
      playerImage: '/css/img/player.png',
      finishImage: '/css/img/finish.png',
      grassImage: '/css/img/grass.png',
      render: 0,
      playerPosition: '',
      img: ''
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
              x: col,
              y: row,
              img: Image,
            }
            this.tiles[row].push(position)
            
            switch (this.grid[row][col]){
              case "W":
                this.tiles[row][col].img= this.wallImage;
                console.log("W")
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
        console.log(this.tiles);
        this.flatTiles = this.tiles.flat()
        //this.render++

      },
      level2(){
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
              img: '',
            }
            this.tiles[row].push(position)
            
            switch (this.grid[row][col]){
              case "W":
                this.tiles[row][col].img= this.wallImage;
                console.log("W")
                break;
                case "S":
                this.tiles[row][col].img= this.stoneImage;
                break;
                case "P":
                    this.tiles[row][col].img= this.playerImage;
                   //this.playerPosition = this.tiles[row][col]
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
    },
  }