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
    this.regenerate=this.regenerate.bind(this);
  }

  componentDidMount() {
    const input = this.props.cuisine;
    setTimeout(() => {this.getFoods(this.props.cuisine)}, 2000);
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

  regenerate() {
    const input = this.props.cuisine;
    this.setState({renderMealPlan: false})
    //effect of "processing" - purely aesthetic
    setTimeout(() => {this.getFoods(input)}, 2000);
  }


  renderCuisine () {
    if (this.state.renderMealPlan === true) {
      return (
        <div className="foods">
          <div className="regenerate" onClick={this.regenerate}>generate new optimization</div>
          <div className="carbHover">
            <div className="carbo1">Carbohydrate: {this.state.carbo.carbo} </div>
            <div className="carbo2 info">Benefits: {this.state.carbo.utility} </div>
          </div>
          <div className="fatHover">
            <div className="fat1">Fat: {this.state.fat.fat} </div>
            <div className="fat2 info">Benefits: {this.state.fat.utility} </div>
          </div>
          <div className="proteinHover">
            <div className="protein1">Protein: {this.state.protein.protein} </div>
            <div className="protein2 info">Benefits: {this.state.protein.utility} </div>
          </div>
          <div className="vegHover">
            <div className="veg1">Vegetables: {this.state.vegetable[0].vegetable}, {this.state.vegetable[1].vegetable}, {this.state.vegetable[2].vegetable} </div>
            <div className="veg2 info">Benefits: {this.state.vegetable[0].utility},<br/>{this.state.vegetable[1].utility},<br/>{this.state.vegetable[2].utility} </div>
          </div>
          <div>Seasonings: {this.state.seasoning[0].seasoning}, {this.state.seasoning[1].seasoning}, {this.state.seasoning[2].seasoning}, {this.state.seasoning[0].seasoning}</div>
          <div className="proHover">
            <div className="pro1">Probiotic: {this.state.probiotic.probiotic} </div>
            <a className="pro2 info" href="https://www.health.harvard.edu/vitamins-and-supplements/health-benefits-of-taking-probiotics" target="_blank">Harvard Medical: Benefits of probiotics</a>
          </div>
          <div className="fruitHover">
            <div className="fruit1">Fruits: Meal 1:&nbsp;{this.state.fruit[0].fruit}, Meal 2:&nbsp;{this.state.fruit[1].fruit}</div>
            <div className="fruit2 info">Benefits: {this.state.fruit[0].utility},<br/>{this.state.fruit[1].utility}</div>
          </div>
          <div className="supHover">
            <div className="sup1">Supplements:
              <div className="supplements">&nbsp;&nbsp;&nbsp;--Wakeup: {this.state.supplement[0].supplement} and {this.state.supplement[3].supplement} </div>
              <div className="supplements">&nbsp;&nbsp;&nbsp;--Breaking Fast: {this.state.supplement[2].supplement} and {this.state.supplement[1].supplement} </div>
              <div className="supplements">&nbsp;&nbsp;&nbsp;--Before Sleep: {this.state.supplement[4]?.supplement}</div>
              <div className="supplements">&nbsp;&nbsp;&nbsp;--Digestion Concerns: {this.state.supplement[5]?.supplement}</div>
              {/* MULTIPLE ERRORS HERE - FIXED BY ADDING NULL CHECK BUT NOT SURE WHY CANNOT RENDER ANYTHING BEYOND INDEX 4 FOR ANY ARRAY IN STATE - WITHOUT ? , THIS SUPPLEMENT LINE READS UNDEFINED */}
            </div>
            <a className="sup2 info" href="https://www.health.harvard.edu/staying-healthy/supplements-a-scorecard" target="_blank"> Harvard Medical Supplement Scorecard <br/> Multivitamins taken first thing with chilled water upon waking up. <br/> Collagen 30 minutes before first meal to help break intermittent fast smoothly.</a>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="processing">processing...</div>
          <div className="processing">処理中...</div>
          <img className="processingImage" src="https://webstockreview.net/images/hexagon-clipart-transparent-background.gif" ></img>
        </div>
      )
    }
  }


  render () {
    return (this.renderCuisine())
  }
}

export default MealPlan;