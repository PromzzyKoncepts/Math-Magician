/*eslint-disable*/
import { Component } from 'react';

class DisplayScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="displayscreen-cont">
        <span className="display-screen">
        {total}
          {operation}
          {next}
           </span>
      </div>
    );
  }
}
export default DisplayScreen;
