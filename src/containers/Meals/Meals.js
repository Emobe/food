// @flow
import { connect } from 'react-redux';
import { addMeal, editMeal, removeMeal } from 'ducks/meals';
import type { Connector } from 'react-redux';
import { Meals } from 'components';
import { MealList } from 'types/Meal';

type Props = {
  meals: MealList,
  addMeal: Function,
  removeMeal: Function,
  editMeal: Function
};

const mapStateToProps = state => ({
  meals: state.get('meals')
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
