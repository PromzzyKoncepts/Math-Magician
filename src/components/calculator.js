// import { render } from '@testing-library/react';

import React from 'react';
import DisplayScreen from './displayScreen';
import NumericKeys from './numericKeys';
import OperatorKeys from './operatorkeys';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick = (event) => {
      this.setState((state) => calculate(state, event.target.textContent));
    };

    render() {
      const { total, next, operation } = this.state;
      return (
        <div className="calc-container">
          <DisplayScreen next={next} total={total} operation={operation} />
          <OperatorKeys handleClick={this.handleClick} />
          <NumericKeys handleClick={this.handleClick} />
        </div>
      );
    }
}
export default Calculator;
