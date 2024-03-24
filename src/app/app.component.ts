import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CartService, ProductService } from './@core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly productService: ProductService = inject(ProductService);
  private readonly cartService: CartService = inject(CartService);

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      console.log(products);
    });
  }
}
