import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Email } from "src/app/models/email";
import { EmailService } from "src/app/services/email.service";

@Component({
    selector: 'cmail-item',
    templateUrl: './cmail-item.component.html',
    styleUrls: ['./cmail-item.component.css']
})
export class CmailItemComponent implements OnInit {

    // @Input() destinatario = '';
    // @Input() assunto = '';
    // @Input() introducaoDoConteudo = '';
    // @Input() dataDeEnvio = '';
    // @Output('eventoVaiRemover') vaiRemover = new EventEmitter();

    emailId = '';
    email: Email = new Email({
        destinatario: '',
        assunto: '',
        conteudo: '',
        dataDeEnvio: '',
        id: ''
    });

    constructor(private router: ActivatedRoute, private emailSerivce: EmailService) { }

    ngOnInit() {

        this.emailId = this.router.snapshot.paramMap.get('id')!;

        console.log(this.emailId);

        if (this.emailId) {
           this.emailSerivce.consultar(this.emailId).subscribe(emailResult => this.email = emailResult);
        }
    }

    // removeEmail(click: Event): void {
    //     console.log('clicou no botão remover"');

    //     if (confirm('Tem certeza?')) {
    //         this.vaiRemover.emit({ status: 'removing' });
    //     }
    // }
}