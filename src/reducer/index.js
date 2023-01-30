import { FAVORITE_MEAL, SET_MEALS } from "../actions";
import { combineReducers } from "redux";

function meals(state = [], action) {
    switch(action.type) {
        case SET_MEALS :
            return action.items
        default :
            return state;
    }
}

function favoriteMeals(state = [], action) {
    switch(action.type) {
        case FAVORITE_MEAL :
            state = [...state, action.meal]
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({meals, favoriteMeals})

export default rootReducer;