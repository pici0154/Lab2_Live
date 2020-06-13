import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public costItems: CostItem[];

    public description: string = ' ';
    public sum: number;
    public location: string = ' ';
    public date: Date;
    public currency: string = ' ';
    public type: CostType;


    public descriptionE: string = ' ';
    public sumE : string = '';
    public typeE: string = '';

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.loadCostItems();
    }


    loadCostItems() {
        this.http.get<CostItem[]>(this.baseUrl + 'api/costItems').subscribe(result => {
            this.costItems = result;
            console.log(this.costItems);
        }, error => console.error(error));
    }

    delete(costItemId: string) {
        if (confirm('Are you sure you want to delete the cost item with id ' + costItemId + '?')) {
            this.http.delete(this.baseUrl + 'api/costItems/' + costItemId)
                .subscribe
                (
                    result => {
                        alert('cost Item successfully deleted!');
                        this.loadCostItems();
                    },
                    error => alert('Cannot delete cost item - maybe it has comments?')
                )
        }
    }

    edit(e, costItemId: string) {
        var costItem: CostItem = <CostItem>{};

        costItem.id = Number(costItemId);
        costItem.description = this.description;
        costItem.sum = Number(this.sum);
        costItem.location = this.location;
        costItem.date = this.date; //new Date;
        costItem.currency = this.currency;
        costItem.type = this.type;
    }

    submit() {

        var costItem: CostItem = <CostItem>{};
        // costItem.id = 10;
        costItem.description = this.description;
        costItem.sum = Number(this.sum); 
        costItem.location = this.location; 
        costItem.date = this.date; //new Date;
        costItem.currency = this.currency; 
        costItem.type = this.type;

        this.http.post(this.baseUrl + 'api/costItems', costItem).subscribe(result => {
            console.log('success!');
            this.loadCostItems();
        },
        error => {    
            if (error.status == 400) {
                console.log(error.error.errors);

                if (error.error.errors.Description != "")
                {
                   this.descriptionE = error.error.errors.Description[0];
                }

                if (error.error.errors.Sum != "") {
                 this.sumE = error.error.errors.Sum;
                }

                if (error.error.errors.Type != "") {
                 this.typeE = error.error.errors.Type;
                }

            }
        });
    }
}



interface CostItem {
    id: number;
    description: string;
    sum: number;
    location: string;
    date: Date;
    currency: string;
    type: CostType;
}

enum CostType {
    food = 0,
    utilities = 1,
    transportation = 2,
    outing = 3,
    groceries = 4,
    clothes = 5,
    electronics = 6,
    other = 7
}

