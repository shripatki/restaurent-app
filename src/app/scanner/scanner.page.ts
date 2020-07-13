import { SharedService } from './../shared/shared.service';
import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../home/restaurants/restaurant.service';
import { Restaurant } from '../home/restaurants/restaurant.model';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  scannedData: any;
  restaurant: Restaurant;
  tableNo: number;
  constructor(
    private barcodeCtrl: BarcodeScanner,
    private restaurantService: RestaurantService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.sharedService.setIfDineIn(false);
  }
  ionViewDidLeave() {
    this.restaurant = undefined;
  }
  scanBar() {
    const options: BarcodeScannerOptions = {
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417 ',
    };
    this.barcodeCtrl
      .scan(options)
      .then((barcodeData) => {
        this.scannedData = JSON.stringify(barcodeData.text);
        this.tableNo = this.scannedData.substr(this.scannedData.length - 4);
        const id = this.scannedData.substr(1, 2);
        this.restaurant = this.restaurantService.getRestaurant(id);
        this.sharedService.setIfDineIn(true);
      })
      .catch((err) => {
        alert('Error' + err);
      });
  }
}
