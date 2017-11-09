import type { List } from 'immutable';

export type MealId = string;

export type Meal = {|
  _id: MealId,
  name: string
|};

export type MealCollection = Array<Meal>;

export type MealState = {
  meals: MealCollection
};

export type MealsContainerProps = {
  meals: List<Map<string, Meal>>,
  add: Function,
  edit: Function,
  remove: Function
};

export type AddMealAction = { type: 'ADD_TODO', meal: Meal };
export type EditMealAction = { type: 'EDIT_MEAL', meal: Meal };
export type RemoveMealAction = { type: 'REMOVE_MEAL', id: MealId };

export type MealAction = AddMealAction | EditMealAction | RemoveMealAction;
