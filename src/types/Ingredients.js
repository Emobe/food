export type IngredientId = string;

export type Ingredient = {
  +_id: IngredientId,
  +name: string,
  ingredients: Array<string>
};

export type IngredientCollection = { [key: string]: Ingredient}

export type IngredientState = {
  ingredients: IngredientCollection
};

export type IngredientsContainerProps = {
  ingredients: List<Map<string, Ingredient>>,
  add: Function,
  edit: Function,
  remove: Function
};

export type AddIngredientAction = { type: 'ADD_TODO', ingredient: Ingredient };
export type EditIngredientAction = { type: 'EDIT_INGREDIENT', ingredient: Ingredient };
export type RemoveIngredientAction = { type: 'REMOVE_INGREDIENT', id: IngredientId };

export type IngredientAction = AddIngredientAction | EditIngredientAction | RemoveIngredientAction;
