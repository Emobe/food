import type { MealAction, MealState } from './Meal';
import type { Store as ReduxStore, Action as ReduxAction } from 'redux';

export type Action = MealAction;

export type State = MealState;

export type Dispatch = ReduxAction<Action>;

export type Store = ReduxStore<State, Action>;
