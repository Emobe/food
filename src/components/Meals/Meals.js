import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Meals extends Component {
  addmeal(meal) {}

  removeMeal(mealId) {}

  editMeal(mealId, meal) {}

  render() {
    return <div className="meals">Meals</div>;
  }
}

const mapDispatchToProps = () => {};
const mapStateToProps = state => {};

export default connect(mapDispatchToProps, mapStateToProps)(Meals);
