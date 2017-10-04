import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-user-config',
    templateUrl: './users-config.component.html',
    styleUrls: ['./users-config.component.css']
})

export class UsersConfigComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
    }
}
