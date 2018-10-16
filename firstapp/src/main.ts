import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  /*
  module=> all declrations
  component=> html css & logical
  pipe=> help to do run times changes in data
  service=> help to connect to third party
  routing=>  help to maintain routes
  */
