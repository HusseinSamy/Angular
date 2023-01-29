import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const END_EDIT = 'END_EDIT';


export class AddIngredient implements Action{
  readonly type: string = ADD_INGREDIENT;
  constructor(public payload: Ingredient) { };
}

export class AddIngredients implements Action{
  readonly type: string = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[] ) { };
}
export class ClearIngredients implements Action {
  readonly type: string = CLEAR_INGREDIENTS;
  constructor(public payload: []) { };
}
export class DeleteIngredient implements Action{
  readonly type: string = DELETE_INGREDIENT;
  constructor(public payload: number) {};
}

export class UpdateIngredient implements Action{
  readonly type: string = UPDATE_INGREDIENT;
  constructor(public payload: {index: number, ingredient: Ingredient}) {};
}

export class StartEdit implements Action{
  readonly type: string = START_EDIT;
  constructor(public payload: number) {};
}

export class EndEdit implements Action{
  readonly type: string = END_EDIT;
  constructor(public payload: null) {};
}

export type ShoppingListActions = AddIngredient | AddIngredients | ClearIngredients | DeleteIngredient | UpdateIngredient | StartEdit | EndEdit;
