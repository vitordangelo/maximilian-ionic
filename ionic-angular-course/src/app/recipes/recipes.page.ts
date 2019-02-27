import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
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

  ngOnInit() {
  }

}
