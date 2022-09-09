// import { render } from '@testing-library/react';
import React, { useState } from 'react';
import DisplayScreen from './displayScreen';
import NumericKeys from './numericKeys';
import OperatorKeys from './operatorkeys';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (event) => {
    const { obj } = state;
    setState({ obj: calculate(obj, event.target.textContent) });
  };
  const { obj } = state;
  const { total, next, operation } = obj;
  return (
    <div className="calc-container">
      <DisplayScreen next={next} total={total} operation={operation} />
      <OperatorKeys handleClick={handleClick} />
      <NumericKeys handleClick={handleClick} />
    </div>
  );
};
export default Calculator;
