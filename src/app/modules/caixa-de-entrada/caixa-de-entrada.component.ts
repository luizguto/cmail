import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
	selector: 'cmail-caixa-de-entrada',
	templateUrl: './caixa-de-entrada.component.html',
	styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

	private _isNewEmailFormOpen = false;
	emailList: Email[] = [];
	email = {
		destinatario: '',
		assunto: '',
		conteudo: ''
	}

	constructor(private emailService: EmailService) { }

	ngOnInit() {
		this.emailService
			.listar()
			.subscribe(
				lista => {
					this.emailList = lista;
				}, erro => { 
					console.error(erro);
				})
	}

	get isNewEmailFormOpen() {
		return this._isNewEmailFormOpen;
	}

	toggleNewEmailForm() {
		this._isNewEmailFormOpen = !this.isNewEmailFormOpen
	}

	handleNewEmail(formEmail: NgForm) {

		if (formEmail.invalid) return;

		this.emailService
			.enviar(this.email)
			.subscribe(
				emailApi => {
					this.emailList.push(emailApi);
					this.email = { destinatario: '', assunto: '', conteudo: '' };
					formEmail.reset();
				}
				, erro => { console.error(erro) }
			)
	}
}