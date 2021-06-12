import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'cmail-list-item',
    templateUrl: './cmail-list-item.component.html',
    styles: []
})
export class CmailListItemComponent implements OnInit {

    @Input() id = '';
    @Input() destinatario = '';
    @Input() assunto = '';
    @Input() introducaoDoConteudo = '';
    @Input() dataDeEnvio = '';
    @Output('eventoVaiRemover') vaiRemover = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    removeEmail(click: Event): void {
        console.log('clicou no botão remover"');

        if (confirm('Tem certeza?')) {
            this.vaiRemover.emit({ status: 'removing' });
        }
    }
}