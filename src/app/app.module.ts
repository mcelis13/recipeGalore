import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// importing components
import { AppComponent } from './app.component';
import { Header } from '../app/header/header';
import { ShoppingList } from '../app/shopping-list/shopping-list';
import { ShoppingListEdit } from '../app/shopping-list-edit/shopping-list-edit';
import { Recipes } from '../app/recipes/recipes';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';
import { RecipeItem } from './recipes/recipe-list/recipe-item/recipe-item';
import { RecipeList } from './recipes/recipe-list/recipe-list';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Recipes,
    RecipeDetail,
    RecipeItem,
    RecipeList,
    ShoppingList,
    ShoppingListEdit
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
