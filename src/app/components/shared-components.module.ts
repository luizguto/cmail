import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { MarcadorPipe } from '../pipes/marcador.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        CmailListItemComponent,
        MarcadorPipe
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        CmailListItemComponent
    ]
})
export class SharedComponentsModule { }
