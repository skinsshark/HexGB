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
    if ( rValue <= 255 && rValue >= 0 ) {
      if ( rValue === "" ) {
        e.target.value = "0";
      }
      this.setState({
        rValue: e.target.value,
      });
    }
  }

  handleGChange(e) {
    const gValue = e.target.value;
    if ( gValue <= 255 && gValue >= 0 ) {
      if ( gValue === "" ) {
        e.target.value = "0";
      }
      this.setState({
        gValue: e.target.value,
      });
    }
  }

  handleBChange(e) {
    const bValue = e.target.value;
    if ( bValue <= 255 && bValue >= 0 ) {
      if ( bValue === "" ) {
        e.target.value = "0";
      }
      this.setState({
        bValue: e.target.value,
      });
    }
  }

  render() {
    const red = "rgb("+ this.state.rValue + ",0,0)";
    const green = "rgb(0," + this.state.gValue + ",0)";
    const blue = "rgb(0,0," + this.state.bValue + ")";
    const mix = "rgb(" + this.state.rValue + "," + this.state.gValue + "," + this.state.bValue + ")";

    const styles = {
      rBack: red,
      gBack: green,
      bBack: blue,
      mix: mix,
    }

    return (
      <Grid className="page-wrapper">
        <Row style={{backgroundColor: styles.mix}} className="inputs">
          <input type="number" value={this.state.rValue} onChange={this.handleRChange}/>
          <input type="number" value={this.state.gValue} onChange={this.handleGChange}/>
          <input type="number" value={this.state.bValue} onChange={this.handleBChange}/>
        </Row>
        <Row className="backgrounds">
          <Col md={4} style={{backgroundColor: styles.rBack}} className="background-block">
            blockblockblockblockblockblockblockblockblock
          </Col>
          <Col md={4} style={{backgroundColor: styles.gBack}} className="background-block">
            blockblockblockblockblockblockblockblockblock
          </Col>
          <Col md={4} style={{backgroundColor: styles.bBack}} className="background-block">
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
