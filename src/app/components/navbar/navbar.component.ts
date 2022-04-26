import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn!: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
