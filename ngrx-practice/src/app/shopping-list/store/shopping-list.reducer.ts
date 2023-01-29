import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions'



export interface AppState{
  shoppingList: State;
}
export interface State{
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number,
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      console.log('add ingredient case is being operated');
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
//
//
    case ShoppingListActions.ADD_INGREDIENTS:
      console.log('add ingredients case is being operated');
      return {
        ...state,
        ingredients: [...state.ingredients, ...(action.payload as [])]
      };
//
//
    case ShoppingListActions.CLEAR_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      };
//
//
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients.slice(0,action.payload as number), ...state.ingredients.slice(action.payload as number + 1) ]
      };
//
//
    case ShoppingListActions.UPDATE_INGREDIENT:
      const stateCopy =  [...state.ingredients] ;
      const index = (action.payload as {index: number, ingredient: Ingredient}).index
      const ingredient = (action.payload as {index: number, ingredient: Ingredient}).ingredient

      stateCopy[index] = ingredient;
      console.log(stateCopy);
      console.log(index);
      console.log(ingredient);

      return {
        ...state,
        ingredients: stateCopy
      };
//
//
    case ShoppingListActions.START_EDIT:
      console.log(state);
      console.log(action.payload);

      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: {...state.ingredients[action.payload as number]},
      };
//
    case ShoppingListActions.END_EDIT:
      return {
        ...state,
        editedIngredientIndex: -1,
        editedIngredient: null,
      };
//
//
    default:
      return state;
  }
}
