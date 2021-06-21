import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TravelModule } from './travel/travel.module';
import { TravelState } from 'travel/travel.state';

import en from './i18n/en.json';
import ru from './i18n/ru.json';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([TravelState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    SharedModule,
    TravelModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en'
    })
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly _translate: TranslateService) {
    this._translate.setTranslation('ru', ru, true);
    this._translate.setTranslation('en', en, true);
  }
}
