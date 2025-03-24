import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // תיקון ה-redirectTo
  { path: 'dashboard', component: DashboardComponent }, // הוספת ה-Dashboard
  { path: 'categories', component: CategoriesComponent } // הוספת ה-Categories
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
