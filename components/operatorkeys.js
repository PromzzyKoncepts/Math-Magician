/*eslint-disable*/
import { Component } from 'react';

class OperatorKeys extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick } = this.props;
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
  }
}
export default OperatorKeys;
