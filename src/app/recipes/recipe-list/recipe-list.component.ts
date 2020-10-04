import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      ' this is just a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'this is just a test',
      'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28055/recipe-book-clipart-md.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
