// @flow
import { MealAction, Meal, MealId} from 'types/Meal';
import * as Constants from 'constants/meals';

export const addMeal: MealAction = (meal: Meal) => ({ type: Constants.ADD_MEAL, meal });
export const removeMeal: MealAction = (mealId: MealId) => ({ type: Constants.REMOVE_MEAL, mealId });
export const editMeal: MealAction  = (mealId: MealId, meal: Meal)  => ({ type: Constants.EDIT_MEAL, meal, mealId });

