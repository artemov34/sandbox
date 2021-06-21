import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

const components = [MenuComponent]; // Add common system components

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ],
  declarations: [
    ...components
  ]
})
export class ComponentsModule { }
