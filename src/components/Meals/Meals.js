// @flow
import React, { Component } from 'react';
import { Meal, MealsContainerProps, MealList} from 'types/Meal';

export class Meals extends Component<MealsContainerProps> {
  addmeal(meal: Meal) {}

  removeMeal(mealId: MealList) {}

  editMeal(meal: Meal) {}

  render() {
    const { meals } = this.props;
    return (
      <div className="meals">
      meals
        {meals.map(m => (
          <div>
          {m.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Meals;
