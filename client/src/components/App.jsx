import React from 'react';
import { component } from 'react';
import axios from 'axios';
import Selection from './Selection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderTitle: true,
      renderSelection: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeSelection = this.closeSelection.bind(this);
  }


  handleClick() {
    this.setState({
      renderTitle: false,
      renderSelection: true
    });
  }

  closeSelection() {
    this.setState({
      renderSelection: false
    })
    return (
      <div>TEST DIV</div>
    )
  }

  renderSelection() {
    if (!this.state.renderSelection) {
      return null;
    }
    return (
      <Selection closeSelect = {this.closeSelection}></Selection>
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
        {/* {this.renderMealgen()} */}
      </div>
      )
  }
}

export default App;