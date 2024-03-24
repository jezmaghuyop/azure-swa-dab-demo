import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CartService, ProductService } from './@core';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './@core/models';

type Context = {
  products: Product[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductService, CartService],
})
export class AppComponent implements OnInit {
  private readonly productService: ProductService = inject(ProductService);
  private readonly cartService: CartService = inject(CartService);

  context: Context = {
    products: [],
  };

  ngOnInit(): void {
    // this.productService.getAll().subscribe((products) => {
    //   this.context.products = products;
    // });
    
    // this.productService.filter(5).subscribe((products) => {
    //   this.context.products = products;
    // });

    this.productService.filter(5, 'Name', 'desc').subscribe((products) => {
      this.context.products = products;
    });

     this.productService.get(6).subscribe((product) => {
      console.log(product);
    });
  }
}
