import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { MyProducts } from "../../mocks/products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Product[] = MyProducts;
  selectedProduct: Product;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) : void{
    console.log("Selected " + product.name);
    this.selectedProduct = product;
  }

}
