import { Component } from '@angular/core';
import { product } from "../products";

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent {
    products = product;
}
