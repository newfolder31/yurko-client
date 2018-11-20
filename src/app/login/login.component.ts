import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { YuValidation } from '../core/validation/validation';
import { LoginService } from './login.service';
import { LoginRequest } from './interfaces/login-request.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends YuValidation implements OnInit {

    loginForm: FormGroup;

    constructor(
        private loginSrv: LoginService,
        private fb: FormBuilder,
        private router: Router
    ) {
        super();
    }

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this.loginForm = this.fb.group({
            email: [
                null,
                [ Validators.required ]
            ],
            password: [
                null,
                [ Validators.required ]
            ],
            remember: [
                true
            ]
        });
    }

    login(data: LoginRequest): void {
        this.loginSrv.login(data).subscribe(responce => {
            if (!responce) {
                console.log(responce);
                this.router.navigate(['home']);
            }
            console.log(responce);
        })
    }
}
