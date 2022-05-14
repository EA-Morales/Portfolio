import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';

  constructor(
    private route: Router,
    private readonly fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.loginform();
  }

  loginform(): FormGroup {
    return this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get userLogin() {
    return this.loginForm.get('username');
  }

  get passwordLogin() {
    return this.loginForm.get('password');
  }

  onSubmitLogin() {
    this.authService.login(this.loginForm.value).subscribe(
      res => {
        //console.log('te lugueaste exitosamente');
        this.route.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
