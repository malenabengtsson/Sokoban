import Tile from './Tile.js'
import movementUtils from './movementUtils.js'
import MapUtils from './MapUtils.js'
import {levels} from './levels.js'


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
      <button type="button" @click="power">Use your Powerup</button>
      </div>
      <div class="outside">
      <div class="grid-layout">
        <Tile
          v-for="(tile, i) of tiles.flat()" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y + tile.img"
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
      powerUpImage: 'css/img/powerup.png',
      nrStoneOnGoal: 0,
      nrOfGoals: 0,
      moves: 0,
      remainingPowerups: 0,
      level: 1,
      xValue: 0,
      yValue: 0,
      usePowerup: false,
      powerUp: '',
      powerUpTaken: false,
      number: 0,
      }

    },
    
    created() {
      window.onkeydown = this.checkKey
    },
    
    methods: {
      level1(){
        this.powerUpTaken = false
        this.moves = 0
        this.level = 1
        this.nrOfGoals = 3
        this.tiles = []
        this.grid = []
        this.grid = levels[0]
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
            MapUtils.renderMap(this, row, col)
          }
        }
        console.log('Your powerup is: ' + this.powerUp)
        this.flatTiles = this.tiles.flat()

      },
      level2(){
        this.powerUpTaken = false
        this.moves = 0
        this.level = 2
        this.powerUp = 'Strength'
        this.nrOfGoals = 4
        this.tiles = []
        this.grid = []
        console.log(levels[1])
        this.grid = levels[1]
        for(let row = 0; row <this.gameBoard; row++){
          this.tiles[row] = []
          for(let col = 0; col <this.gameBoard; col++){
            let position = {
              x: col,
              y: row,
              img: '',
            }
            this.tiles[row].push(position)
            MapUtils.renderMap(this, row, col)
           
          }
        }
        this.flatTiles = this.tiles.flat()
        //this.render++;
      },
      level3(){
        this.powerUpTaken = false
        this.moves = 0
        this.level = 3
        this.nrOfGoals = 4
        this.tiles = []
        this.grid = []
        this.grid = levels[2]
        for(let row = 0; row <this.gameBoard; row++){
          this.tiles[row] = []
          for(let col = 0; col <this.gameBoard; col++){
            let position = {
              x: col,
              y: row,
              img: '',
            }
            this.tiles[row].push(position)
            
            MapUtils.renderMap(this, row, col)
            this.flatTiles = this.tiles.flat()
          }
        }
      },
      level4(){
        this.powerUpTaken = false
        this.moves = 0
        this.level = 4
        this.nrOfGoals = 5
        this.tiles = []
        this.grid = []
        this.grid = levels[3]
        
        for(let row = 0; row <this.gameBoard; row++){
          this.tiles[row] = []
          for(let col = 0; col <this.gameBoard; col++){
            let position = {
              x: col,
              y: row,
              img: '',
            }
            this.tiles[row].push(position)
            
            MapUtils.renderMap(this, row, col)
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
          movementUtils.moveRight(this.xValue, this.yValue, this)
          }
          //Moving left
          else if(this.playerImage == this.tiles[y][x+1].img){
            movementUtils.moveLeft(this.xValue, this.yValue, this)
          }
          //Moving down
          else if(this.playerImage == this.tiles[y-1][x].img){
            movementUtils.moveDown(this.xValue, this.yValue, this)
          }
          //Moving up
          else if(this.playerImage == this.tiles[y+1][x].img){
            movementUtils.moveUp(this.xValue, this.yValue, this)
            }
            MapUtils.checkAndPlaceGoals(this)
            MapUtils.checkIfCompleted(this)
       
            
          },

      reset(){
        window.location.reload()
    },
    power(){
      if(this.remainingPowerups > 0){
        this.usePowerup = true;
        console.log('u r in the powerfunction')
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

      if(![37,38,39,40,82].includes(e.keyCode)){
        return
      }

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


          movementUtils.moveUp(this.xValue, this.yValue-1, this)
     
      }
      else if (e.keyCode == '40') {
          // down arrow
          movementUtils.moveDown(this.xValue, this.yValue+1, this)
         
      }
      else if (e.keyCode == '37') {
         // left arrow
         movementUtils.moveLeft(this.xValue-1, this.yValue, this)
        
      }
      else if (e.keyCode == '39') {
         // right arrow
         movementUtils.moveRight(this.xValue+1, this.yValue, this) 
      } 
      else if (e.keyCode == '82') {
        // r key
        this.resetLevel()
     }

      else {
         
          return
      }
      MapUtils.checkAndPlaceGoals(this)
      MapUtils.checkIfCompleted(this)
      MapUtils.addPowerUp(this)
  
   }
  }
}