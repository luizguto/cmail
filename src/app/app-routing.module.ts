import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth.guards";
import { CmailItemComponent } from "./components/cmail-item/cmail-item.component";
const rotas: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'inbox',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule)
    },
    // {
    //     path: 'inbox/:id',
    //     component: CmailItemComponent,
    //     canActivate: [AuthGuard],
    // },
    {
        path: 'cadastro',
        loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    { path: '**', redirectTo: 'login' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
