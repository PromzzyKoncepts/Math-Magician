import { Component } from 'react';

class OperatorKeys extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <button type="button" className="btn btn-top">AC</button>
        <button type="button" className="btn btn-top">+/-</button>
        <button type="button" className="btn btn-top">%</button>
        <button type="button" className="btn btn-side">/</button>
        <button type="button" className="btn btn-side">x</button>
        <button type="button" className="btn btn-side">-</button>
        <button type="button" className="btn btn-side">+</button>
        <button type="button" className="btn btn-side">=</button>
      </>
    );
  }
}
export default OperatorKeys;
