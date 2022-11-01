import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ListPageComponent } from './list-page/list-page.component';



@NgModule({
  declarations: [
    DetailsPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
