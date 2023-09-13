import { Component } from '@angular/core';
import { GAnalytics4Service } from './providers/gAnalytics4.service';
// Declare gTM dataLayer array.
declare global {
  interface Window { dataLayer: any[]; }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ga4';
  constructor(public gAnalytics4Service: GAnalytics4Service){

  }
  sales_current(){
    this.title = "sales_current";
    this.gAnalytics4Service.virtualPageViewEvent(location.hostname+this.title, this.title,"/sales/"+this.title);
  }
  sales_overview(){
    this.title = "sales_overview";
    this.gAnalytics4Service.virtualPageViewEvent(location.hostname+this.title, this.title,"/sales/"+this.title);
  }

  trade(){
    this.title = "trade";
    this.gAnalytics4Service.virtualPageViewEvent(location.hostname+this.title, this.title,"/sales/"+this.title);
  }
  best_worst_sellers(){
    this.title = "best_worst_sellers";
    this.gAnalytics4Service.virtualPageViewEvent(location.hostname+this.title, this.title,"/sales/"+this.title);
  }
  store_metrics(){
    this.title = "store_metrics";
    this.gAnalytics4Service.virtualPageViewEvent(location.hostname+this.title, this.title,"/operations/"+this.title);
  }
  store_cash_management(){
    this.title = "store_cash_management";
    this.gAnalytics4Service.virtualPageViewEvent(location.hostname+this.title, this.title,"/operations/"+this.title);
  }


}
