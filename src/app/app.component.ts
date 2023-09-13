import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ga4';
  sales_current(){
    this.title = "sales_current";
  }
  sales_overview(){
    this.title = "sales_overview";
  }

  trade(){
    this.title = "trade";
  }
  best_worst_sellers(){
    this.title = "best_worst_sellers";
  }
  store_metrics(){
    this.title = "store_metrics";
  }
  store_cash_management(){
    this.title = "store_cash_management";
  }


}
