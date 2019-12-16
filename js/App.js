import Grid from './Grid.js'

export default {
    components: {
        Grid
    },
    template: `
    <div id="app">
      <h1 class="header">Sokoban</h1>
      <div class="grid-body">
      <Grid>
      </Grid>
      </div>
      <div class="information">
      ◄ ► You can use arrow keys to move around <br>
      🖰 You can also use the mouse to move around <br>
    </div>
    </div>
    `,
}
