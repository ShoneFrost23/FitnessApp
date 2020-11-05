import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientInfoComponent } from './Views/client-info/client-info.component';
import { FoodMacrosComponent } from './Views/food-macros/food-macros.component';
import { MealOptionsComponent } from './Views/meal-options/meal-options.component';
import { MealPlanComponent } from './Views/meal-plan/meal-plan.component';
import { SharedService } from './shared.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    FoodMacrosComponent,
    MealPlanComponent,
    MealOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatInputModule,
    ToastrModule.forRoot(),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
