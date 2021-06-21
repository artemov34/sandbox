import { Post } from '@bk-core/services';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
import { GetTravel } from 'travel/travel.actions';

@Component({
  selector: 'app-business-expenses',
  templateUrl: './business-expenses.component.html',
  styleUrls: ['./business-expenses.component.scss']
})
export class BusinessExpensesComponent implements OnInit {
  public items: Post[];
  constructor(private readonly _store: Store) {}

  ngOnInit() {
    this._store.dispatch(new GetTravel());
    this._store
      .select(state => state.travel.posts)
      .subscribe(items => {
        this.items = items;
      });
  }
}
