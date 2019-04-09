import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoComponent } from './estado.component';
import { EstadoRoutingModule } from './estado.routing.module';

@NgModule({
  declarations: [EstadoComponent],
  imports: [
    CommonModule,
    EstadoRoutingModule
  ]
})
export class EstadoModule { }
