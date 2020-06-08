import React from 'react';
import axios from 'axios';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render () {
    return (
      <div className="Selection">select a cuisine
        <div className="cuisine">>Japanese
          <img className="Japanese" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1920px-Flag_of_Japan.svg.png"></img></div>
        <div className="cuisine">>Korean
          <img className="Korean" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1920px-Flag_of_South_Korea.svg.png"></img></div>
        <div className="cuisine">>Mediterranean
          <img className="Mediterranean" src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Mediterranean_flag.png"></img></div>
      </div>
      )
  }
}

export default Selection;