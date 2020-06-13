import React from 'react';
import axios from 'axios';
import * as Promise from 'bluebird';

class MealPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCuisine: "none",
      protein: "none",
      fat: "none",
      carbo: "none",
      fruit: "none",
      probiotic: "none",
      seasoning: "none",
      supplement: "none",
      vegetable: "none",
      renderMealPlan: false,
    };
    this.getFoods=this.getFoods.bind(this);
  }

  componentDidMount() {
    this.getFoods(this.props.cuisine);
  }


  getFoods(cuisine) {
    let carboReq = axios.get(`/meal/${cuisine}/carbo`);
    let fatReq = axios.get(`/meal/${cuisine}/fat`);
    let fruitReq = axios.get(`/meal/${cuisine}/fruit`);
    let probioticReq = axios.get(`/meal/${cuisine}/probiotic`);
    let proteinReq = axios.get(`/meal/${cuisine}/protein`);
    let seasoningReq = axios.get(`/meal/${cuisine}/seasoning`);
    let supplementReq = axios.get(`/meal/${cuisine}/supplement`);
    let vegetableReq = axios.get(`/meal/${cuisine}/vegetable`);
    axios.all([carboReq, fatReq, fruitReq, probioticReq, proteinReq, seasoningReq, supplementReq, vegetableReq]).then(axios.spread((carbData, fatData, fruitData, probioticData, proteinData, seasoningData, supplementData, vegetableData) => {
      this.setState({
        carbo: carbData.data[0],
        fat: fatData.data[0],
        probiotic: probioticData.data[0],
        protein: proteinData.data[0],
        fruit: fruitData.data,
        seasoning: seasoningData.data,
        vegetable: vegetableData.data,
        supplement: supplementData.data
      })
    }))
    .then(this.setState({
      renderMealPlan: true
    }))
  }



  renderCuisine () {
    if (this.state.renderMealPlan === true) {
      return (
        <div className="foods">
          <div>Carbohydrate: {this.state.carbo.carbo} </div>
          <div>Fat: {this.state.fat.fat} </div>
          <div>Protein: {this.state.protein.protein} </div>
          <div>Vegetables: {this.state.vegetable[0].vegetable}, {this.state.vegetable[1].vegetable}, {this.state.vegetable[2].vegetable} </div>
          <div>Seasonings: {this.state.seasoning[0].seasoning}, {this.state.seasoning[1].seasoning}, {this.state.seasoning[2].seasoning}, {this.state.seasoning[0].seasoning}</div>
          <div>Probiotic: {this.state.probiotic.probiotic} </div>
          <div>Fruits: {this.state.fruit[0].fruit}, {this.state.fruit[1].fruit}</div>
          <div>Supplements:
            <div className="supplements">Wakeup: {this.state.supplement[0].supplement} and {this.state.supplement[3].supplement} </div>
            <div className="supplements">Breaking Fast: {this.state.supplement[2].supplement} and {this.state.supplement[1].supplement} </div>
            <div className="supplements">Before Sleep: </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>NOT YET</div>
      )
    }
  }


  render () {
    return (this.renderCuisine())
  }
}

export default MealPlan;