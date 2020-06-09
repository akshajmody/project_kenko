import React from 'react';
import { component } from 'react';
import axios from 'axios';
import Selection from './Selection.jsx';
import Mealgen from './Mealgen.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderTitle: true,
      renderSelection: false,
      selectedCuisine: "none",
      renderMealgen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeSelectionJ = this.closeSelectionJ.bind(this);
    this.closeSelectionK = this.closeSelectionK.bind(this);
    this.closeSelectionM = this.closeSelectionM.bind(this);
  }


  handleClick() {
    this.setState({
      renderTitle: false,
      renderSelection: true
    });
  }

  closeSelectionJ() {
    this.setState({
      renderSelection: false,
      selectedCuisine: "Japanese",
      renderMealgen: true
    })
  }

  closeSelectionK() {
    this.setState({
      renderSelection: false,
      selectedCuisine: "Korean",
      renderMealgen: true
    })
  }

  closeSelectionM() {
    this.setState({
      renderSelection: false,
      selectedCuisine: "Mediterranean",
      renderMealgen: true
    })
  }

  renderSelection() {
    if (!this.state.renderSelection) {
      return null;
    }
    return (
      <Selection closeSelectionJ={this.closeSelectionJ} closeSelectionK={this.closeSelectionK} closeSelectionM={this.closeSelectionM}></Selection>
    );
  }

  renderMealgen() {
    if (!this.state.renderMealgen) {
      return null;
    }
    return (
      <Mealgen selectedCuisine={this.state.selectedCuisine}></Mealgen>
    )
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
        {this.renderMealgen()}
      </div>
      )
  }
}

export default App;