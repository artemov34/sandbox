import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { take } from 'rxjs/operators';

import { Post, PostService } from '@bk-core/services';

import { GetTravel } from './travel.actions';

export interface TravelStateModel {
  posts: Post[];
}

@State<TravelStateModel>({
  name: 'travel',
  defaults: {
    posts: []
  }
})
@Injectable()
export class TravelState {
  constructor(private readonly _postService: PostService) {}

  @Action(GetTravel)
  getTravel(ctx: StateContext<TravelStateModel>) {
    const state = ctx.getState();
    this._postService
      .getAll()
      .pipe(take(1))
      .subscribe((posts: Post[]) => {
        console.log(posts);
        ctx.setState({
          ...state,
          posts: [...posts]
        });
      });
  }
}
