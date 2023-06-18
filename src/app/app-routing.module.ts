import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './components/cats/cats.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: "home", component: WelcomeComponent},
  {path: "cats", component: CatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
