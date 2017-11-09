// @flow
import { MealAction, Meal, MealCollection, MealId} from 'types/Meal';

const action = (name: string) => `zikher/auth/${name}`;

const ADD_MEAL = action('ADD_MEAL');
const EDIT_MEAL = action('EDIT_MEAL');
const REMOVE_MEAL = action('REMOVE_MEAL');
const ADD_MEAL_SUCCESS = action('ADD_MEAL_SUCCESS');
const EDIT_MEAL_SUCCESS = action('EDIT_MEAL_SUCCESS');
const REMOVE_MEAL_SUCCESS = action('REMOVE_MEAL_SUCCESS');

export const addMeal: MealAction = (meal: Meal) => ({ type: ADD_MEAL, meal });
export const removeMeal: MealAction = (mealId: MealId) => ({ type: REMOVE_MEAL, mealId });
export const editMeal: MealAction  = (mealId: MealId, meal: Meal)  => ({ type: EDIT_MEAL, meal, mealId });

const initialState: MealCollection = [
  {
    id: '2345ok2hj3n5ok2hj3o',
    name: 'Food food food'
  },
  {
    id: '2345ok2hj3n5ok2hj3o',
    name: 'qdsfgdfg1 food food',
    ey: 'sdfsd'
  },
];

const meals = (state: MealCollection = initialState, action: MealAction) => {
  switch(action.type){
    case ADD_MEAL_SUCCESS:
      return state.push(action);
    case EDIT_MEAL_SUCCESS:
      return state.push(action);
    case REMOVE_MEAL_SUCCESS:
      return state.push(action);
    default:
      return state;
  }
};

export default meals;
