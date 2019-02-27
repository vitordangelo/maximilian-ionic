import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'Omelete',
      imageUrl: 'https://i.imgur.com/OEljHoM.png',
      ingredients: ['Ovo', 'Tempeiro']
    },
    {
      id: '2',
      title: 'Batata Frita',
      imageUrl: 'https://i.imgur.com/cChvWto.png',
      ingredients: ['Ovo', 'Tempeiro']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [... this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
}
