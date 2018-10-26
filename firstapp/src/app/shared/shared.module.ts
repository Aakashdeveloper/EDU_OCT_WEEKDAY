import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        StarComponent
    ],
    providers: [],
    exports: [
        FormsModule,
        CommonModule,
        StarComponent
    ]
})

export class SharedModule {

}
