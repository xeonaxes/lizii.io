import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductServicesComponent } from './product-services/product-services.component';
import { ProductTurboCardComponent } from './product-turbo-card/product-turbo-card.component';
import { ProductVervveyComponent } from './product-vervvey/product-vervvey.component';
const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product-services',
    component: ProductServicesComponent,
  },
  {
    path: 'product-turbo-card',
    component: ProductTurboCardComponent,
  },
  {
    path: 'product-vervvey',
    component: ProductVervveyComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
