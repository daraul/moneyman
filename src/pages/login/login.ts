import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'login-page',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginComponent {
    email = new FormControl(null, Validators.compose([Validators.required]));
    password = new FormControl(null, Validators.compose([Validators.required]));
    login_form: FormGroup;

    constructor(private http: Http, private formBuilder: FormBuilder) {
        this.login_form = formBuilder.group({
            email: this.email,
            password: this.password
        });
    }

    loginWithFacebook() {
        
    }

    login(login) {
        
    }
}