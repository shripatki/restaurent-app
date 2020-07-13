import { Injectable } from '@angular/core';
import { BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
  providedIn: 'root',
})
export class ScannerService {
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor() {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true,
    };
  }
}
