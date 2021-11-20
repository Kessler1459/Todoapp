import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            username: new FormControl("", [Validators.required, Validators.minLength(5)]),
            email: new FormControl("", [Validators.email, Validators.required]),
            password: new FormControl("", [Validators.required, Validators.minLength(7)])
        })
    }

    onSubmit() {
        if (this.form.valid) {
            this.authService.emailExists(this.form.value.email).subscribe(exists=>console.log(exists))
        }
    }

}
