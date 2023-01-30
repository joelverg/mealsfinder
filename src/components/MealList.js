import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import MealItem from './MealItem';

class MealList extends Component {
  render() {
    console.log("this.props", this.props);

    return (
      <div>
        {
            this.props.favoriteMeals.length > 0 ? 
            <h4 className="link">
            <Link to='/favorites'> Favorites </Link>
            </h4>
            :
            <div></div>
        }
        
        {this.props.meals.map((meal, index) => {
          return <MealItem key={index} meal={meal} favoriteButton={true} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null) (MealList);




