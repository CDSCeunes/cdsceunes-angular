import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommissionService } from '../../_services/commission.service';
import { Commission } from '../../_models/commission';

@Component({
    selector: 'app-commissions-home',
    templateUrl: './commissions-home.component.html',
    styleUrls: ['./commissions-home.component.css']
})

export class CommissionsHomeComponent implements OnInit {
    commissions: Commission[];
    selectedCommission: Commission;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private commissionService: CommissionService
    ) {}

    getCommissions(): void {
        this.commissionService.getCommissions().then(commissions => this.commissions = commissions);
    }

    ngOnInit(): void {
        this.getCommissions();
    }

    onSelect(commission: Commission): void {
        this.selectedCommission = commission;
    }

    gotoDetail(): void {
        this.router.navigate(['commissions/detail', this.selectedCommission.id]);
    }

    gotoForm(): void {
        this.router.navigate(['commissions/new']);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.commissionService.create(name)
          .then(commission => {
            this.commissions.push(commission);
          });
    }

    addComplete(name: string, minNumber: number, maxNumber: number): void {
        name = name.trim();
        if (!name) { return; }
        this.commissionService.createComplete(name, minNumber, maxNumber)
          .then(commission => {
            this.commissions.push(commission);
          });
    }

    delete(commission: Commission): void {
        this.commissionService.delete(commission.id)
        .then(() => {
          this.commissions = this.commissions.filter(t => t !== commission);
        });
    }

}

