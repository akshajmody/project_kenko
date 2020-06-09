import React from 'react';
import axios from 'axios';
import MealPlan from './MealPlan.jsx';

class Mealgen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCuisine: "none",
      renderMealPlan: false,
      renderButton: true,
    };
    this.clickTest = this.clickTest.bind(this);
  }


  clickTest () {
    this.setState({
      renderMealPlan: true,
      renderButton: false
    });
  }

  renderMealPlan() {
    if (!this.state.renderMealPlan) {
      return null
    }
    return (
      <MealPlan cuisine={this.props.selectedCuisine}></MealPlan>
    )
  }

  renderButton() {
    if(!this.state.renderButton) {
      return (
        <div className="motivational">discpline yourself with scientifically superior foods</div>
      )
    } else {
      return (
        <div className="generateButton" onClick={this.clickTest}>-click to generate-</div>
      )
    }

  }


  render () {
    return (
      <div className="mealgen">
        <div className="Selection">MEAL OPTIMIZATION
          <div className="Jline">食事最適化</div>
            <div className="generator">
              <div className="selectedCuisine">{this.props.selectedCuisine} selected</div>
              {this.renderButton()}
              {this.renderMealPlan()}
            </div>
        </div>
      </div>
      )
  }
}

export default Mealgen;