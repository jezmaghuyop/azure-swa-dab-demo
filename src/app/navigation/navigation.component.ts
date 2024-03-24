import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../@core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  providers: [AuthService],
})
export class NavigationComponent implements OnInit {
  private readonly authService: AuthService = inject(AuthService);

  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.authService.getAuthInfo().subscribe((authInfo) => {
      if (authInfo && authInfo.clientPrincipal) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }
}
