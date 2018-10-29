import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FormsComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [

    ]
})

export class AppModule {

}
