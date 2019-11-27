import Tile from './Tile.js'

export default {
  components: {
    Tile
  },
    template:`
      <div class="grid-layout">
        <Tile 
          v-for="(tile, i) of flatTiles" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y">
        </Tile>
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
      let gameBoard = 6;
      for(let row = 1; row < gameBoard; row++){
        this.tiles[row] = []
        for(let col = 1; col < gameBoard; col++){
          let position = {
            x: col,
            y: row,
          }
          this.tiles[row].push(position)
        }
      }

      console.log(this.tiles)
      console.log(this.flatTiles)
    }
}