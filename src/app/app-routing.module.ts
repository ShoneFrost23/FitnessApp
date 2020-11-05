import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientInfoComponent } from './Views/client-info/client-info.component';
import { FoodMacrosComponent } from './Views/food-macros/food-macros.component';
import { MealOptionsComponent } from './Views/meal-options/meal-options.component';
import { MealPlanComponent } from './Views/meal-plan/meal-plan.component';

const routes: Routes = [
  { path: '', component: ClientInfoComponent },
  { path: 'food-macros', component: FoodMacrosComponent },
  { path: 'meal-options', component: MealOptionsComponent},
  { path: 'meal-plan', component: MealPlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
