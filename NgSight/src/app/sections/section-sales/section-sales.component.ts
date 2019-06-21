import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../../services/sales-data.service';

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.css']
})
export class SectionSalesComponent implements OnInit {

  salesDataByCustomer: any;
  salesDataByState: any;

  constructor(private _salesDataService: SalesDataService) { }

  ngOnInit() {
    this._salesDataService.getOrdersByState().subscribe(r => {
      this.salesDataByState = r;
    });
    
    this._salesDataService.getOrdersByCustomer(5).subscribe(r => {
        this.salesDataByCustomer = r;
    });
  }

}
