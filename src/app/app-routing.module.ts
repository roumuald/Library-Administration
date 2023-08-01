import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmailModalComponent } from './emailSender/email-modal/email-modal.component';

const routes: Routes = [
  {path:'menu', component:MenuComponent},
  {path:'sendEmail', component:EmailModalComponent},
  {path:'', redirectTo: 'menu', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
