import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminMainComponent } from './admin/pages/admin-main/admin-main.component';
import { UiMainComponent } from './ui/pages/ui-main/ui-main.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},


  {path:"admin", component:AdminMainComponent,children:[
    {path:"", loadChildren:()=> import("./admin/admin.module").then(module=>module.AdminModule)},
  ]},

  {path:"ui", component:UiMainComponent,children:[
    {path:"", loadChildren:()=> import("./ui/ui.module").then(module=>module.UiModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
