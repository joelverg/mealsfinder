import React, { Component } from "react"
import SearchMeals from "./SearchMeals";
import MealList from './MealList';
import '../style/index.css'

class App extends Component {
    render() {
        return (
            <div >
                <h2>Meals Finder</h2>
                <SearchMeals/>
                <MealList/>
            </div>
        )
    }
}

export default App;