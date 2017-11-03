import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    lists: any = [
        {
            headerName: "Groceries",
            items: [
                {
                    itemName: 'Milk',
                    price: "$1.98",
                    size: 'Gallon'
                },
                {
                    itemName: 'Cheese',
                    price: "$1.98",
                    size: 'Pound'
                }
            ]

        },{
            headerName: "Presents",
            items: [
                {
                    itemName: 'Shirt',
                    price: "$14.98",
                    size: 'L'
                },
                {
                    itemName: 'Pants',
                    price: "$32.98",
                    size: '34W 34L'
                }
            ]

        }
    ];

    constructor() {
        console.log('Hello DataProvider Provider');
    }

}
