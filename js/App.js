import Grid from './Grid.js'

export default {
    components: {
        Grid
    },
    template: `
    <div id="app">
      <h1 class="header">Sokoban</h1>
      <div class="grid-body">
      <Grid></Grid>
      </div>
    </div>
    `,
}
