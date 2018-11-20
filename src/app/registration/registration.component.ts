import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YuValidation } from '../core/validation/validation';
import { RegistrationService } from './registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends YuValidation implements OnInit {

    registrationForm: FormGroup;

    constructor(
        public registrationSrv: RegistrationService,
        private fb: FormBuilder
    ) {
        super();
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.registrationForm = this.fb.group({
            email: [
                null,
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            password: [
                null,
                [
                    Validators.required,
                    Validators.minLength(6)
                ]
            ],
            first_name: [
                null,
                [
                    Validators.required
                ]
            ],
            last_name: [
                null,
                [
                    Validators.required
                ]
            ],
            fathers_name: [
                null,
                [
                    Validators.required
                ]
            ]
        });
    }
}
