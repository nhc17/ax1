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
    
    
 } from '@angular/material';

 import { FlexLayoutModule } from '@angular/flex-layout';

 const MODULES = [
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    FlexLayoutModule
 ];

 @NgModule({
     imports: MODULES,
     exports: MODULES
 })

 export class MaterialModule { }