// @flow
import React from 'react';
import { Meal as MealType } from 'types/Meal';
import Paper from 'material-ui/Paper';
import {
  withStyles
} from 'material-ui/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.units * 3,
    margin: theme.spacing.units * 3,
  }
});

type MealProps = {
  meal: MealType,
  remove: Function,
  edit: Function,
};

const Meal = ({ meal, remove, edit }: MealProps) => (
  <Paper className="meal">
    {meal.name}
  </Paper>
);

export default withStyles(styles, { withTheme: true })(Meal);
