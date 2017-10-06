import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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
        private router: Router) { }

    ngOnInit() {

    }

    login() {

    }
}
