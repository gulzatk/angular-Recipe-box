import { Component } from '@angular/core';
import {Recipe} from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:boolean = false;
 recipies:Recipe[] = [
   new Recipe('Fried eggs',['egg','salt','butter'],'put butter in a pan and add eggs into pan,add salt,done.','./assets/images/eggs.jpeg'),
   new Recipe('pasta',['pasta','salt','tomatoes'],'Add pasta in boiling water,Add salt and tomatoes,done.', './assets/images/pasta.jpg')
 ];

 showRecipe(){
 this.display=!this.display;
}
public selectedRecipe: Recipe = null;
// editRecipe(recipe:Recipe){
//   this.selectedRecipe = recipe;
// }
// finishedEditing(){
//   this.selectedRecipe = null;
// }
}
