/*eslint-disable*/
import React from 'react';

const DisplayScreen = (props) => {
    const { total, next, operation } = props;
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

export default DisplayScreen;
