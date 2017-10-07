import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PositionService } from '../../_services/position.service';
import { Position } from '../../_models/position';

@Component({
    selector: 'app-positions-home',
    templateUrl: './positions-home.component.html',
    styleUrls: ['./positions-home.component.css']
})

export class PositionsHomeComponent implements OnInit {
    page = 1;
    rowSelected: boolean;
    positions: Position[];
    selectedPosition: Position;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private positionService: PositionService
    ) { }

    getPositions(): void {
        this.positionService.getPositions().then(positions => this.positions = positions);
    }

    ngOnInit(): void {
        this.getPositions();
        this.rowSelected = false;
    }

    onSelect(position: Position): void {
        if (position != null) {
            this.selectedPosition = position;
            this.rowSelected = true;
        } else {
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.selectedPosition = null;
        this.rowSelected = false;
    }

    isRowSelected() {
        if (this.rowSelected) {
            return true;
        } else {
            return false;
        }
    }

    willButtonBeShown(position: Position): boolean {
        if (this.rowSelected && position === this.selectedPosition) {
            return false;
        } else {
            return true;
        }
    }

    gotoDetail(): void {
        this.router.navigate(['positions/detail', this.selectedPosition.id]);
    }

    gotoForm(): void {
        this.router.navigate(['positions/new']);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.positionService.create(name)
            .then(position => {
                this.positions.push(position);
            });
    }

    addComplete(name: string, inCharge: string, commission: string): void {
        name = name.trim();
        inCharge = inCharge.trim();
        commission = commission.trim();

        this.positionService.createComplete(name, inCharge, commission)
            .then(position => {
                this.positions.push(position);
            });
    }

    delete(position: Position): void {
        this.positionService.delete(position.id)
            .then(() => {
                this.positions = this.positions.filter(t => t !== position);
            });
    }

}

