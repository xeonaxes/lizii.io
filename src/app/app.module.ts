import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductServicesComponent } from './product-services/product-services.component';
import { HeaderComponent } from './header/header.component';
import { ProductTurboCardComponent } from './product-turbo-card/product-turbo-card.component';
import { ProductVervveyComponent } from './product-vervvey/product-vervvey.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertsComponent,
    ProductListComponent,
    TopBarComponent,
    ProductServicesComponent,
    HeaderComponent,
    ProductTurboCardComponent,
    ProductVervveyComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
