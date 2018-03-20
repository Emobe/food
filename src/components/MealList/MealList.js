// @flow
import React from 'react';
import { MealCollection } from 'types/Meal';
import { Meal } from 'components';

type Props = {
  add: Function,
  edit: Function,
  remove: Function,
  meals: MealCollection
};

const style={
  display: 'flex',
  justifyContet: 'space-between'
};

const MealList = ({ meals, add, remove, edit }: Props) => (
  <div className="meal-list">
    {Object.keys(meals).map(meal => (
      <Meal
        meal={meals[meal]}
        remove={remove}
        edit={edit}
        key={meals[meal]._id}
      />
    ))}
  </div>
);

MealList.defaultProps = {
  meals: {}
};

export default MealList;
