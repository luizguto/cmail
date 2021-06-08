import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CaixadeEntradaRoutingModule } from './caixa-de-entrada-routing.module';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    CaixadeEntradaRoutingModule
  ]
})
export class CaixaDeEntradaModule { }
