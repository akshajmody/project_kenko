import React from 'react';
import axios from 'axios';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCuisine: "none"
    };
    this.handleClickJ=this.handleClickJ.bind(this);
    this.handleClickK=this.handleClickK.bind(this);
    this.handleClickM=this.handleClickM.bind(this);
  }

  handleClickJ () {
    this.setState({
      renderMain: true,
      selectedCuisine: "J"
    });
  }
  handleClickK () {
    this.setState({
      renderMain: true,
      selectedCuisine: "K"
    });
  }
  handleClickM () {
    this.setState({
      renderMain: true,
      selectedCuisine: "M"
    });
  }

  render () {
    return (
      <div className="Selection">select a cuisine
        <div className="SelectionJP">料理スタイルを選んでください</div>
        <div id="J" className="cuisine testing" onClick={this.props.closeSelectionJ}>>Japanese
          <img className="Japanese" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1920px-Flag_of_Japan.svg.png"></img></div>
        <div id="K" className="cuisine" onClick={this.props.closeSelectionK}>>Korean
          <img className="Korean" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1920px-Flag_of_South_Korea.svg.png"></img></div>
        <div id="M"className="cuisine" onClick={this.props.closeSelectionM}>>Mediterranean
          <img className="Mediterranean" src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Mediterranean_flag.png"></img></div>
      </div>
      )
  }
}

export default Selection;