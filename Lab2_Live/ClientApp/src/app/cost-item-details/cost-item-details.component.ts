import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cost-item-details',
  templateUrl: './cost-item-details.component.html',
  styleUrls: ['./cost-item-details.component.css']
})
export class CostItemDetailsComponent implements OnInit {
    private costItem: CostItemWithDetails;


    public enableEdit: boolean = false;
    public enableEditIndex: number = null;


    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string,
        private route: ActivatedRoute) {

    }
    loadCostItem(costItemId: string) {
        this.http.get<CostItemWithDetails>(this.baseUrl + 'api/costItems/' + costItemId).subscribe(result => {
            this.costItem = result;
            console.log(this.costItem);
        }, error => console.error(error));
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.loadCostItem(params.get('costItemId'));
        });
  }
    edit(costItemId: number) {
        this.enableEdit = true;
        this.enableEditIndex = costItemId;
        console.log(costItemId);
    }
}
interface CostItemWithDetails {
    id: number;
    description: string;
    sum: number;
    location: string;
    date: Date;
    currency: string;
    type: string;
    comments: Comment[];
}

interface Comments {
    text: string;
    important: boolean; 
}
