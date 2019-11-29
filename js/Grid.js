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
        gameBoard: 5,
      wallImage: '/css/img/wall.jpg',
      stoneImage: '/css/img/stone.png',
      playerImage: '/css/img/player.png',
      finishImage: '/css/img/finish.png'
      }
    },
    computed: {
      flatTiles() {
        return this.tiles.flat()
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
        this.tiles.clear();
        this.tiles = []
        let grid = [
          ['W', 'W', 'W', 'W', 'W'],
          ['W', 'P', ' ', ' ', 'W'],
          ['W', ' ', 'S', 'F', 'W'],
          ['W', ' ', ' ', ' ', 'W'],
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
            
            switch (grid[row][col]){
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
            }
          }
        }
      },
      level2(){
    
        console.log("hello")
        this.tiles = []
        let grid = [
          ['W', 'W', 'W', 'W', 'W'],
          ['W', ' ', ' ', ' ', 'W'],
          ['W', 'P', 'S', 'F', 'W'],
          ['W', ' ', ' ', ' ', 'W'],
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
            
            switch (grid[row][col]){
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
            }
          }
        }
      },
      testRight(x, y){
        if (this.tiles[x][y].img == this.stoneImage){
          this.tiles[x][y].img = this.playerImage;
          this.tiles[(x-1)][y].img = this.stoneImage;
          console.log("worked?")
        }
        else{
          console.log("Cant move")
        }

      }
    }
  }