import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CmailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedComponentsModule,
        CadastroRoutingModule,
        CmailFormModule
    ],
})
export class CadastroModule { }