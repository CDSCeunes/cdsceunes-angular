import { AppRoutingModule } from '../app.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})

export class AboutModule {

}
