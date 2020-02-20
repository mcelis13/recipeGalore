import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// importing components
import { AppComponent } from './app.component';
import { Header } from '../app/header/header';
import { ShoppingList } from '../app/shopping-list/shopping-list';
import { ShoppingListEdit } from '../app/shopping-list-edit/shopping-list-edit';
import { RecipeDetail } from '../app/recipe-detail/recipe-detail';
import { RecipeItem } from '../app/recipe-item/recipe-item';
import { RecipeList } from '../app/recipe-list/recipe-list';

@NgModule({
  declarations: [
    AppComponent,
    Header,
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
