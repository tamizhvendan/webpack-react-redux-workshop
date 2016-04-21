import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import AppNavBar from './components/appNavBar.jsx';
import Wall from './components/wall.jsx';

class App extends React.Component {

  render () {
    return (
      <div>
        <AppNavBar />
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3}><Wall /></Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

render(<App />, document.getElementById("app"))