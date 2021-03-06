import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock-call-service.service'
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-stocks-component',
  templateUrl: './stocks-component.component.html',
  styleUrls: ['./stocks-component.component.css']
})
export class StocksComponentComponent implements OnInit {

  stocks;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stocks = this.stockService.getStocks()
    .subscribe(
          data => { this.stocks = data },
          err => console.error(err),
          () => console.log('done loading stocks')
        );
  }

  // getStocksMethod() {
  //   this.stockService.getStocks().subscribe(
  //     data => { this.stocks = data },
  //     err => console.error(err),
  //     () => console.log('done loading stocks')
  //   );
  // // }

}
