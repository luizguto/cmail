import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';
import { HeaderDataService } from 'src/app/services/header.service';
import { PageDataService } from 'src/app/services/page-data.service';

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
	};

	termoParaFiltro = '';

	constructor(private emailService: EmailService, private pageService: PageDataService, private headerService: HeaderDataService) { }

	ngOnInit() {
		this.emailService
			.listar()
			.subscribe(
				lista => {
					this.emailList = lista;
				}, erro => {
					console.error(erro);
				});

		this.pageService.defineTitulo('Caixa de Entrada - CMail');

		this.headerService
			.valorDoFiltro
			.subscribe(novoValor => this.termoParaFiltro = novoValor);
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

	handleRemoveEmail(eventoVaiRemover, emailId) {
		console.log(eventoVaiRemover);
		if (eventoVaiRemover.status === 'removing') {
			this.emailService
				.deletar(emailId)
				.subscribe(
					res => {
						console.log(res);
						//remove	o	email	da	lista	de	emails	depois	dela	ser	apagada	da	API
						this.emailList = this.emailList.filter((email: Email) => email.id != emailId);
					}
					, err => console.error(err)
				)
		}
	}

	filtrarEmailsPorAssunto() {
		const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();
		return this.emailList.filter(email => {
			const assunto = email.assunto.toLowerCase()
			return assunto.includes(termoParaFiltroEmMinusculo)
		})
	}
}