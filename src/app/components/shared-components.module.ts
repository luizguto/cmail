import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { MarcadorPipe } from '../pipes/marcador.pipe';
import { CmailItemComponent } from './cmail-item/cmail-item.component';

@NgModule({
    declarations: [
        HeaderComponent,
        CmailListItemComponent,
        CmailItemComponent,
        MarcadorPipe        
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        CmailListItemComponent,
        CmailItemComponent
    ]
})
export class SharedComponentsModule { }
