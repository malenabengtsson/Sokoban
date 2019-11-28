import Tile from './Tile.js'

export default {
  components: {
    Tile
  },
    template:`
    <div>
      
    <label for="level">Choose which level to play!</label>
    <div class="level">
      <select>
      <option value="level-1">Level 1</option>
      <option value="level-2">Level 2</option>
      <option value="level-3">Level 3</option>
      <option value="level-4">Level 4</option>
      </select>
      </div>
      <div class="grid-layout">
        <Tile 
          v-for="(tile, i) of flatTiles" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y">
        </Tile>
      </div>
      </div>
    `,
    data(){
      return{
        tiles: []
      }
    },
    computed: {
      flatTiles() {
        return this.tiles.flat()
      }
    },
    created() {
      let gameBoard = 5;
      let wallImage = 'css/img/wall.jpg'
      let stoneImage = 'css/img/stone.png'
      let playerImage = 'css/img/player.png'
      let finishImage = 'css/img/finish.png'
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
      }
  

    },
   


}