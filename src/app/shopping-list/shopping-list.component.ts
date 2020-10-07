import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 10),
    new Ingredient('flour', 10),
    new Ingredient('butter', 1),
  ];
  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient: Ingredient) {
    console.log(ingredient.amount);
    console.log(ingredient.name);
    this.ingredients.push(ingredient);
  }
}
