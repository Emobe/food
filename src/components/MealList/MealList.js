// @flow
import React from 'react';
import type { MealList

type Props = {
  meals: List<Map<string, string>>,
  add: Function,
  edit: Function,
  remove: Function
};

const MealList = ({ meals, add, remove, edit }: Props) => (
  <div className="meal-list">
    Meal list
  </div>
);


export default MealList;
