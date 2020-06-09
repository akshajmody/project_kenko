import React from 'react';
import axios from 'axios';
import MealPlan from './MealPlan.jsx';

class Mealgen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCuisine: "none",
      renderMealPlan: false,
    };
    this.clickTest = this.clickTest.bind(this);
  }


  clickTest () {
    this.setState({
      renderMealPlan: true
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


  render () {
    return (
      <div className="mealgen">
        <div className="Selection">MEAL OPTIMIZATION
          <div className="Jline">食事最適化</div>
            <div className="generator">
              <div className="selectedCuisine">{this.props.selectedCuisine} selected</div>
              <div className="generateButton" onClick={this.clickTest}>-click to generate-</div>
              {this.renderMealPlan()}
            </div>
        </div>
      </div>
      )
  }
}

export default Mealgen;