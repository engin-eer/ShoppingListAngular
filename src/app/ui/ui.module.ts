import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMainComponent } from './pages/ui-main/ui-main.component';
import { UiLayoutComponent } from './ui-layout/ui-layout.component';
import { first } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ListsComponent } from './pages/lists/lists.component';



@NgModule({
  declarations: [
    UiMainComponent,
    UiLayoutComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:ListsComponent},
      {path:"lists", component:ListsComponent},

    ]),
  ]
})
export class UiModule { }
