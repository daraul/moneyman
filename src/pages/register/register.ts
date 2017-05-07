import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

declare const firebase: any;

@Component({
    selector: 'register-page',
    templateUrl: './register.html',
    styleUrls: ['./register.css']
})

export class RegisterComponent {
    email = new FormControl(null, Validators.compose([Validators.required]));
    password = new FormControl(null, Validators.compose([Validators.required]));
    registration_form: FormGroup;

    constructor(private http: Http, private formBuilder: FormBuilder) {
        this.registration_form = formBuilder.group({
            email: this.email,
            password: this.password
        });
    }

    register(registration_details) {
        console.log(registration_details);
        console.log(this.email.value, this.password.value);
        
        firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value).catch(function(error) {
            // Handle Errors here.
            console.error(error);
            // ...
        });
    }
}