import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      rValue: "255",
      gValue: "255",
      bValue: "255",
    }
    this.handleRChange = this.handleRChange.bind(this);
    this.handleGChange = this.handleGChange.bind(this);
    this.handleBChange = this.handleBChange.bind(this);
  }

  handleRChange(e) {
    const rValue = e.target.value;
    if (rValue <= 255) {
      this.setState({
        rValue: rValue,
      });
    }
  }

  handleGChange(e) {
    const gValue = e.target.value;
    if (gValue <= 255) {
      this.setState({
        gValue: gValue,
      });
    }
  }

  handleBChange(e) {
    const bValue = e.target.value;
    if (bValue <= 255) {
      this.setState({
        bValue: bValue,
      });
    }
  }

  render() {
    return (
      <Grid className="page-wrapper">
        <Row className="inputs">
          <input type="number" value={this.state.rValue} onChange={this.handleRChange}/>
          <input type="number" value={this.state.gValue} onChange={this.handleGChange}/>
          <input type="number" value={this.state.bValue} onChange={this.handleBChange}/>
        </Row>
        <Row className="backgrounds">
          <Col md={4} className="background-block">
            blockblockblockblockblockblockblockblockblock
          </Col>
          <Col md={4} className="background-block">
            blockblockblockblockblockblockblockblockblock
          </Col>
          <Col md={4} className="background-block">
            blockblockblockblockblockblockblockblockblock
          </Col>
        </Row>
      </Grid>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
