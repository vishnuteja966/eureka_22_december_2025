import { Component } from '@angular/core';
import * as data from './product_data.json';
import { Charonly } from '../../custom-directives/charonly';
import { AphaNumeric } from '../../custom-directives/apha-numeric';
import { Disablecopypaste } from '../../custom-directives/disablecopypaste';
import { Zoomin } from '../../custom-directives/zoomin';
import { ZoomOut } from '../../custom-directives/zoom-out';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [Charonly, AphaNumeric, Disablecopypaste, Zoomin, //ZoomOut,
     RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = (data as any).default; 
}
