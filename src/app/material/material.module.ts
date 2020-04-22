import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

const moduleMaterial = [
  MatCardModule
]

@NgModule({
  imports: [ moduleMaterial ],
  exports : [moduleMaterial]
})
export class MaterialModule { }
