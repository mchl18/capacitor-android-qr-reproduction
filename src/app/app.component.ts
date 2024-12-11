import { Component } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    CapacitorBarcodeScanner.scanBarcode({
      hint: 1
    }).then((barcodeData) => {
      console.log(barcodeData);
    }).catch((error) => {
      console.error(error);
    });
  }
}
