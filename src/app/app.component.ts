import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isCollapsed: boolean = false;
  public lang: string = 'en';
  constructor(private readonly _translateService: TranslateService) {}

  public changeLang(lang: string) {
    console.log(lang);
    this._translateService.use(lang);
  }
}
