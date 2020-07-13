import { DiscoveryService } from './discovery.service';
import { Discovery } from './discovery.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.page.html',
  styleUrls: ['./discovery.page.scss'],
})
export class DiscoveryPage implements OnInit {
  // discovery:string[]=['Clubs & Bars','Fine Dining','cafes','Nearby','Fast Foods','Featured Foods'];
  discovery: Discovery[];

  constructor(private discoveryService: DiscoveryService) {}

  ngOnInit() {
    this.discovery = this.discoveryService.getAllDiscovery();
  }
}
