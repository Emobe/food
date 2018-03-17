// @flow
import React from 'react';
import { Meal as MealType } from 'types/Meal';

type MealProps = {
  meal: MealType,
  remove: Function,
  edit: Function,
};

const Meal = ({ meal, remove, edit }: MealProps) => (
  <div className="meal">
    {meal.name}
  </div>
);

export default Meal;
