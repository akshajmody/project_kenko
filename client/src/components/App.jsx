import React from 'react';
import axios from 'axios';
import { Transition, animate } from 'react-spring';
import Selection from './Selection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderTitle: true,
      renderSelection: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      renderTitle: false,
      renderSelection: true
    });
  }

  renderSelection() {
    if (!this.state.renderSelection) {
      return null;
    }
    return (
      <Selection></Selection>
    );
  }

  renderTitle() {
    if (!this.state.renderTitle) {
      return null;
    }
    return (
      <div className="EntryScreen">
        <img className="EntryImage" src="https://i.ya-webdesign.com/images/transparent-gray-hexagon-1.png" onClick={this.handleClick}></img>
        <div className="EntryButton" onClick={this.handleClick}> 健康
          <div className="EntryButton2" >kenkō</div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="App">
        {this.renderTitle()}
        {this.renderSelection()}
      </div>
      )
  }
}

export default App;