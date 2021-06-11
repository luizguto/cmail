import { Component } from "@angular/core";
import { HeaderDataService } from "src/app/services/header.service";
import { PageDataService } from "src/app/services/page-data.service";

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {

    private _isMenuOpen = false;
    tituloDaPagina = 'CMail';

    constructor(private pageService: PageDataService, private headerService: HeaderDataService) {

        this.pageService.titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {
        this._isMenuOpen = !this.isMenuOpen;
    }

    handleBuscaChanges({ target }) {
        this.headerService.atualizarTermoDeFiltro(target.value)
    }

}