import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn!: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  toBanner() {
    document.getElementById('banner')?.scrollIntoView({ behavior: 'smooth' });
  }

  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  toPortfolio() {
    document
      .getElementById('portfolio')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  toInfo() {
    document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' });
  }

  toSkills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
