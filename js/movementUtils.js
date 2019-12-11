export default class MovementUtils{
  constructor(){

  }
static moveRight(x,y, grid){
    if (grid.tiles[y][x].img != grid.wallImage && grid.tiles[y][x].img != grid.bgImage){
        //Checking if theres a stone and if it can be moved
        if (grid.powerUp == 'Strength' && grid.usePowerup == true){
          console.log('Recognized power up')
        if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img == grid.stoneImage && grid.tiles[y][x+2].img != grid.wallImage)){
          if (grid.tiles[y][x+2].img == grid.stoneImage){
            console.log('Normal stone in the way')}
            else if(grid.tiles[y][x+2].img == grid.stoneOnGoal){
            console.log('Goalstone in the way')
            }
            else{
            grid.tiles[y][x].img = grid.playerImage
            grid.tiles[y][x+1].img = grid.stoneImage
            grid.tiles[y][x+2].img = grid.stoneImage
            grid.usePowerup = false
            grid.remainingPowerups--
            
            }
          }
        }
        else if
        (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img == grid.stoneOnGoal && grid.tiles[y][x+2].img != grid.wallImage){
          if (grid.tiles[y][x+2].img == grid.stoneImage){
            console.log('Normal stone in the way')}
            else if(grid.tiles[y][x+2].img == grid.stoneOnGoal){
            console.log('Goalstone in the way')
            }
            else{
            grid.tiles[y][x].img = grid.playerImage
            grid.tiles[y][x+1].img = grid.stoneImage
            grid.tiles[y][x+2].img = grid.stoneImage
            grid.usePowerup = false;
            grid.remainingPowerups--
         
            }
        }
        else if
        (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img == grid.stoneImage && grid.tiles[y][x+2].img != grid.wallImage){
          if (grid.tiles[y][x+2].img == grid.stoneImage){
            console.log('Normal stone in the way')}
            else if(grid.tiles[y][x+2].img == grid.stoneOnGoal){
            console.log('Goalstone in the way')
            }
            else{
            grid.tiles[y][x].img = grid.playerImage
            grid.tiles[y][x+1].img = grid.stoneImage
            grid.tiles[y][x+2].img = grid.stoneImage
            grid.remainingPowerups--
            grid.usePowerup = false
          
            }
        }
        else if
        (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img == grid.stoneOnGoal && grid.tiles[y][x+2].img != grid.wallImage){
          if (grid.tiles[y][x+2].img == grid.stoneImage){
            console.log('Normal stone in the way')}
            else if(grid.tiles[y][x+2].img == grid.stoneOnGoal){
            console.log('Goalstone in the way')
            }
            else{
              console.log('Removing power up')
            grid.tiles[y][x].img = grid.playerImage
            grid.tiles[y][x+1].img = grid.stoneImage
            grid.tiles[y][x+2].img = grid.stoneImage
            grid.remainingPowerups--
            grid.usePowerup = false
    
            }
          }
        if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img == grid.stoneImage) ||
        (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img == grid.stoneOnGoal)||
        (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img == grid.stoneImage)||
        (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img == grid.stoneOnGoal)||
        (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img == grid.bgImage)||
        (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img == grid.bgImage)) {
            console.log('Cant move stone into stone')
        }
        else if((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img != grid.wallImage) ||
            (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img != grid.wallImage)){
            grid.tiles[y][x].img = grid.playerImage;
            grid.tiles[y][x+1].img = grid.stoneImage;
            grid.tiles[y][x-1].img = grid.grassImage;
            console.log('You tried to move the stone')
            grid.moves++
        }
        //Cant move if thers a wall after
        else if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img == grid.wallImage) ||
        (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img == grid.wallImage)){
            console.log('Cant move') 
        }
        else{
            grid.tiles[y][x].img = grid.playerImage;
            grid.tiles[y][x-1].img = grid.grassImage;
            console.log('Moved right')
            grid.moves++
        }
    }
  }
