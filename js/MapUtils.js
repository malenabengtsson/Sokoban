function checkAndPlaceGoals(grid){
    //Loop to set goal-image when player is not on that tile
    for (let i = 0; i <grid.tiles.length; i++){
     for (let j = 0; j <grid.tiles[i].length; j++){
       if (grid.tiles[i][j].img != grid.playerImage){

       if (grid.tiles[i][j].img == grid.stoneOnGoal){
           console.log('Stone in right position')
           grid.nrStoneOnGoal++
       }
       else if (grid.grid[i][j] == 'F' && grid.tiles[i][j].img == grid.stoneImage){
         grid.tiles[i][j].img = grid.stoneOnGoal
         console.log('Stone on goal')
         
       }
       else if (grid.grid[i][j] == 'F' && grid.tiles[i][j].img != grid.finishImage){
         grid.tiles[i][j].img = grid.finishImage
         console.log('Set goal image')
       }
     }
       else{
         console.log('Do nothing')
       }
       grid.flatTiles = grid.tiles.flat()
 }
}
}
function checkIfCompleted(grid){
    console.log('Number of stones in right position: ' + grid.nrStoneOnGoal)


      // Check if all stones are on the goal-images
      if(grid.nrStoneOnGoal == grid.nrOfGoals){
        console.log(`You cleared the stage with ${grid.moves} moves!`)
        if (confirm('You completed the level! Press OK to continue to next level')) {
          if(grid.level == 1){
            console.log("you are on level 1")
            grid.level2()
          }
          else if(grid.level == 2){
            console.log("you are on level 2")
            grid.level3()
          }
          else if(grid.level == 3){
            console.log("you are on level 3")
            grid.level4()
          }
          else if(grid.level == 4){
            console.log("you are on level 4")
            grid.reset()
          }
        } else {
         grid.reset()
        }
      }
      grid.nrStoneOnGoal = 0
      grid.flatTiles = grid.tiles.flat()
    }