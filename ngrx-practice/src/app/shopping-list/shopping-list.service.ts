import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store'
import * as ShoppingListActions  from './store/shopping-list.actions';
import * as  fromShoppingList  from './store/shopping-list.reducer';
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(private store: Store<fromShoppingList.AppState> ) { };

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient | null {

    let item: Ingredient;
    this.store.select('shoppingList').subscribe((values: { ingredients: Ingredient[] }) => {
      console.log(values.ingredients[index]);
      item = values.ingredients[index];
    });
    return item ? item : null;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    // this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient))
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    // this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
    // this.store.dispatch(new ShoppingListActions.UpdateIngredient({index, ingredient: newIngredient}))
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
    // this.store.dispatch(new ShoppingListActions.DeleteIngredient(index))
  }
}
