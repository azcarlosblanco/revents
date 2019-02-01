import React, { Component } from "react";
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions'
import { Button } from 'semantic-ui-react';


export class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;

    return (
      <div>
        <h1>Test Area</h1>
        <p>Data: {data}</p>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.test.data
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
