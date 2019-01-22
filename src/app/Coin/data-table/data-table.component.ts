import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import * as fromActions from '../coin.action';
import {Observable} from 'rxjs/Observable';
import {Coin} from '../../model/Coin';
import {ArrayDataSource} from '@angular/cdk/collections';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit {
  array : Observable<ArrayDataSource<Coin>>

  displayedColumns: any[] = [/*'id',*/ 'name', 'size' , 'price',  'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator :MatPaginator;
  dataSource ;

  constructor(private store : Store<AppState>) {
  }

  loadcoins() {
   this.store.dispatch(new fromActions.GetAction());

    this.store.pipe(select(state => state.coin))
      .subscribe(
          data =>{
            if(!data){
              return;
            }

          //  const dataSlice = data.slice();


            this.array=data;
            console.log(this.array);

            this.dataSource =new MatTableDataSource(data);
            this.dataSource.sort=this.sort;
            this.dataSource.paginator=this.paginator;
      }
    );
  }

  Remoavemeal(i : any) {
   return this.store.dispatch(new fromActions.deleteCoinAction(i));
  }

  RemoveMealAndReload(i){

    setTimeout(()=>this.Remoavemeal(i),20);

    setTimeout(()=>this.loadcoins(),100);

  }

  ngOnInit() {
 //   this.store.dispatch(new fromActions.GetAction());
    this.loadcoins();
  }

}
