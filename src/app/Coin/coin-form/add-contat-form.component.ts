import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Coin} from '../../model/Coin';
import * as fromActions from '../coin.action'
import * as fromReducers from '../coin.reducer'

import {Store} from '@ngrx/store';
import {AppState} from '../../reducers/index';
import {ArrayDataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-contat-form',
  templateUrl: './add-contat-form.component.html',
  styleUrls: ['./add-contat-form.component.css']
})

export class AddContatFormComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  array : Observable<ArrayDataSource<Coin>>


  constructor(private formBuilder: FormBuilder, private store : Store<AppState>){}

  ngOnInit() {
    this.addForm = this.formBuilder.group({

      name: ['', Validators.required],
      size:['', Validators.required],
      price: ['', Validators.required],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  addArticle(data: Coin) {
    this.store.dispatch(new fromActions.AddCoinAction(data));
    setTimeout(()=>this.store.dispatch(new fromActions.GetAction()),60 );
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    this.addArticle(this.addForm.value);
    this.addForm.setValue({
      name:[''],
      size:[''],
      price:['']
    });

  }
}
