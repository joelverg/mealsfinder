import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteMeal } from '../actions';

class MealItem extends Component {
    constructor() {
        super();

        this.state = {
            favorite : false
        }
    }

    favorite(meal) {
        this.props.favoriteMeal(meal)
        this.setState({favorite: true})
    }

    render() {
        let { meal } = this.props

        return (
          <div className="meal-item">
            <div className="meal-text">
              <div className="meal-header">
                {this.props.favoriteButton ? (
                  this.state.favorite ? (
                    <div className="star"> &#9733; </div>
                  ) : (
                    <div className="star" onClick={() => this.favorite(meal)}>
                      &#9734;
                    </div>
                  )
                ) : (
                  <div></div>
                )}

                <h4>
                  <a href={meal.strYoutube}>
                    <span>{meal.strMeal}</span>
                  </a>
                </h4>
              </div>
              <h4 className="ingredient">Ingredients</h4>
              <div className="ingredient-group">
                {meal.strIngredient1 !== "" && (
                  <p className="ingredient">{meal.strIngredient1}</p>
                )}
                {meal.strIngredient2 !== "" && (
                  <p className="ingredient">{meal.strIngredient2}</p>
                )}
                {meal.strIngredient3 !== "" && (
                  <p className="ingredient">{meal.strIngredient3}</p>
                )}
                {meal.strIngredient4 !== "" && (
                  <p className="ingredient">{meal.strIngredient4}</p>
                )}
                {meal.strIngredient5 !== "" && (
                  <p className="ingredient">{meal.strIngredient5}</p>
                )}
                {meal.strIngredient6 !== "" && (
                  <p className="ingredient">{meal.strIngredient6}</p>
                )}
                {meal.strIngredient7 !== "" && (
                  <p className="ingredient">{meal.strIngredient7}</p>
                )}
                {meal.strIngredient8 !== "" && (
                  <p className="ingredient">{meal.strIngredient8}</p>
                )}
                {meal.strIngredient9 !== "" && (
                  <p className="ingredient">{meal.strIngredient9}</p>
                )}
                {meal.strIngredient10 !== "" && (
                  <p className="ingredient">{meal.strIngredient10}</p>
                )}
                {meal.strIngredient11 !== "" && (
                  <p className="ingredient">{meal.strIngredient11}</p>
                )}
                {meal.strIngredient12 !== "" && (
                  <p className="ingredient">{meal.strIngredient12}</p>
                )}
                {meal.strIngredient13 !== "" && (
                  <p className="ingredient">{meal.strIngredient13}</p>
                )}
                {meal.strIngredient14 !== "" && (
                  <p className="ingredient">{meal.strIngredient14}</p>
                )}
                {meal.strIngredient15 !== "" && (
                  <p className="ingredient">{meal.strIngredient15}</p>
                )}
                {meal.strIngredient16 !== "" && (
                  <p className="ingredient">{meal.strIngredient16}</p>
                )}
                {meal.strIngredient17 !== "" && (
                  <p className="ingredient">{meal.strIngredient17}</p>
                )}
                {meal.strIngredient18 !== "" && (
                  <p className="ingredient">{meal.strIngredient18}</p>
                )}
                {meal.strIngredient19 !== "" && (
                  <p className="ingredient">{meal.strIngredient19}</p>
                )}
                {meal.strIngredient20 !== "" && (
                  <p className="ingredient">{meal.strIngredient20}</p>
                )}
              </div>
            </div>

            <img
              className="meal-img"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
        );
    }
}

export default connect(null, { favoriteMeal }) (MealItem);