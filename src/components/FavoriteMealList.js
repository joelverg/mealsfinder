import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MealItem from "./MealItem";


class FavoriteMealList extends Component {
    render() {
      return (
        <div>
          <div>
            <h4 className="link">
                <Link to='/'>Home</Link>
            </h4>
            <h4>Favorite Meals</h4>
          </div>
          {this.props.favoriteMeals.map((meal, index) => {
            return (
                <MealItem
              key={index}
              meal={meal}
              favoriteButton={false}
            />
            )
          })}
        </div>
      );
    }
}

function mapStateToProps(state){
    return {
        favoriteMeals: state.favoriteMeals
    }
}

export default connect(mapStateToProps, null)(FavoriteMealList);