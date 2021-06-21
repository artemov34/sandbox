import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  constructor(private readonly _title: Title, private readonly _translateService: TranslateService) {
    this._title.setTitle(this._translateService.instant('travel.index.title'));
  }

  ngOnInit() {
    console.log('inbox inited');
  }
}
