import { MealAction, MealCollection } from 'types/Meal';
import * as Constants from 'constants/meals';

const initialState: MealCollection = {
  jsdf89s0djf098s: {
    _id: '2345ok2hj3n5ok2hj3o',
    name: 'Food food food',
    ingredients: ['123', '456', '789']
  },
  sfdsfsdf9dsif9i: {
    _id: 'sdtgfegf809dugf098u09',
    name: 'qdsfgdfg1 food food',
    ingredients: ['123', '456', '789']
  },
};

const meals = (state: MealCollection = initialState, action: MealAction): MealCollection => {
  switch(action.type){
    case Constants.ADD_MEAL_SUCCESS:
      return state.push(action);
    case Constants.EDIT_MEAL_SUCCESS:
      return state.push(action);
    case Constants.REMOVE_MEAL_SUCCESS:
      return state.push(action);
    default:
      return state;
  }
};

export default meals;
