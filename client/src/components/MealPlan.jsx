import React from 'react';
import axios from 'axios';

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
      protein: "none",
      seasoning: "none",
      supplement: "none",
      supplementTwo: "none",
      supplementThree: "none",
      vegetable: "none",
      renderMealPlan: false,
      macroset: {}
    };
    this.getFoods=this.getFoods.bind(this);
  }

  // componentDidMount() {
  //   this.getFoods(this.props.cuisine);
  // }

  getFoods(cuisine) {
    axios.get(`/kenko/${cuisine}`)
    .then(this.setMacro)
    .catch(this.handleError)
  }

  setMacro({data}) {
    this.setState({macroset: data})
  }

  renderCuisine () {
    if (this.props.cuisine === "Japanese") {
      return (
        <div className="foods">
          <div className="J1">Daily Supplements: multivitamin, fish oil, collagen</div>
          <div className="J2">Protein: salmon filet </div>
          <div className="J3">Fat: rice bran oil </div>
          <div className="J4">Carbohydrate: Genmai Brown Rice </div>
          <div className="J5">Vegetables: sprouting Broccoli, spinach, bean sprouts</div>
          <div className="J6">Seasonings: soy sauce, yuzukosho, green onions, sesame sauce </div>
          <div className="J7">Probiotic: Miso Soup</div>
          <div className="J8">Fruits: wild blueberries, organic mandarins</div>
        </div>
      )
    }
    if (this.props.cuisine === "Korean") {
      return (
        <div className="foods">
          <div className="K1">Daily Supplements: multivitamin, fish oil, collagen </div>
          <div className="K2">Protein: grass fed beef sirloin</div>
          <div className="K3">Fat: high oleic canola oil </div>
          <div className="K4">Carbohydrate: purple rice </div>
          <div className="K5">Vegetables: onions and peppers, eggplant, tomato </div>
          <div className="K6">Seasonings: gochujang, garlic, ginger, soy sauce</div>
          <div className="K7">Probiotic: radish kimchi </div>
          <div className="K8">Fruits: kiwi, wild blueberries</div>
        </div>
      )
    }
    if (this.props.cuisine === "Mediterranean") {
      return (
        <div className="foods">
          <div className="M1">Daily Supplements: multivitamin, collagen </div>
          <div className="M2">Protein: tilapia</div>
          <div className="M3">Fat: extra virgin olive oil</div>
          <div className="M4">Carbohydrate: whole grain couscous</div>
          <div className="M5"> Vegetables: spinach, sprouting broccoli, cauliflower </div>
          <div className="M6">Seasonings: rosemary, garlic, fennel, lemon juice</div>
          <div className="M7">Probiotic: greek yoghurt</div>
          <div className="M8">Fruits: grapefruit, red grapes</div>
        </div>
      )
    }
  }


  render () {
    return (this.renderCuisine())
  }
}

export default MealPlan;