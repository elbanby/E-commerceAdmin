import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectService } from './services/select.service';
import { SelectComponent } from './component/select/select.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SppinerComponent } from './component/sppiner/sppiner.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SelectComponent,
    SppinerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent,
    SelectComponent,
    SppinerComponent,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
]

})
export class SharedModule { }
