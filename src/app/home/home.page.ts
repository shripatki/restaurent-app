import { SharedService } from './../shared/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  total = 0;
  constructor(private sharedService: SharedService) {
    this.sharedService.getTotalItemsInCart().subscribe((value) => {
      this.total = value;
    });
  }
}
