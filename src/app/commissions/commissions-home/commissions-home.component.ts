import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { CommissionService } from '../../_services/commission.service';
import { Commission } from '../../_models/commission';

@Component({
    selector: 'app-commissions-home',
    templateUrl: './commissions-home.component.html',
    styleUrls: ['./commissions-home.component.css']
})

export class CommissionsHomeComponent implements OnInit {
    page = 1;
    rowSelected: boolean;
    commissions: Commission[];
    selectedCommission: Commission;

    public membersModal;
    public positionsModal;

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
        this.rowSelected = false;
    }

    onSelect(commission: Commission): void {
        if (commission != null) {
            this.selectedCommission = commission;
            this.rowSelected = true;
        } else {
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.selectedCommission = null;
        this.rowSelected = false;
    }

    isRowSelected() {
        if (this.rowSelected) {
            return true;
        } else {
            return false;
        }
    }

    willButtonBeShown(commission: Commission): boolean {
        if (this.rowSelected && commission === this.selectedCommission) {
            return false;
        } else {
            return true;
        }
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

