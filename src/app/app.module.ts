import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddContatFormComponent } from './Coin/coin-form/add-contat-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {coinsReducer} from './Coin/coin.reducer';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoinEffects} from './Coin/coin.effect';
import {CoinService} from './Service/CoinService';
import { DataTableComponent } from './Coin/data-table/data-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

/*import {MatButtonModule, MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material/typings/input';
//import {MatRippleModule} from '@angular/material/typings/esm5/core';*/
import {MatButtonModule,MatPaginatorModule,MatSortModule, MatDialogModule, MatToolbarModule,MatCheckboxModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddContatFormComponent,
    DataTableComponent
  ],
  imports: [
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule, 
    MatProgressSpinnerModule,
    MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSortModule,
    EffectsModule.forRoot([CoinEffects]),
    ReactiveFormsModule,
    StoreDevtoolsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    StoreModule.forRoot({coin : coinsReducer}),

    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],

  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule {}
