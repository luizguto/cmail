import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmailItemComponent } from 'src/app/components/cmail-item/cmail-item.component';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

const rotasCadastro: Routes = [
    { path: '', component: CaixaDeEntradaComponent },
    { path: ':id', component: CmailItemComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(rotasCadastro)
    ],
    exports: [
        RouterModule
    ]
})
export class CaixadeEntradaRoutingModule { }
