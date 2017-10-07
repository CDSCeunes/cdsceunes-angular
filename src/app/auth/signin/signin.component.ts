import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
    moduleId: module.id,
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})

export class SignInComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {

    }

    login() {
      console.log(this.model);
      this.authService.signin(this.model.username, this.model.password);
    }
}
