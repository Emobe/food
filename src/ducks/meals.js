// @flow
import { List, Map } from 'immutable';

type mealAction = {
  type: string,
  mealId?: string
}

type Meal = {
  _id: string,
  name: string,
  ingredients: Array<string>
};

const action = name => `${process.env.app}/meals/${name}`;

const ADD_MEAL = action('ADD_MEAL');
const EDIT_MEAL = action('EDIT_MEAL');
const REMOVE_MEAL = action('REMOVE_MEAL');

const addMeal = (meal: Meal) => ({ type: ADD_MEAL, meal });
const removeMeal = mealId => ({ type: REMOVE_MEAL, mealId });
const editMeal = (mealId: string, meal: Meal)  => ({ type: ADD_MEAL, meal, mealId });

const initialState: List<Meal> = List([]);
const meals = (state: Array<Object> = initialState, action: mealAction) => {
  switch(action.type){
    case ADD_MEAL:
      return state.push(action.meal);
    default:
      return state;
  }
};

export default meals;