static moveLeft(x, y, grid){
  if (grid.tiles[y][x].img != grid.wallImage && grid.tiles[y][x].img != grid.bgImage){

    if (grid.powerUp == 'Strength' && grid.usePowerup == true){
      console.log('Recognized power up')
    if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.stoneImage && grid.tiles[y][x-2].img != grid.wallImage)){
      if (grid.tiles[y][x-2].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y][x-2].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y][x-1].img = grid.stoneImage
        grid.tiles[y][x-2].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
       
        }
      }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.stoneOnGoal && grid.tiles[y][x-2].img != grid.wallImage){
      if (grid.tiles[y][x-2].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y][x-2].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y][x-1].img = grid.stoneImage
        grid.tiles[y][x-2].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
      
        }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.stoneImage && grid.tiles[y][x-2].img != grid.wallImage){
      if (grid.tiles[y][x-2].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y][x-2].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y][x-1].img = grid.stoneImage
        grid.tiles[y][x-2].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false       
        }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.stoneOnGoal && grid.tiles[y][x-2].img != grid.wallImage){
      if (grid.tiles[y][x-2].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y][x-2].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
          console.log('Removing power up')
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y][x-1].img = grid.stoneImage
        grid.tiles[y][x-2].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
    
        }
    }
   //Checking if theres a stone and if it can be moved
   if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.stoneImage) ||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.bgImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.bgImage)){
    console.log('Cant move stone into stone')}

   else if((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img != grid.wallImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img != grid.wallImage)){
    grid.tiles[y][x].img = grid.playerImage;
    grid.tiles[y][x-1].img = grid.stoneImage;
    grid.tiles[y][x+1].img = grid.grassImage;
    console.log('You tried to move the stone')
    grid.moves++
  }
  //Cant move if theres a wall after
  else if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.wallImage)||
  (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.wallImage)){
    console.log('Cant move')}
    else{
      //If theres no stone
    
  grid.tiles[y][x].img = grid.playerImage;
  grid.tiles[y][x+1].img = grid.grassImage;
  console.log('Moved left')
  grid.moves++
    }
  }
  
}
static moveDown(x,y, grid){
  if (grid.tiles[y][x].img != grid.wallImage && grid.tiles[y][x].img != grid.bgImage){
    if (grid.powerUp == 'Strength' && grid.usePowerup == true){
      console.log('Recognized power up')
    if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.stoneImage && grid.tiles[y+2][x].img != grid.wallImage)){
      if (grid.tiles[y+2][x].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y+2][x].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y+1][x].img = grid.stoneImage
        grid.tiles[y+2][x].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
        }
      }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.stoneOnGoal && grid.tiles[y+2][x].img != grid.wallImage){
      if (grid.tiles[y+2][x].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y+2][x].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y+1][x].img = grid.stoneImage
        grid.tiles[y+2][x].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
    
        }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.stoneImage && grid.tiles[y+2][x].img != grid.wallImage){
      if (grid.tiles[y+2][x].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y+2][x].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y+1][x].img = grid.stoneImage
        grid.tiles[y+2][x].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
        
        }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.stoneOnGoal && grid.tiles[y+2][x].img != grid.wallImage){
      if (grid.tiles[y+2][x].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y+2][x].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
          console.log('Removing power up')
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y+1][x].img = grid.stoneImage
        grid.tiles[y+2][x].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
      
        }
    }
   //Checking if theres a stone and if it can be 
   if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.bgImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.bgImage)){
    console.log('Cant move stone into stone')}

   else if((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img != grid.wallImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img != grid.wallImage)){
    grid.tiles[y][x].img = grid.playerImage;
    grid.tiles[y+1][x].img = grid.stoneImage;
    grid.tiles[y-1][x].img = grid.grassImage;
    console.log('You tried to move the stone')
    grid.moves++
  }
  //Cant move if thers a wall after
  else if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.wallImage)||
  (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.wallImage)){
    console.log('Cant move')
  }
  
    else{
      //If theres no stone
      if(grid.tiles[y][x].img == grid.powerUpImage){
        console.log('u took the powerup')
        grid.remainingPowerUps = 1
      }
  grid.tiles[y][x].img = grid.playerImage;
  grid.tiles[y-1][x].img = grid.grassImage;
  console.log('Moved down')
  grid.moves++
  
  }
}
}
static moveUp(x,y, grid){
  if (grid.tiles[y][x].img != grid.wallImage && grid.tiles[y][x].img != grid.bgImage){
    if (grid.powerUp == 'Strength' && grid.usePowerup == true){
      console.log('Recognized power up')
    if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.stoneImage && grid.tiles[y-2][x].img != grid.wallImage)){
      if (grid.tiles[y-2][x].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y-2][x].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y-1][x].img = grid.stoneImage
        grid.tiles[y-2][x].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
        }
      }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.stoneOnGoal && grid.tiles[y-2][x].img != grid.wallImage){
      if (grid.tiles[y-2][x].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y-2][x].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y-1][x].img = grid.stoneImage
        grid.tiles[y-2][x].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
        }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.stoneImage && grid.tiles[y-2][x].img != grid.wallImage){
      if (grid.tiles[y-2][x].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y-2][x].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y-1][x].img = grid.stoneImage
        grid.tiles[y-2][x].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
      
      }
    }
    else if
    (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.stoneOnGoal && grid.tiles[y-2][x].img != grid.wallImage){
      if (grid.tiles[y-2][x].img == grid.stoneImage){
        console.log('Normal stone in the way')}
        else if(grid.tiles[y-2][x].img == grid.stoneOnGoal){
        console.log('Goalstone in the way')
        }
        else{
          console.log('Removing power up')
        grid.tiles[y][x].img = grid.playerImage
        grid.tiles[y-1][x].img = grid.stoneImage
        grid.tiles[y-2][x].img = grid.stoneImage
        grid.remainingPowerups--
        grid.usePowerup = false
        }
    }
   //Checking if theres a stone and if it can be moved
   if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.bgImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.bgImage)){
    console.log('Cant move stone into stone')}

   else if((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img != grid.wallImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img != grid.wallImage)){
    grid.tiles[y][x].img = grid.playerImage;
    grid.tiles[y-1][x].img = grid.stoneImage;
    grid.tiles[y+1][x].img = grid.grassImage;
    console.log('You tried to move the stone')
    grid.moves++
  }
  //Cant move if thers a wall after
  else if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.wallImage)||
  (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.wallImage)){
    console.log('Cant move')}

    else{
  //If theres no stone
  grid.tiles[y][x].img = grid.playerImage;
  grid.tiles[y+1][x].img = grid.grassImage;
  console.log('Moved up')
  grid.moves++
 
    }
  }
}
}

