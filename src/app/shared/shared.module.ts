import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AntModule } from '../ant.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, AntModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [CommonModule, ComponentsModule, AntModule, ReactiveFormsModule, FormsModule, HttpClientModule]
})
export class SharedModule {}
