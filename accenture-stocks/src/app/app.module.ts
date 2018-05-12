import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StocksComponentComponent } from './stocks-component/stocks-component.component';
import { StockService } from './services/stock-call-service.service'

@NgModule({
  declarations: [
    AppComponent,
    StocksComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StockService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
