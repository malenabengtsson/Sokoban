export default class MapUtils{
  static checkAndPlaceGoals(grid){
    //Loop to set goal-image when player is not on that tile
    for (let i = 0; i <grid.tiles.length; i++){
     for (let j = 0; j <grid.tiles[i].length; j++){
       if (grid.tiles[i][j].img != grid.playerImage){


       
        if (grid.tiles[i][j].img == grid.stoneOnGoal){
          grid.nrStoneOnGoal++

         }
         else if (grid.grid[i][j] == 'F' && grid.tiles[i][j].img == grid.stoneImage){

       if (grid.grid[i][j] == 'F' && grid.tiles[i][j].img == grid.stoneImage){
         grid.tiles[i][j].img = grid.stoneOnGoal
         
       }
       else if (grid.tiles[i][j].img == grid.stoneOnGoal){
        grid.nrStoneOnGoal++
        console.log('one more stone in pos')
        
       }
       else if (grid.grid[i][j] == 'F' && grid.tiles[i][j].img != grid.finishImage){
         grid.tiles[i][j].img = grid.finishImage
         console.log('Set goal image')
    
       }
       else{
         console.log('Do nothing')
       }
      
     }
     if (grid.grid[i][j] == 'U' && grid.tiles[i][j].img == grid.playerImage){
      console.log('Powerups: ' + grid.remainingPowerups)
      grid.remainingPowerups++
    }
       else{
       }

       grid.flatTiles = grid.tiles.flat()
       
 }
}
}


static checkIfCompleted(grid){

    console.log('Number of stones in right position: ' + grid.nrStoneOnGoal)
      // Check if all stones are on the goal-images
      if(grid.nrStoneOnGoal == grid.nrOfGoals){

        console.log(`You cleared the stage with ${grid.moves} moves!`)
        if (confirm(`You completed the level with ${grid.moves} moves! Press OK to continue to the next level!`)) {

          if(grid.level == 1){
            grid.level2()
          }
          else if(grid.level == 2){
            grid.level3()
          }
          else if(grid.level == 3){
            grid.level4()
          }
          else if(grid.level == 4){
            alert('You completed the game! Good job!')
            grid.reset()
          }
        } else {
         grid.reset()
        }
      }
      grid.nrStoneOnGoal = 0
      grid.flatTiles = grid.tiles.flat()
    
    }
  }