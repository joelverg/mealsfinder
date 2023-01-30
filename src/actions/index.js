export const SET_MEALS = 'SET_MEALS';
export const FAVORITE_MEAL = 'FAVORITE_MEAL'

export function setMeals(items) {
    return {
        type: SET_MEALS,
        items
    }
}

export function favoriteMeal(meal) {
    return {
        type: FAVORITE_MEAL,
        meal
    }
}