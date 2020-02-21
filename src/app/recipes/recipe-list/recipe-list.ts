import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component ({
    selector: 'recipe-list',
    templateUrl: '../recipe-list/recipe-list.html',
    styleUrls: ['../recipe-list/recipe-list.scss']
})

export class RecipeList {
    recipes: Recipe[] = [
        new Recipe('Stroganoff', 'A delicious recipe of egg noodles and beef with creamy mushroom sauce.', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/02/30-Minute-Beef-Stroganoff-Recipe-1.jpg'),
        new Recipe('Stroganoff', 'A delicious recipe of egg noodles and beef with creamy mushroom sauce.', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/02/30-Minute-Beef-Stroganoff-Recipe-1.jpg'),
    ];
}