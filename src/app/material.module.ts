import { NgModule } from '@angular/core';

import { 
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule  
    
 } from '@angular/material';

 import { FlexLayoutModule } from '@angular/flex-layout';
 import { MatMomentDateModule } from '@angular/material-moment-adapter';

 const MODULES = [
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule, 
    MatMomentDateModule,
    FlexLayoutModule
];

 @NgModule({
     imports: MODULES,
     exports: MODULES
 })

 export class MaterialModule { }