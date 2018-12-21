import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../store/services/api.service';
import { StoreService } from '../store/services/store/store.state';
import { GlobalSlideTypes } from '../store/services/store/store.actions';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
  providers: [ApiService],
})

export class SearcherComponent implements OnInit {

  // array with differents values of Type Filter selected on first optional Select
  @Output() filtersValuesOutput  = new EventEmitter<any>();

  public launches:      any[];
  public filterTypes:   any[];
  public filterValues$: Observable<any>;

  constructor( private _api: ApiService, private _store: Store<State> ) {  }

  ngOnInit() {
    this.selectFilterType();
  }

  selectFilterType() {
    this.filterTypes = [ ... this._api.getFilterTypes()] ;
  }

  // Select possible values of Type Filter choose on Combo
  selectFilterValue(filterType) {

      let i = parseInt(filterType, 10);

      switch (i) {
            case 0: { // Status Filter
                this.filterValues$ = this._store
                    .select('status')
                    .pipe(map(status => status.status),
                        // tap(res => console.log(res))
                        );
                break;
            }
            case 1: { // Agency Filter
                this.filterValues$ = this._store
                    .select('agency')
                    .pipe(map(agencies => agencies.agency),
                    // tap(res => console.log(res))
                    );
                break;
            }
            case 2: { // Mission Filter
                this.filterValues$ = this._store
                    .select('mission')
                    .pipe(map(missions => missions.mission),
                     // tap(res => console.log(res))
                     );
                break;
            }
            // console.log('searcher.componente.selectFilterValue', this.filterValues$ );
      }
  }

  selectLaunches(valueSelected) {
      this.filtersValuesOutput.next(valueSelected);
  }


}
