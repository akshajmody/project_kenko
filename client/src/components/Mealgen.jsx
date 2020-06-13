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
    this.generateMeal = this.generateMeal.bind(this);
  }

  componentDidMount() {
    this.setState({
      selectedCuisine: this.props.selectedCuisine
    })
  }


  generateMeal () {
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
        <div className="motivational">optimization complete</div>
      )
    } else {
      return (
        <div className="generateButton" onClick={this.generateMeal}>-click to generate-</div>
      )
    }

  }


  render () {
    return (
      <div className="mealgen">
        <div className="Selection Test">MEAL OPTIMIZATION
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