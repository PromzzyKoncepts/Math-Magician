/*eslint-disable*/

import React from 'react';

const NumberKeys = (props) => {

  const { handleClick } = props;
  return (
    <div className="numbers">
      <button type="button" data-testid="seven" className="btn btn-primary" onClick={handleClick}>7</button>
      <button type="button" data-testid="eight" className="btn btn-primary" onClick={handleClick}>8</button>
      <button type="button" data-testid="nine" className="btn btn-primary" onClick={handleClick}>9</button>
      <button type="button" data-testid="four" className="btn btn-primary" onClick={handleClick}>4</button>
      <button type="button" data-testid="five" className="btn btn-primary" onClick={handleClick}>5</button>
      <button type="button" data-testid="six" className="btn btn-primary" onClick={handleClick}>6</button>
      <button type="button" data-testid="one" className="btn btn-primary" onClick={handleClick}>1</button>
      <button type="button" data-testid="two" className="btn btn-primary" onClick={handleClick}>2</button>
      <button type="button" data-testid="three" className="btn btn-primary" onClick={handleClick}>3</button>
      <button type="button" data-testid="zero" className="btn btn-primary col-span-2" onClick={handleClick}>0</button>
      <button type="button" data-testid="full-stop" className="btn btn-primary" onClick={handleClick}>.</button>
    </div>
  );
}

export default NumberKeys;
