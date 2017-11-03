import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    homelists:any;

    constructor(public navCtrl: NavController, public data:DataProvider) {

    }

    ionViewDidLoad(){
        this.homelists = this.data.lists;
    }

    itemClicked(item):void {
        this.navCtrl.push('InfoPage', item);
    }

}
