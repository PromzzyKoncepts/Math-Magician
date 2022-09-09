/*eslint-disable*/
import React from 'react';

const OperatorKeys = (props) => {
  const { handleClick } = props;
  return (
    <>
      <button type="button" className="btn btn-top" onClick={handleClick}>AC</button>
      <button type="button" className="btn btn-top" onClick={handleClick}>+/-</button>
      <button type="button" className="btn btn-top" onClick={handleClick}>%</button>
      <button type="button" className="btn btn-side" onClick={handleClick}>÷</button>
      <button type="button" className="btn btn-side" onClick={handleClick}>x</button>
      <button type="button" className="btn btn-side" onClick={handleClick}>-</button>
      <button type="button" className="btn btn-side" onClick={handleClick}>+</button>
      <button type="button" className="btn btn-side" onClick={handleClick}>=</button>
    </>
  );
};
export default OperatorKeys;
