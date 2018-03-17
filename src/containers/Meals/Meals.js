// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addMeal, editMeal, removeMeal } from 'actions/meals';
import type { Connector } from 'react-redux';
import { MealList } from 'components';
import { MealCollection } from 'types/Meal';

type Props = {
  meals: MealCollection,
  addMeal: Function,
  removeMeal: Function,
  editMeal: Function
};

const Meals = ({meals, addMeal, removeMeal, editMeal}) => (
  <div>
    {console.log(meals)}
    <MealList meals={meals}/>
  </div>
);

const mapStateToProps = state => ({
  meals: state.meals
});

const mapDispatchToProps = dispatch => ({
  addMeal,
  editMeal,
  removeMeal
});

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Meals);
