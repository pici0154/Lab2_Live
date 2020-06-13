import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public costItems: CostItem[];

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

    submit() {


        var costItem: CostItem = <CostItem>{};
        // costItem.id = 10;
        costItem.description = (<HTMLInputElement>document.getElementById("description")).value;
        costItem.sum = Number((<HTMLInputElement>document.getElementById("sum")).value);
        costItem.location = (<HTMLInputElement>document.getElementById("location")).value;
        costItem.date = new Date;
        costItem.currency = (<HTMLInputElement>document.getElementById("currency")).value;
        costItem.type = CostType.food;

        this.http.post(this.baseUrl + 'api/costItems', costItem).subscribe(result => {
            console.log('success!');
            this.loadCostItems();
        },
        error => {    
            if (error.status == 400) {
                console.log(error.error.errors);

                if (error.error.errors.Description != "")
                {
                   // (<HTMLInputElement>document.getElementById("description")).value = error.error.errors.Description;
                }

                if (error.error.errors.Sum != "") {
                 //   (<HTMLInputElement>document.getElementById("sum")).value = error.error.errors.Sum;
                }

                if (error.error.errors.Type != "") {
                 //   (<HTMLInputElement>document.getElementById("type")).value = error.error.errors.Type;
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

