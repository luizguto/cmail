import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CmailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        CmailFormModule,
        LoginRoutingModule,
        HttpClientModule
    ]
})
export class LoginModule { }
