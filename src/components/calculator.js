// import { render } from '@testing-library/react';

import { Component } from 'react';
import DisplayScreen from './displayScreen';
import NumericKeys from './numericKeys';
import OperatorKeys from './operatorkeys';
// import calculate from './logic/calculate.js';

class Calculator extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div className="calc-container">
        <DisplayScreen />
        <OperatorKeys />
        <NumericKeys />
      </div>
    );
  }
}
export default Calculator;
