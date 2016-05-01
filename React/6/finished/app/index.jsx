import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-flexgrid';
import AppNavBar from './components/appNavBar.jsx';
import Wall from './components/wall.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {

  render () {
    window.g = Grid;
    return (
      <div>
        <AppNavBar />
        <Grid>
          <Col><Wall /></Col>
        </Grid>
      </div>

    );
  }
}

render(<App />, document.getElementById("app"))