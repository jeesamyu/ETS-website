import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './header/abouts/abouts.component';
import { CareerComponent } from './header/career/career.component';
import { ContactComponent } from './header/contact/contact.component';
import { HomeComponent } from './header/home/home.component';
const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'abouts',component:AboutsComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'career',component:CareerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
