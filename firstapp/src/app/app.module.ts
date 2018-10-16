import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    // all module
    imports: [
        BrowserModule
    ],

    // all components & pipe
    declarations: [
        AppComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // all services
    providers: []
})

export class AppModule {

}
