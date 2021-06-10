import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'cmail-list-item',
    templateUrl: './cmail-list-item.component.html',
    styles: []
})
export class CmailListItemComponent implements OnInit {

    @Input() destinatario = '';
    @Input() assunto = '';
    @Input() introducaoDoConteudo = '';
    @Input() dataDoEnvio = '';

    constructor() {}

    ngOnInit() {}
    
}