import { Component } from 'react';

class DisplayScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="displayscreen-cont">
        <input type="text" className="display-screen" />
      </div>
    );
  }
}
export default DisplayScreen;
